import React from "react";

const ForkedRepoList = ({title, events}) => (
  <div>
    {title}
    <ul>
      {events.map(event => (
        <a key={event.repo.id} href={`https://github.com/${event.repo.name}`}>
          <li key={event.id}
          >
            {event.repo.name}
          </li>
        </a>
      ))}
    </ul>
  </div>
);

export default ForkedRepoList;