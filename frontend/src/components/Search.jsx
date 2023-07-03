import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { ImCross } from 'react-icons/im'
import { setOpenSearch } from '../slices/NavSlices';

export default function Search() {
    const dispatch =  useDispatch();
    const search = useSelector((state) => state.Navigation.Opensearch)
    
    const HandleSearch = () => {
        dispatch(setOpenSearch(false))
    }

    return (
        <div className={`${search ? "flex" : "hidden"} relative w-full my-2  flex-col h-24  px-4  items-center justify-center `}>
            <input type="text" id='search' placeholder="Search Campagins..." className="input input-bordered input-secondary w-full max-w-xs" />
            <button onClick={HandleSearch} className='btn btn-circle  absolute top-2 btn-neutral text-red-600 right-5 md:right-20 '><ImCross /></button>
        </div>
    )
}
