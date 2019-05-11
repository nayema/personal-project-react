import React from 'react';

const ForkedRepoList = ({title, forkedRepos}) => (
  <div>
    <h3>{title}</h3>
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
);

export default ForkedRepoList;
