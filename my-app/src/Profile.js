import React from "react";
import ForkedRepoList from "./ForkedRepoList"

const Profile = ({name, avatar_url, handleLogout, forkedRepos, pullRequests}) => (
  <div className="profile">
    <h3>Hello {name}!</h3>
    <img src={avatar_url} alt={`${name}'s avatar`}/>
    <button onClick={handleLogout}>Logout</button>
    <br/>
    <ForkedRepoList
      title="Forked Repos"
      events={forkedRepos}
    />
    <br/>
  </div>
);

export default Profile