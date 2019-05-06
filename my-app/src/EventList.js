import React from "react";
import ForkEventListItem from "./ForkEventListItem"

const EventList = ({title, events}) => (
  <div>
    {title}
    <ul>
      {events.map(event => (
        <ForkEventListItem
          key={event.id}
          event={event}
        />
      ))}
    </ul>
  </div>
);

export default EventList;