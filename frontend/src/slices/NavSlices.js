import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Opensearch: false,
}

export const navigationSlice = createSlice({
    name: 'Navigation',
    initialState,
    reducers: {
        setOpenSearch: (state) => {
            state.Opensearch = !state.Opensearch
        }
    },
})

//  testing

export const { setOpenSearch } = navigationSlice.actions
const NavigationReducer =  navigationSlice.reducer
export default NavigationReducer;