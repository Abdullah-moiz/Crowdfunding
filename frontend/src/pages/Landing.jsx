import React, { useEffect } from 'react';
import { Navbar, Footer, Search, Campaign } from '../components';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { useDispatch } from 'react-redux';
import { setContractData , setIsLoading} from '../slices/smartContractSlice';
import { toast , ToastContainer } from 'react-toastify';


export default function Landing() {
    const dispatch  =  useDispatch();

    const { contract } = useContract("0x853C53E1BaAe5bb341fC0Ac7Ff67B932a7F6fe58");

    const { data, isLoading, error } = useContractRead(contract, "getCampaign");

    if(error) toast.error(error.message);

    console.log(data)
    
    useEffect(() => {
        dispatch(setIsLoading(isLoading))
        dispatch(setContractData(data))
    }, [data]);

    return (
        <div className='w-full flex flex-col h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black '>
            <Navbar />
            <Search />
            <div className='w-full h-full px-2  overflow-auto py-2'>
                <h1 className=' text-white font-semibold py-2'>All Campaigns ({data?.slice(6)?.length }) </h1>
                <Campaign />
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
}
