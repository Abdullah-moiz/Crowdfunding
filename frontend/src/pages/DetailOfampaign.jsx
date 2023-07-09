import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ethers } from 'ethers';
import { daysLeft } from '../utils';
import { ImageLoader, Loading } from '../components';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { toast, ToastContainer } from 'react-toastify'


export default function DetailOfampaign() {
  const ownerAddress = useSelector(state => state.Contract.address);
  const [donationAmount, setDonationAmount] = useState(0);
  const { contract } = useContract("0x853C53E1BaAe5bb341fC0Ac7Ff67B932a7F6fe58");
  const { mutateAsync: donateToCampaign, isLoading } = useContractWrite(contract, "donateToCampaign")
  const allCampaign = useSelector(state => state.Contract.contractData);
  const [loadImage, setLoadImage] = React.useState(true)
 

  const { id } = useParams()
  const regex = /(.*?)(0x[A-Fa-f0-9]+)/;
  const match = id.match(regex);

  const title = match[1];
  const ownerID = match[2];


  const thisCampagin = allCampaign?.filter((myCamp, i) => {
    let titleOFThisCampaign = myCamp?.title.replace(/ /g, '');
    let ownerOFThisCampaign = myCamp?.owner;
    if (title === titleOFThisCampaign && ownerID === ownerOFThisCampaign) {
      return [myCamp, i]
    }
  })


  const indexOfthisCampaign = allCampaign.indexOf(thisCampagin[0])




  const target = ethers.utils.formatEther(thisCampagin[0]?.target?.toString())
  const amountCollected = ethers.utils.formatEther(thisCampagin[0]?.amountCollected?.toString())

  const numTarget = Number(target) * 10000000000000000
  const numAmountCollected = Number(amountCollected) * 10000000000000000


  const call = async () => {

    if (indexOfthisCampaign && donationAmount > 0) {
      try {
        const data = await donateToCampaign({ args: [indexOfthisCampaign], value: ethers.utils.parseEther(donationAmount) });
        toast.success("Donated Successfully")
        console.info("contract call successs", data);
      } catch (err) {
        toast.error("Donated Unsuccessfull Please Retry !")
        console.error("contract call failure", err);
      }

    } else {
      toast.error("Please Enter valid  Amount must be Greater then 0")
    }

  }



console.log(thisCampagin[0])
  return (
    <>
      {
        isLoading && <Loading />
      }
      <div className='w-full flex items-center justify-start flex-col  min-h-screen bg-slate-950'>
        <div className="text-sm flex items-center w-full px-4 justify-start border-b border-b-white breadcrumbs text-white">
          <ul>
            <li>
              <Link to="/">
                <s vg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></s>
                Home
              </Link>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Campaign Detail
            </li>
          </ul>
        </div>

        <div className='w-full md:h-4/5 flex items-center  justify-center mt-4 flex-col  py-4'>
          <div className='w-full md:h-96  items-center justify-center px-2 md:px-4  flex md:flex-row flex-col '>
            <div className='md:w-2/3 w-full h-full '>
              {
                loadImage && <figure><ImageLoader /></figure>
              }
              <img src={thisCampagin[0]?.image} alt="Shoes" className={`${!loadImage ? "flex" : "hidden"}  h-full w-full`} onLoad={() => setLoadImage(false)} />
            </div>
            <div className='md:w-1/3 w-full flex md:flex-col flex-wrap items-center justify-center h-full '>
              <div className='w-32 flex items-center justify-center flex-col my-2 mx-4 py-3 px-2 bg-slate-800 text-white rounded-md'>
                {
                  daysLeft(thisCampagin[0]?.deadline.toNumber()) > 0 ?
                    <>
                      <h1 className='text-4xl my-2 font-semibold '>{daysLeft(thisCampagin[0]?.deadline.toNumber())}</h1>
                      <p className='text-sm '>Days Left</p>
                    </> : <p>Event Expired</p>
                }
              </div>
              <div className='w-32 flex items-center justify-center flex-col my-2 mx-4 py-3 px-2 bg-slate-800 text-white rounded-md'>
                <h1 className='text-4xl my-2 font-semibold '>{numAmountCollected}</h1>
                <p className='text-sm '>Raised of  {numTarget}</p>
              </div>
              <div className='w-32 flex items-center justify-center flex-col my-2 mx-4 py-3 px-2 bg-slate-800 text-white rounded-md'>
                <h1 className='text-4xl my-2 font-semibold '>{thisCampagin[0]?.donators?.length}</h1>
                <p className='text-sm '>Total backer</p>
              </div>
            </div>

          </div>

          <div className='w-full py-4 m-4 md:h-96 px-2 md:px-4 flex  items-center justify-center md:flex-row flex-col'>
            <div className='w-full md:w-2/3 px-2 h-full '>
              <div className='w-full bg-slate-800 text-white px-5 py-4 rounded-md my-3'>
                <h1 className='text-3xl font-semibold  '>Story</h1>
                <p className='  my-3'>{thisCampagin[0].description} . Qui voluptate perferendis saepe sapiente optio assumenda dicta nam aliquid, rem officia magnam quisquam praesentium laudantium aliquam sequi molestiae facere nisi excepturi?</p>
              </div>
              <div className='w-full  bg-slate-800 text-white px-5 py-4 rounded-md my-3'>
                {
                  thisCampagin[0]?.donators?.length > 0
                    ? thisCampagin[0]?.donators?.map((item, index) => {
                 
                      return (
                        <>
                          <h1 className='text-3xl font-semibold  '>Donators</h1>

                          <p className='  my-3'>{item}</p>
                        </>

                      )
                    })
                    :
                    <>
                      <h1 className='text-3xl font-semibold  '>Donators</h1>
                      <p className='  my-3'>No Donators Found</p>
                    </>

                }
              </div>
            </div>
            <div className='md:w-1/3  w-full text-white px-2 h-full'>
              <h1 className='text-3xl font-semibold  '>Transfer Funds</h1>
              <div className='w-full bg-slate-800 flex items-center justify-center flex-col text-white px-5 py-4 rounded-md my-3'>
                <h1 className='text-white/60'>Pledge Without Reward</h1>
                <input onChange={(e) => setDonationAmount(e.target.value)} min={0} type="number" placeholder='0.01' className='border w-full py-3 px-2 outline-none rounded-lg bg-transparent text-white/90 my-5' />
                <button onClick={call} className='btn btn-primary btn-wide'>Transfer Now ! </button>
              </div>
            </div>
          </div>
        </div>



        <ToastContainer />
      </div>
    </>
  )
}
