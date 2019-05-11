import React from 'react';

const PullRequestList = ({title, pullRequests}) => (
  <div>
    <h3>{title}</h3>
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
);

export default PullRequestList;
