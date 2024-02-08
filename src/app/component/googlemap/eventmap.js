// components/EventMap.js
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const EventMap = ({ events }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '600px',
  };

  const center = {
    lat: 0, // Set the default center of the map
    lng: 0,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyClDGFnyszA_dpXvvYW63HqTSOvz04JJps">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2} // Set the default zoom level
        center={center}
      >
        {events.map((event) => (
          <Marker
            key={event.id}
            position={{ lat: event.lat, lng: event.lng }}
            onClick={() => console.log(`Event: ${event.name}`)} // Replace with logic to display event details
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default EventMap;
