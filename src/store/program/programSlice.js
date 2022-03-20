import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import programService from '../../Api/programService'

const initialState = {
    programs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  
}

export const getPrograms = createAsyncThunk(
    'programs/getAll',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await programService.getProgram(token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  

  export const programSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getPrograms.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getPrograms.fulfilled, (state, action) => {
          console.log(action.payload);
          state.isLoading = false
          state.isSuccess = true
          state.programs = action.payload
        })
        .addCase(getPrograms.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
    },
  })
  
  export const { reset } = programSlice.actions
  export default programSlice.reducer