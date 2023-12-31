import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAuthData,
  login,
  logout,
  register,
  requestPasswordResetMail,
  resetPasswordMail,
} from "./authAPI";

const initialState = {
  loading: false,
  user: null,
  mailSent: false,
  resetPassword: false,
  error: null,
};

export const registerAsync = createAsyncThunk(
  "auth/register",
  async (registrationData) => {
    try {
      const response = await register(registrationData);

      if (response?.success) {
        return response?.user;
      }

      throw new Error(response?.message);
    } catch (error) {
      throw new Error(error.message || "Failed To Register");
    }
  }
);

export const loginAsync = createAsyncThunk("auth/login", async (loginData) => {
  try {
    const response = await login(loginData);

    if (response?.success) {
      return response?.user;
    }

    throw new Error(response?.message);
  } catch (error) {
    throw new Error(error.message || "Failed To Login");
  }
});

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await logout();

    if (response?.success) {
      return null;
    }

    throw new Error(response?.message);
  } catch (error) {
    throw new Error(error.message || "Failed To Logout");
  }
});

export const getAuthDataAsync = createAsyncThunk(
  "auth/getAuthData",
  async () => {
    try {
      const response = await getAuthData();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const requestPasswordResetMailAsync = createAsyncThunk(
  "auth/requestPasswordResetMail",
  async ({ email, resetPasswordLink }) => {
    try {
      const response = await requestPasswordResetMail(email, resetPasswordLink);

      if (response?.success) {
        return response.success;
      }

      throw new Error(response?.message);
    } catch (error) {
      throw new Error(
        error.message ||
          "Something Went Wrong while requesting password reset via mail"
      );
    }
  }
);

export const resetPasswordMailAsync = createAsyncThunk(
  "auth/resetPasswordMail",
  async ({ email, newPassword, confirmNewPassword, token }) => {
    try {
      const response = await resetPasswordMail(
        email,
        newPassword,
        confirmNewPassword,
        token
      );

      if (response?.success) {
        return response?.success;
      }

      throw new Error(response?.message);
    } catch (error) {
      throw new Error(error.message || "Something Went Wrong while resetting password");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "Error";
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "An error occurred";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "An error occurred";
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(getAuthDataAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAuthDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "An error occurred";
      })
      .addCase(getAuthDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(requestPasswordResetMailAsync.pending, (state) => {
        state.loading = true;
        state.mailSent = false;
      })
      .addCase(requestPasswordResetMailAsync.rejected, (state, action) => {
        state.loading = false;
        state.mailSent = false;
        state.error = action.error ? action.error.message : "An error occurred";
      })
      .addCase(requestPasswordResetMailAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.mailSent = action.payload;
      })

      .addCase(resetPasswordMailAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPasswordMailAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "An error occurred";
      })
      .addCase(resetPasswordMailAsync.fulfilled, (state) => {
        state.loading = false;
        state.resetPassword = true;
      });
  },
});

export default authSlice.reducer;
