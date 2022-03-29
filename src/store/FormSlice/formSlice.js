import { createSlice } from '@reduxjs/toolkit';

const initialState={
    form: []
}

const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.form = action.payload
        }
    }
})

export const {add} = formSlice.actions;
export default formSlice.reducer