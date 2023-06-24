const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const initialState = {
  numOfCakes: 10,
};

const CAKE_RESTOCKED = "CAKE_RESTOCKED";
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// store.dispatch(restockCake(3));
// store.dispatch(restockCake(3));
// store.dispatch(restockCake(3));
// store.dispatch(restockCake());
const actions = bindActionCreators({restockCake}, store.dispatch)
actions.restockCake(3)

unsubscribe();
