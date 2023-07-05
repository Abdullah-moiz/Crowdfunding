import { createSlice } from '@reduxjs/toolkit'





const initialState = {
    address : null,

}

export const contractSlice = createSlice({

    name: 'Contract',
    initialState,
    reducers: {
        setAddress: (state, actions) => {
            state.address = actions.payload
        }
    },
})

export const { setAddress } = contractSlice.actions
const contractReducer =  contractSlice.reducer
export default contractReducer;