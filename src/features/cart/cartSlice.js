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
    incrementOrderCount: (state, action) => {
      const exist = state.carts.find((cart) => {
        return cart._id === action.payload;
      });
      if (exist) {
        exist.orderCount = exist.orderCount + 1;

        return;
      }
    },
    decrementOrderCount: (state, action) => {
      const exist = state.carts.find((cart) => {
        return cart._id === action.payload;
      });
      if (exist) {
        exist.orderCount = exist.orderCount - 1;
        if (exist.orderCount < 1) {
          exist.orderCount = 1;
        }
        return;
      }
    },
    deleteSingleProductFromCart: (state, action) => {},
    deleteAllProductFromCart: (state, action) => {},
  },
});

export const {
  addToCart,
  deleteSingleProductFromCart,
  deleteAllProductFromCart,
  incrementOrderCount,
  decrementOrderCount,
} = cartSlice.actions;
export default cartSlice.reducer;
