import React from 'react';
import KeyPress from 'react-keypress';

const Login = ({username, error, handleChange, handleLogin}) => (
  <div>
    <h3>Enter your GitHub username</h3>
    {error ? <div>Incorrect username. Please try again</div> : ''}
    <input
      type='text'
      value={username}
      onChange={handleChange}
      onKeyPress={KeyPress('enter', handleLogin)}
    />
    <button onClick={handleLogin}>Login</button>
  </div>
);

export default Login