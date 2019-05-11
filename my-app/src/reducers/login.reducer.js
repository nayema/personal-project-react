const initialState = {
  loggedIn: false,
  username: '',
  profile: null,
  error: false
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload
      };
    case "LOGIN_STARTED":
      return {
        ...state
      };
    case "LOGIN_SUCCEEDED":
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      };
    case "LOGIN_ERRORED":
      return {
        ...initialState,
        error: true
      };
    default:
      return initialState
  }
};

export default loginReducer
