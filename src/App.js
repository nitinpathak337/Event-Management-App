import React, { useState } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import EventListingPage from './Components/EventListingPage';
import EventCreationPage from './Components/EventCreationPage';
import './style.css';

const dummyEventList = [
  {
    id: 1,
    name: 'Amazon Hackathon',
    start: '26 Nov 23',
    end: '27 Nov 23',
    location: 'Mumbai',
    capacity: '1000',
    visibility: 'Public',
    tickets: 'free',
  },
  {
    id: 2,
    name: 'Google Hackathon',
    start: '26 Nov 23',
    end: '27 Nov 23',
    location: 'Mumbai',
    capacity: '1000',
    visibility: 'Public',
    tickets: '50',
  },
  {
    id: 3,
    name: 'Microsoft Hackathon',
    start: '26 Nov 23',
    end: '27 Nov 23',
    location: 'Mumbai',
    capacity: '1000',
    visibility: 'Public',
    tickets: '100',
  },
];

export default function App() {
  const [eventList, setEventList] = useState(dummyEventList);

  const createEventHandler = (eventDetails) => {
    eventList.push({ ...eventDetails, id: eventList.length + 1 });
  };

  return (
    <div className="bg">
      <h1>Event Management App</h1>
      <Switch>
        <Route exact path="/">
          <EventListingPage eventList={eventList} />
        </Route>
        <Route exact path="/create-event">
          <EventCreationPage createEventHandler={createEventHandler} />
        </Route>
      </Switch>
    </div>
  );
}
