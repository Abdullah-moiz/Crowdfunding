import React from 'react'
import { Triangle } from  'react-loader-spinner'

export default function Loading() {
    return (
        <div className='w-full absolute z-50 left-0 top-0 min-h-screen bg-slate-950/80 flex items-center justify-center flex-col'>
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />

            <p className='my-3 text-sm text-white font-semibold tracking-widest'>Processing Request , Hold Tight...</p>
        </div>
    )
}
