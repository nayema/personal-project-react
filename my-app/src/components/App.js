import React from 'react';
import Login from "../containers/LoginContainer"
import Profile from "../containers/ProfileContainer";

const App = ({ loggedIn }) => (
  <div>
    {!loggedIn ? <Login/> : <Profile/>}
  </div>
);

export default App;
