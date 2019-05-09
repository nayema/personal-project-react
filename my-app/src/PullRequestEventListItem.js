import React from "react";

const PullRequestEventListItem = ({ event }) => (
  <div>
    <a href={`${event.payload.pull_request.html_url}`}>
      <li
      >
        {event.repo.name}
      </li>
    </a>
    Status: {event.payload.pull_request.state}
  </div>
);

export default PullRequestEventListItem;
