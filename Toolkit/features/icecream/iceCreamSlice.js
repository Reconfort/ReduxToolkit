const createSlice = require("@reduxjs/toolkit").createSlice;

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
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
