import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.carts.push(action.payload);
    },
    deleteSingleProductFromCart: (state, action) => {},
    deleteAllProductFromCart: (state, action) => {},
  },
});

export const {
  addToCart,
  deleteSingleProductFromCart,
  deleteAllProductFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
