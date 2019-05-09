import React from "react";

const ForkEventListItem = ({ event }) => (
  <a href={`https://github.com/${event.repo.name}`}>
    <li
    >
      {event.repo.name}
    </li>
  </a>
);

export default ForkEventListItem;
