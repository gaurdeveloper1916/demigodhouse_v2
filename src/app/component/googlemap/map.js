// pages/index.js
'use client'
import EventMap from "./eventmap";
const events = [
  { id: 1, name: 'Event 1', lat: 28.704060, lng: 77.102493 },
  { id: 2, name: 'Event 2', lat: 34.0522, lng: -118.2437 },
  // Add more events as needed
];

const Map = () => {
  return (
    <div>
      <h1>Event Map</h1>
      <EventMap events={events} />
    </div>
  );
};

export default Map;
