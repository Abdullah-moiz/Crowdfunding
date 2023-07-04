import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailOfampaign() {
  return (
    <div className='w-full flex items-center justify-start flex-col  min-h-screen bg-slate-950'>
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
            Campaign Detail
          </li>
        </ul>
      </div>

      <div className='w-full md:h-4/5 flex items-center  justify-center mt-4 flex-col  py-4'>
        <div className='w-full md:h-96  items-center justify-center px-2 md:px-4  flex md:flex-row flex-col '>
          <div className='md:w-2/3 w-full h-full '>
            <img className='w-full h-full' src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863" alt="Shoes" />
          </div>
          <div className='md:w-1/3 w-full flex md:flex-col flex-wrap items-center justify-center h-full '>
            <div className='w-32 flex items-center justify-center flex-col my-2 mx-4 py-3 px-2 bg-slate-800 text-white rounded-md'>
              <h1 className='text-4xl my-2 font-semibold '>06</h1>
              <p className='text-sm '>Days Left</p>
            </div>
            <div className='w-32 flex items-center justify-center flex-col my-2 mx-4 py-3 px-2 bg-slate-800 text-white rounded-md'>
              <h1 className='text-4xl my-2 font-semibold '>0.01</h1>
              <p className='text-sm '>Raised of 0.500</p>
            </div>
            <div className='w-32 flex items-center justify-center flex-col my-2 mx-4 py-3 px-2 bg-slate-800 text-white rounded-md'>
              <h1 className='text-4xl my-2 font-semibold '>01</h1>
              <p className='text-sm '>Total backer</p>
            </div>
          </div>

        </div>

        <div className='w-full py-4 m-4 md:h-96 px-2 md:px-4 flex  items-center justify-center md:flex-row flex-col'>
          <div className='w-full md:w-2/3 px-2 h-full '>
            <div className='w-full bg-slate-800 text-white px-5 py-4 rounded-md my-3'>
              <h1 className='text-3xl font-semibold  '>Story</h1>
              <p className='  my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate perferendis saepe sapiente optio assumenda dicta nam aliquid, rem officia magnam quisquam praesentium laudantium aliquam sequi molestiae facere nisi excepturi?</p>
            </div>
            <div className='w-full  bg-slate-800 text-white px-5 py-4 rounded-md my-3'>
              <h1 className='text-3xl font-semibold  '>Donators</h1>
              <p className='  my-3'>1.0xhud784jfiodsf80urnvdi04ur239i4kdwfjfds</p>
            </div>
          </div>
          <div className='md:w-1/3  w-full text-white px-2 h-full'>
            <h1 className='text-3xl font-semibold  '>Transfer Funds</h1>
            <div className='w-full bg-slate-800 flex items-center justify-center flex-col text-white px-5 py-4 rounded-md my-3'>
              <h1 className='text-white/60'>Pledge Without Reward</h1>
              <input type="number" placeholder='0.01' className='border w-full py-3 px-2 outline-none rounded-lg bg-transparent text-white/90 my-5' />
              <button className='btn btn-primary btn-wide'>Transfer Now ! </button>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}
