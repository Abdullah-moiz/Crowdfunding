import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiCampaignmonitor } from 'react-icons/si'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdCampaign } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setOpenSearch } from '../slices/NavSlices'
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { setAddress } from '../slices/smartContractSlice'


export default function Navbar() {
    const connect  = useMetamask();
    const address = useAddress();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const HandleSearch = () => {
        dispatch(setOpenSearch(true))
    }

    if(address) dispatch(setAddress(address))

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link className="btn btn-ghost text-xs normal-case md:text-xl font-semibold">CrowdFunding</Link>
            </div>
            <div className="navbar-end">
                {
                    !address ? <button onClick={() => connect()} className='btn btn-neutral text-white mx-2'>Connect Wallet</button>
                        :
                        (
                            <>
                                <button onClick={() => navigate('/create-campaign')} className='btn btn-neutral text-white mx-2 btn-circle'> <MdCampaign className="text-2xl" /></button>
                                <button onClick={() => navigate('/my-campaign')} className='btn btn-neutral text-white mx-2 btn-circle'> <SiCampaignmonitor className="text-2xl" /></button>
                                <button onClick={HandleSearch} className='btn btn-neutral text-white mx-2 btn-circle'> <AiOutlineSearch className="text-2xl" /></button>
                            </>
                        )
                }

            </div>
        </div>
    )
}
