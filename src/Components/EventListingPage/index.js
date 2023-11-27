import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import './index.css';

const EventListingPage = ({ eventList }) => {
  return (
    <div>
      <h1>Events List</h1>
      <Link to="/create-event">
        <button>Create Event</button>
      </Link>
      {eventList.length === 0 ? (
        <h1>No Events</h1>
      ) : (
        <ul>
          {eventList.map((each) => {
            return (
              <li className="event-card" key={each.id}>
                <p>{each.name}</p>
                <p>Start: {each.start}</p>
                <p>End: {each.end}</p>
                <p>Location: {each.location}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default EventListingPage;
