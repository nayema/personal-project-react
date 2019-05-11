import React from "react";
import ForkedRepoList from "./ForkedRepoList";
import PullRequestList from "./PullRequestList";

const Profile = ({name, avatar_url, handleLogout, forkedRepos, pullRequests}) => (
  <div>
    <div className="profile">
      <h3>Hello {name}!</h3>
      <img src={avatar_url} alt={`${name}'s avatar`}/>
      <button onClick={handleLogout}>Logout</button>
    </div>
    <br/>
    <ForkedRepoList
      title="Forked Repos"
      forkedRepos={forkedRepos}
    />
    <br/>
    <PullRequestList
      title="Pull Requests"
      pullRequests={pullRequests}
    />
  </div>
);

export default Profile
