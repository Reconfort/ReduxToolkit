const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunMiddleware = require("redux-thunk").default;
const axios = require("axios");

// ----- STATE -----

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// ----- ACTIONS -----
const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEDED = "FETCH_USER_SUCCEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

// ----- ACTIONS CREATORS -----

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCEDED,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};

// ----- REDUCER -----

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //responce.data is the users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        //error.message is the error message
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
