import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  age: 20,
  initialState: { name: "jone", age: 20 },

  reducers: {
    setUserName: (state) => {
      state.name = "park";
    },
    increaseAge: (state, a) => {
      state.age += a.payload;
    },
  },
});

export let { setUserName, increaseAge } = user.actions;

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

    addProduct: (state, action) => {
      let productInfo = {
        id: action.payload.id,
        name: action.payload.name,
        count: action.payload.count,
      };

      let array = [...state, productInfo];
      return array;
    },
  },
});

export let { setCount, addProduct } = product.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    product: product.reducer,
  },
});
