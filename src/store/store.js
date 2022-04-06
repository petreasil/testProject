import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../modules/login/slice/auth/authSlice'
import programReducer from '../modules/programs/slice/program/programSlice'
import modalReducer from '../modules/programs/slice/modal/modalSlice'
import userReducer from '../modules/users/slice/user/userSlice'
import formReducer from '../modules/users/slice/formslice/formSlice'



export const store = configureStore({
  reducer: {
      auth: authReducer,
      programs: programReducer,
      modal: modalReducer,
      users: userReducer,
      formTest: formReducer,
      

      
  },
})