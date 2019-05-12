import React from 'react';

const Profile = ({ name, avatar, logout, forkedRepos, pullRequests }) => (
  <React.Fragment>
    <div className="logout">
      <h3>Hello {name}!</h3>
      <img src={avatar} alt={`${name}'s avatar`}/>
      <button onClick={logout}>Logout</button>
    </div>
    <div>
      <h3>Forked Repos</h3>
      <ul>
        {forkedRepos.map(forkedRepo =>
          <a key={forkedRepo.repo.id} href={`https://github.com/${forkedRepo.repo.name}`}>
            <li
            >
              {forkedRepo.repo.name}
            </li>
          </a>
        )
        }
      </ul>
      <h3>Pull Requests</h3>
      <ul>
        {pullRequests.map(pullRequest =>
          <a key={pullRequest.id} href={`${pullRequest.html_url}`}>
            <li
            >
              {pullRequest.title} ({pullRequest.state})
            </li>
          </a>
        )
        }
      </ul>
    </div>
  </React.Fragment>
);

export default Profile
