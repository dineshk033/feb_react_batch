import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 168,
    title: "Charger SXT RWD",
    price: 32999.99,
    quantity: 3,
    total: 98999.97,
    discountPercentage: 13.39,
    discountedTotal: 85743.87,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
  },
];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      const findIdx = state.findIndex((item) => item.id === action.payload);
      if (findIdx) {
        state.splice(findIdx, 1);
      }
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
