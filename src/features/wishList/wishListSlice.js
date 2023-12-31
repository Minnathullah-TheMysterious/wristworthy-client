import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToWishlist,
  deleteWishlistItem,
  fetchWishlist,
} from "./wishlistAPI";

const initialState = {
  loading: false,
  list: [],
  error: null,
};

export const addToWishlistAsync = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productId) => {
    try {
      const response = await addToWishlist(productId);
      if (response.success) {
        return response.wishlist;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchWishlistAsync = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    try {
      const response = await fetchWishlist();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const deleteWishlistItemAsync = createAsyncThunk(
  "wishlist/deleteWishlistItem",
  async (productId) => {
    try {
      const response = await deleteWishlistItem(productId);
      return response;
    } catch (error) {
      throw new Error(error.message)
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlistAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToWishlistAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "Error";
      })
      .addCase(addToWishlistAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(fetchWishlistAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishlistAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "Error";
      })
      .addCase(fetchWishlistAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(deleteWishlistItemAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWishlistItemAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "Error";
      })
      .addCase(deleteWishlistItemAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
