import React from "react";
import ForkEventListItem from "./ForkEventListItem"
import PullRequestEventListItem from "./PullRequestEventListItem";

const EventList = ({ title, events }) => (
  <div>
    {title}
    <ul>
      {events.map(event =>
        event.payload.pull_request ? (
          <PullRequestEventListItem
            event={event}
          />
        ) : (
          <ForkEventListItem
            event={event}
          />
        )
      )
      }
    </ul>
  </div>
);

export default EventList;
