import React from "react";

const PullRequestList = ({ title, events }) => (
  <div>
    {title}
    <ul>
      {events.map(event =>
        <div>
          <a href={`${event.html_url}`}>
            <li
            >
              {event.title}
            </li>
          </a>
          Status: {event.state}
        </div>
      )
      }
    </ul>
  </div>
);

export default PullRequestList;
