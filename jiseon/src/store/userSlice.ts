import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LoginRequest, LoginResponse } from "@/models/user";
import { userService } from "@/setup";

export interface UserState {
  user: LoginResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (data: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await userService.login(data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.user = action.payload;
      }
    );
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;
