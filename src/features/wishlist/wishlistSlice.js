import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlists: [],
  message: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const isExist = state.wishlists.find((fav) => {
        return fav._id === action.payload._id;
      });

      if (isExist) {
        state.message = true;
        return;
      } else {
        state.wishlists.push(action.payload);
      }
      state.message = false;
    },
    deleteWishlist: (state, action) => {
      const rest = state.wishlists.filter(
        (wish) => wish._id !== action.payload
      );

      state.wishlists = rest;
    },

    deleteAllWishlist: (state) => {
      state.wishlists = [];
    },
  },
});

export const { addToWishlist, deleteWishlist, deleteAllWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
