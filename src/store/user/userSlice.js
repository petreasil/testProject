import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../../Api/userService';

const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
//get all users
export const getUsers = createAsyncThunk(
    'users/getAll',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await userService.getUsers(token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  //create user
  export const createUser = createAsyncThunk(
    'users/create',
    async (userData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await userService.addUser(userData, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  //delete user
  export const deleteUser = createAsyncThunk(
    'users/delete',
    async (userData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await userService.deleteUser(userData, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  )

export const userSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending, (state)=>{
            state.isLoading = true
        }).addCase(getUsers.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.users = action.payload
        }).addCase(getUsers.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(createUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createUser.fulfilled, (state, action) => {
          console.log(action.payload);
          state.isLoading = false;
          state.isSuccess = true;
          state.users.push(action.payload);
        })
        .addCase(createUser.rejected, (state, action) => {
          console.log(action.payload);
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }).addCase(deleteUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.users = state.users.filter(
            (user) => user.id !== action.payload.id
          );
        })
        .addCase(deleteUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
    }
})

export default userSlice.reducer;