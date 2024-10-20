import { createSlice } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../components/toast/toast";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload.stock === 0) {
        errorToast("Out of stock!");
        return;
      }

      successToast("Successfully, add to cart!");

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
      } else {
        errorToast("Firstly, add to cart!");
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

    deleteSingleProductFromCart: (state, action) => {
      const rest = state.carts.filter((cart) => {
        return cart._id !== action.payload;
      });
      state.carts = rest;
    },
    deleteAllProductFromCart: (state) => {
      state.carts = [];
    },
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
