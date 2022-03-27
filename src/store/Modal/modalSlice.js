import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
  };

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        openModal:(state,action) =>{
            state.isOpen = action.payload
        },
        closeModal: (state,action)=>{
            state.isOpen = action.payload
        }
    }
})  

export const { openModal,closeModal } = modalSlice.actions;
export default modalSlice.reducer;