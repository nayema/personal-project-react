import React from 'react';

const Profile = ({ name, avatar, logout, forkedRepos }) => (
  <div>
    <div>
      <h3>Hello {name}!</h3>
      <img src={avatar} alt={`${name}'s avatar`}/>
      <button onClick={logout}>Logout</button>
    </div>
    <h3>Forked Repos</h3>
    <div>
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
    </div>
  </div>
);

export default Profile
