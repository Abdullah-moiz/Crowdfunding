import React from 'react'
import { Navbar, Footer, Search, Campaign } from '../components'

export default function Landing() {
    return (
        <div className='w-full flex flex-col h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black '>
            <Navbar />
            <Search />
            <div className='w-full h-full px-2  overflow-auto py-2'>
                <h1 className=' text-white font-semibold py-2'>All Campaigns (5) </h1>
                <Campaign />
            </div>
            <Footer />
        </div>
    )
}
