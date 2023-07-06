import React from 'react'
import CampaignCard from './CampaignCard'
import { useSelector } from 'react-redux'
import Loading from './Loading'

export default function Campaign() {
  const campaignData= useSelector(state => state.Contract.contractData)
  const data = campaignData?.slice(6)
  const isLoading = useSelector(state => state.Contract.isLoading)

  return (
    <div className='w-full mt-4 h-5/6  flex flex-wrap items-start justify-center'>
      {
        isLoading && <Loading />
      }
      {
        !isLoading && data.length === 0 && <h1 className='text-2xl font-semibold text-white'>No Campaigns Found</h1>
      }
      {
        data && data.map((campaign, index) => {
          return <CampaignCard key={index} campaign={campaign} />
        })
      }
    </div>
  )
}
