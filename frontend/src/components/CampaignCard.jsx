import React from 'react'
import { ethers } from 'ethers';
import { daysLeft } from '../utils';

export default function CampaignCard({ campaign }) {

    const target = ethers.utils.formatEther(campaign?.target?.toString())
    const amountCollected = ethers.utils.formatEther(campaign?.amountCollected?.toString())

    const numTarget = Number(target)
    const numAmountCollected = Number(amountCollected)


    return (
        <div className="card m-3 w-96 bg-base-100 shadow-xl">
            <figure><img src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863" alt="Shoes" /></figure>
            <div className="card-body">
                <p>Education</p>
                <h2 className="card-title">
                    {campaign?.title}
                </h2>
                <p>{campaign?.description}</p>
                <div className="card-actions justify-between px-2">
                    <div className="items-center justify-center flex flex-col">
                        <h1 className='text-2xl font-semibold'>{numAmountCollected.toFixed(3)}</h1>
                        <p className='text-sm'>Raised of {numTarget.toFixed(3)}</p>
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
