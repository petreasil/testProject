import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import programReducer from './program/programSlice'
import modalReducer from './Modal/modalSlice'


export const store = configureStore({
  reducer: {
      auth: authReducer,
      programs: programReducer,
      modal: modalReducer
      
  },
})