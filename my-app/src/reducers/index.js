import { combineReducers } from "redux";

import authenticationReducer from './authentication.reducer'

const appReducer = combineReducers({
  authentication: authenticationReducer
});

export default appReducer
