import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",

  reducers: {
    setUserName: (state, action) => {
      return "jone " + state;
    },
  },
});

export let { setUserName } = user.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let product = createSlice({
  name: "product",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    setCount: (state, action) => {
      let index = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state[index].count += action.payload.count;
    },
  },
});

export let { setCount } = product.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    product: product.reducer,
  },
});
