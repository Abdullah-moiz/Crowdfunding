import React from 'react'
import { Link } from 'react-router-dom'
import { Campaign } from '../components'
import { useSelector } from 'react-redux'

export default function MyCampaign() {

    const myAddress = useSelector(state => state.Contract.address);
    const allCampaign = useSelector(state => state.Contract.contractData);


    const MyCampaign = allCampaign?.filter((mYCamp) => {
        if (mYCamp.owner === myAddress) {
            return mYCamp;
        }
    })

    console.log(MyCampaign)






    return (
        <div className='w-full  bg-slate-950 min-h-screen'>
            <div className="text-sm flex items-center w-full px-4 justify-start border-b border-b-white breadcrumbs text-white">
                <ul>
                    <li>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        My Campaign
                    </li>
                </ul>
            </div>
            <div className='w-full h-full px-2  overflow-auto py-2'>
                <h1 className=' text-white font-semibold py-2'>My Campaigns (5) </h1>

                <Campaign />
            </div>
        </div>
    )
}
