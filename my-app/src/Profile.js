import React from 'react'
import Logout from "./Logout";
import ForkedRepoList from "./ForkedRepoList";
import PullRequestList from "./PullRequestList";

const Profile = ({profile, handleLogOut, forkedRepos, pullRequests}) => (
  <div>
    <Logout
      name={profile.name}
      avatar={profile.avatar_url}
      handleLogout={handleLogOut}
    />
    <ForkedRepoList
      title='Forked Repos'
      forkedRepos={forkedRepos}
    />
    <PullRequestList
      title='Pull Requests'
      pullRequests={pullRequests}
    />
  </div>
);

export default Profile