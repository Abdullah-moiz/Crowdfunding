import React from 'react'
import { MdCampaign } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux';

export default function CreateCampaign() {

    const { contract } = useContract("0x853C53E1BaAe5bb341fC0Ac7Ff67B932a7F6fe58");
    const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, "createCampaign")
    const address =  useSelector(state => state.Contract.address)

    console.log(address)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {

        
        const _owner = data.name;
        const _title = data.title;
        const _description = data.story;
        const _target = data.goal;
        const _deadline = data.date;

        try {
            const data = await createCampaign({ args: [_owner, _title, _description, _target, _deadline, _image] });
            toast.success('Campaign Created Successfully')
            console.info("contract call successs", data);
        } catch (err) {
            toast.error('Campaign Creation Failed')
            console.error("contract call failure", err);
        }
    }






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
                        Create Campaign
                    </li>
                </ul>
            </div>
            <div className='w-full py-4 px-4 flex items-center justify-center'>
                <h1 className='text-white font-semibold text-2xl border-b py-2 border-b-white flex items-center justify-center'>Start a Campaign <MdCampaign className='text-2xl mx-2 ' /></h1>
            </div>
            <form className='w-1/2 ' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text text-white">Your Name</span>
                    </label >
                    <input {...register("name", { required: true })} type="text" placeholder="Type Your Name here" className="input input-bordered w-full" />
                    {errors.name && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                </div >
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text text-white">Campaign Title</span>
                    </label >
                    <input {...register("title", { required: true })} type="text" placeholder="Type Campaign Title here" className="input input-bordered w-full" />
                    {errors.title && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                </div >
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text text-white">Story</span>
                    </label >
                    <textarea {...register("story", { required: true })} type="text" placeholder="Type Your Name here" className="input input-bordered w-full" />
                    {errors.story && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                </div >
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text text-white">Your Goal</span>
                    </label >
                    <input {...register("goal", { required: true })} type="text" placeholder="Type goal Price e.g 500ETH" className="input input-bordered w-full" />
                    {errors.goal && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                </div >
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text text-white">End Date</span>
                    </label >
                    <input {...register("date", { required: true })} type="date" placeholder="Type Your Name here" className="input input-bordered w-full" />
                    {errors.date && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                </div >
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text text-white">Campaign Image</span>
                    </label >
                    <input accept="image/*" {...register("image", { required: true })} type="file" placeholder="Type Your Name here" className="input input-bordered w-full" />
                    {errors.image && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                </div >
                <div className='w-full  items-center justify-center flex py-2'>
                    <button type='submit' className='btn  btn-wide btn-neutral'>Done !</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}



