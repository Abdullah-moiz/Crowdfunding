import React from 'react'

export default function CampaignCard() {
    return (
        <div className="card m-3 w-96 bg-base-100 shadow-xl">
            <figure><img src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863" alt="Shoes" /></figure>
            <div className="card-body">
                <p>Education</p>
                <h2 className="card-title">
                    Build Car From Scratch
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between px-2">
                    <div className="items-center justify-center flex flex-col">
                        <h1 className='text-2xl font-semibold'>0.01</h1>
                        <p className='text-sm'>Raised of 0.1</p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                    <h1 className='text-2xl font-semibold'>06</h1>
                        <p className='text-sm'>Days Left</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
