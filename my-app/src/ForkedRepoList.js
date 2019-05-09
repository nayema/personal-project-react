import React from "react";

const ForkedRepoList = ({ title, events }) => (
  <div>
    {title}
    <ul>
      {events.map(event =>
        <a href={`https://github.com/${event.repo.name}`}>
          <li
          >
            {event.repo.name}
          </li>
        </a>
      )
      }
    </ul>
  </div>
);

export default ForkedRepoList;
