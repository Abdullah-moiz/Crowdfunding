import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ImCross } from 'react-icons/im'
import { setOpenSearch } from '../slices/NavSlices';
import { setFilteredCampaigns } from '../slices/smartContractSlice';
import { toast } from 'react-toastify';

export default function Search() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const campaignData = useSelector(state => state.Contract.contractData)
    const data = campaignData?.slice(6)
    const search = useSelector((state) => state.Navigation.Opensearch)

    useEffect(() => {
        setFilteredData(data)
    }, [campaignData])

    const HandleSearch = () => {
        dispatch(setOpenSearch(false))
    }




    useEffect(() => {
        const delaySearch = setTimeout(() => {
            const newData = filteredData?.filter((item) => {
                return item?.title?.toLowerCase().includes(searchText?.toLowerCase())
            })
            if (searchText !== "" && newData.length === 0) return toast.error('No Campaign Found');
            newData?.length > 0 && dispatch(setFilteredCampaigns(newData))
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [searchText]);




    return (
        <div className={`${search ? "flex" : "hidden"} relative w-full my-2  flex-col h-24  px-4  items-center justify-center `}>
            <input onChange={(e) => setSearchText(e.target.value)} type="search" id='search' placeholder="Search Campagins..." className="input input-bordered input-secondary w-full max-w-xs" />
            <button onClick={HandleSearch} className='btn btn-circle  absolute top-2 btn-neutral text-red-600 right-5 md:right-20 '><ImCross /></button>

        </div>
    )
}
