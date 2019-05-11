import React from 'react';
import KeyPress from 'react-keypress';

const Login = ({username, error, setUsername, login}) => (
  <div>
    <h3>Enter your GitHub username</h3>
    {error ? <div>Incorrect username. Please try again</div> : ''}
    <input
      type='text'
      value={username}
      onChange={e => setUsername(e.target.value)}
      onKeyPress={KeyPress('enter', login)}
    />
    <button onClick={login}>Login</button>
  </div>
);

export default Login
