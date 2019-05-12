import React from 'react';
import Login from "../containers/LoginContainer";
import Profile from "../containers/ProfileContainer";
import "../styles.css";

const App = ({ loggedIn }) => (
  <div className="App">
    {!loggedIn ? <Login/> : <Profile/>}
  </div>
);

export default App;
