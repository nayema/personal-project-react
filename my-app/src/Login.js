import React from "react";
import KeyPress from "react-keypress";

const Login = ({username, handleChange, handleLogin}) => (
  <div>
    <h3>Enter your GitHub username</h3>
    <input
      type="text"
      value={username}
      onChange={handleChange}
      onKeyPress={KeyPress('enter', handleLogin)}
    />
    <button onClick={handleLogin}>Login</button>
  </div>
);

export default Login