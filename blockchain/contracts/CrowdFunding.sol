// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    constructor() {
        
    }

    struct Campaign {
        address  owner ;
        string title ;
        string description ;
        uint256 target;
        uint256 deadline;
        string image;
        uint256 amountCollected;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campagins;

    uint256 public numberOFCampaigns = 0;


    function createCampaign (address _owner , string memory _title  , string memory _description , uint256 _target , uint256 _deadline , string memory _image )  public returns(uint256) {
        Campaign storage campaign = campagins[numberOFCampaigns] ;

        require(campaign.deadline <  block.timestamp , "Deadline must be Future Date" );

        campaign.owner = _owner;
        campaign.deadline = _deadline ;
        campaign.title = _title;
        campaign.description  =  _description;
        campaign.target = _target;
        campaign.image = _image;
        campaign.amountCollected = 0 ;

        numberOFCampaigns = numberOFCampaigns + 1 ;

        return numberOFCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable{
        uint256 amount  =  msg.value;

        Campaign storage campaign = campagins[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent , ) = payable(campaign.owner).call{value : amount}("");

        if(sent){
            campaign.amountCollected = campaign.amountCollected +  amount;
        }
    }

    function getDonators(uint256 _id) public view returns (address[] memory , uint256[] memory) {
        return (campagins[_id].donators ,  campagins[_id].donations);
    }

    function getCampaign() public view returns (Campaign[] memory){
        Campaign[] memory allCampaigns = new Campaign[](numberOFCampaigns);

        for(uint i = 0 ; i < numberOFCampaigns ; i++){
            Campaign storage item =  campagins[i];

            allCampaigns[i] =  item;
        }

        return allCampaigns;
    }
}