import { createSlice } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../components/toast/toast";

const initialState = {
  wishlists: [],
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
        errorToast("Already added to Wishlist!");
        return;
      } else {
        state.wishlists.push(action.payload);
        successToast("Successfully, add to wishlist!");
      }
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
