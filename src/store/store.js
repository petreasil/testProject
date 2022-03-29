import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import programReducer from './program/programSlice'
import modalReducer from './Modal/modalSlice'
import userReducer from './user/userSlice'
import formReducer from './FormSlice/formSlice'


export const store = configureStore({
  reducer: {
      auth: authReducer,
      programs: programReducer,
      modal: modalReducer,
      users: userReducer,
      form: formReducer,
      
  },
})