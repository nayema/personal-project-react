import React from 'react';

const Logout = ({name, avatar, handleLogout}) => (
  <div className='logout'>
    <h3>Hello {name}!</h3>
    <img src={avatar} alt={`${name}'s avatar`}/>
    <button onClick={handleLogout}>Logout</button>
  </div>
);

export default Logout
