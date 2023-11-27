import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventCreationPage = ({ createEventHandler }) => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    start: '',
    end: '',
    location: '',
    capacity: '',
    visibility: '',
    tickets: '',
  });

  const handleCreateEvent = (e) => {
    e.preventDefault();
    createEventHandler(eventDetails);
    // console.log(eventDetails);
  };

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>Events Creation Page</h1>
      <form onSubmit={handleCreateEvent}>
        <input
          type="text"
          placeholder="Event Name"
          onChange={(event) =>
            setEventDetails({ ...eventDetails, name: event.target.value })
          }
          value={eventDetails.name}
        />
        <input
          type="datetime-local"
          onChange={(event) =>
            setEventDetails({ ...eventDetails, start: event.target.value })
          }
          value={eventDetails.start}
        />
        <input
          type="datetime-local"
          onChange={(event) =>
            setEventDetails({ ...eventDetails, end: event.target.value })
          }
          value={eventDetails.end}
        />
        <input
          type="text"
          placeholder="location"
          onChange={(event) =>
            setEventDetails({ ...eventDetails, location: event.target.value })
          }
          value={eventDetails.location}
        />
        <select
          placeholder="Capacity"
          onChange={(event) =>
            setEventDetails({ ...eventDetails, capacity: event.target.value })
          }
          value={eventDetails.capacity}
        >
          <option disabled>Capacity</option>
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="Unlimited">Unlimited</option>
        </select>
        <select
          onChange={(event) =>
            setEventDetails({ ...eventDetails, visibility: event.target.value })
          }
          value={eventDetails.visibility}
        >
          <option disabled>Visibility</option>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
        <select
          onChange={(event) =>
            setEventDetails({ ...eventDetails, tickets: event.target.value })
          }
          value={eventDetails.tickets}
        >
          <option disabled>Tickets</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <button>Create</button>
      </form>
    </div>
  );
};

export default EventCreationPage;
