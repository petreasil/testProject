import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import programService from '../../Api/programService';

const initialState = {
  programs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  programToEdit: undefined,
};
//Get all Programs
export const getPrograms = createAsyncThunk(
  'programs/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await programService.getProgram(token);
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
//create Program
export const createProgram = createAsyncThunk(
  'program/create',
  async (programData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await programService.createProgram(programData, token);
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

// Delete program
export const deleteProgram = createAsyncThunk(
  'program/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await programService.deleteProgram(id, token);
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

//edit program
export const editProgram = createAsyncThunk(
  'program/editbyid',
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const { id } = data;
      const token = thunkAPI.getState().auth.user.token;
      return await programService.editProgramId(id, data, token);
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

export const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    reset: () => initialState,
    edit: (state, action) => {
      state.programToEdit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPrograms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPrograms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.programs = action.payload;
      })
      .addCase(getPrograms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteProgram.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProgram.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.programs = state.programs.filter(
          (program) => program.id !== action.payload.id
        );
      })
      .addCase(deleteProgram.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createProgram.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProgram.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isSuccess = true;
        state.programs.push(action.payload);
      })
      .addCase(createProgram.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editProgram.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProgram.fulfilled, (state, action) => {
        console.log(action.payload);
        const findRec = state.programs.map((program) =>
          program.id === action.payload.id ? action.payload : program
        );
        state.isLoading = false;
        state.isSuccess = true;
        state.programs = findRec;
        state.programToEdit = undefined;
      })
      .addCase(editProgram.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, edit } = programSlice.actions;
export default programSlice.reducer;
