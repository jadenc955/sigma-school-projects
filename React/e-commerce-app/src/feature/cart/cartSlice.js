import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      //   check if item is already in the cart
      //   action.payload represents the item object inside addToCart(item)
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // if item exists in the cart, increment the amount
        state[itemIndex].amount += 1;
      } else {
        // if item does not exist in the cart, add it with amount: 1
        const newProduct = { ...action.payload, amount: 1 };
        console.log(newProduct);
        state.push(newProduct);
      }
    },

    increment: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      state[itemIndex].amount++;
    },

    decrement: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state[itemIndex].amount > 0) {
        state[itemIndex].amount--;
        if (state[itemIndex].amount === 0) {
          state.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
