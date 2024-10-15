import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  message: false,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const isExist = state.favorites.find((fav) => {
        return fav._id === action.payload._id;
      });
      if (isExist) {
        state.message = true;
        return;
      } else {
        state.message = false;
        state.favorites.push(action.payload);
      }
    },
    deleteFavorite: () => {},
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
