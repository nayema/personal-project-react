import React from 'react';

const Logout = ({name, avatar, logout}) => (
  <div>
    <h3>Hello {name}!</h3>
    <img src={avatar} alt={`${name}'s avatar`}/>
    <button onClick={logout}>Logout</button>
  </div>
);

export default Logout
