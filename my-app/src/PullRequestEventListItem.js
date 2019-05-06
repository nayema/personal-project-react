import React from "react";

const PullRequestEventListItem = ({event}) => (
  <a key={event.payload.pull_request.id} href={`${event.payload.pull_request.html_url}`}>
    <li key={event.repo.id}
    >
      {event.repo.name}
    </li>
  </a>
);

export default PullRequestEventListItem;