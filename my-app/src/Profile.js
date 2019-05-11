import React from "react";

const Profile = ({name, avatar_url, handleLogout}) => (
  <div className="profile">
    <div className="profile">
      <h3>Hello {name}!</h3>
      <img src={avatar_url} alt={`${name}'s avatar`}/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  </div>
);

export default Profile
