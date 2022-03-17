import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import authService from "../../Api/authService";

//get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSucess: false,
  message:''
}
//register User
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try{

    return await authService.register(user)

  } catch(e){
    const message = e.message;
    return thunkAPI.rejectWithValue(message)

  }
})

//logout User
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset:(state) => {
      state.isSucess = false
      state.isError = false
      state.isLoading = false
      state.message= ''
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(register.pending,(state)=>{
      state.isLoading = true
    }).addCase(register.fulfilled, (state,action) =>{
      state.isLoading = false
      state.isSucess = true
      state.user = action.payload
    }).addCase(register.rejected,(state,action) =>{
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    }).addCase(logout.fulfilled, (state) => {
      state.user = null
    })

  },
})


// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions

export default authSlice.reducer