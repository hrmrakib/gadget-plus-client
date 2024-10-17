import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.carts.length > 0) {
        const exist = state.carts.find((cart) => {
          return cart._id === action.payload._id;
        });

        if (exist) {
          exist.orderCount = exist.orderCount + 1;

          return;
        }
      }
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
