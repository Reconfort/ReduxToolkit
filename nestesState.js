const redux = require("redux");
const produce = require("immer").produce;
const initialState = {
  name: "Reconfort",
  adress: {
    street: "kg 655 st",
    city: "Kigali",
    state: "RW",
  },
};
const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     adress: {
      //       ...state.adress,
      //       street: action.payload,
      //     },
      //   };

      // Immer
      return produce(state, (draft) => {
        draft.adress.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Store updated", store.getState());
});
store.dispatch(updateStreet("kg 666 st"));

unsubscribe();
