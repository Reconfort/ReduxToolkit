const redux = require("redux");
const createStore = redux.createStore;

//  --------------- DEFINE ACTION AND ACTION CREATORS -------------

const CAKE_ORDERED = "CAKE_ORDERED";
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

//  --------------- DECLARED INITIAL STATE AND REDUCER -------------

const initialState = {
  numberOfCakes: 10,
  //   anotherProperty: 0,
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

//  --------------- CREATE STORE -------------

const store = createStore(reducer);
console.log("Initial state", store.getState());

//  --------------- SUBSCRIBE TO STORE -------------
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

//  --------------- DISPATCH ACTION TO UPDATE STORE -------------
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
