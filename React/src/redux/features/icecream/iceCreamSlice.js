import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

// import cakeActions from "../cake/cakeSlice";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",

  // initial state is the default value of this slice.
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCream--;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--;
    });
  },
});

export const { ordered, restocked } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
