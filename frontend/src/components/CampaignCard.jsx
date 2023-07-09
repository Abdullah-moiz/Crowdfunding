import React from 'react'
import { ethers } from 'ethers';
import { daysLeft } from '../utils';
import ImageLoader from './ImageLoader';
import { useNavigate } from 'react-router-dom';

export default function CampaignCard({ campaign }) {
    const navigate =  useNavigate()
    const [loadImage, setLoadImage] = React.useState(true)
    const target = ethers.utils.formatEther(campaign?.target?.toString())
    const amountCollected = ethers.utils.formatEther(campaign?.amountCollected?.toString())

    const numTarget = Number(target) * 10000000000000000
    const numAmountCollected = Number(amountCollected) * 10000000000000000


    return (
        <div onClick={() => navigate(`/detail-of-campaign/${campaign?.title.replace(/ /g, '')+campaign?.owner}`)} className="card m-3  w-96 h-[450px] rounded bg-base-100 shadow-xl">
            <div className='w-full h-52  relative'>
                {
                    loadImage && <figure><ImageLoader /></figure>
                }
                <img src={campaign?.image} alt="Shoes" className={`${!loadImage ? "flex" : "hidden"}  h-full w-full`} onLoad={() => setLoadImage(false)} />
            </div>
            <div className="card-body  ">
                <p>Education</p>
                <h2 className="card-title">
                    {campaign?.title}
                </h2>
                <p>{campaign?.description}</p>
                <div className="card-actions justify-between px-2">
                    <div className="items-center justify-center flex flex-col">
                        <h1 className='text-2xl font-semibold'>{numAmountCollected}</h1>
                        <p className='text-sm'>Raised of {numTarget}</p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        {
                            daysLeft(campaign?.deadline.toNumber()) > 0 ?
                                <>
                                    <h1 className='text-2xl font-semibold'>{daysLeft(campaign?.deadline.toNumber())} </h1>
                                    <p className='text-sm'>Days Left</p>
                                </> : <h1 className='text-sm font-semibold text-red-500'>Event Expired</h1>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
