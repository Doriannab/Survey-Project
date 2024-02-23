/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { refreshAccessToken } from "../services/AuthServices";

// Action asynchrone pour renouveler le token
export const refreshAccessTokenAsync = createAsyncThunk(
  "auth/refreshAccessToken",
  async (refreshToken, { rejectWithValue }) => {
    try {
      const response = await refreshAccessToken(refreshToken);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const storedAccessToken = localStorage.getItem("accessToken");
const storedRefreshToken = localStorage.getItem("refreshToken");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: storedAccessToken ? storedAccessToken : null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.access;
      localStorage.setItem("accessToken", action.payload.access);
      localStorage.setItem("refreshToken", action.payload.refresh);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refreshAccessTokenAsync.fulfilled, (state, action) => {
      const { access, refresh, user } = action.payload;
      state.token = access;
      state.user = user;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
    });
    builder.addCase(refreshAccessTokenAsync.rejected, (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    });
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
