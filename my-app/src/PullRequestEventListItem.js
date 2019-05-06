import React from "react";

const PullRequestEventListItem = ({event}) => (
  <div>
    <a key={event.payload.pull_request.id} href={`${event.payload.pull_request.html_url}`}>
      <li key={event.repo.id}
      >
        {event.repo.name}
      </li>
    </a>
    Status: {event.payload.pull_request.state}
  </div>
);

export default PullRequestEventListItem;