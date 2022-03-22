import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import programReducer from './program/programSlice'


export const store = configureStore({
  reducer: {
      auth: authReducer,
      programs: programReducer
      
  },
})