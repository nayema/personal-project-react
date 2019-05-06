import React from "react";

const ForkEventListItem = ({ event }) => (
  <a key={event.repo.id} href={`https://github.com/${event.repo.name}`}>
    <li key={event.id}
    >
      {event.repo.name}
    </li>
  </a>
);

export default ForkEventListItem;