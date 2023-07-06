import { createSlice } from '@reduxjs/toolkit'





const initialState = {
    address : null,
    contractData : [],
    filterCampaigns : null,
    isLoading : false,

}

export const contractSlice = createSlice({

    name: 'Contract',
    initialState,
    reducers: {
        setAddress: (state, actions) => {
            state.address = actions.payload
        },
        setContractData: (state, actions) => {
            state.contractData = actions.payload
        },
        setIsLoading: (state, actions) => {
            state.isLoading = actions.payload
        },
        setFilteredCampaigns: (state, actions) => {
            state.filterCampaigns = actions.payload
        }


    },
})

export const { setAddress , setContractData ,setIsLoading  , setFilteredCampaigns} = contractSlice.actions
const contractReducer =  contractSlice.reducer
export default contractReducer;