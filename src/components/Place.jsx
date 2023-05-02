import React from "react";
import { GoogleApiWrapper } from "google-maps-react";
import PlaceDetails from "./PlaceDetails";
import { useParams, useLocation } from "react-router-dom";
function Place(props) {
  const location = useLocation();
  return (
    <div>
      <PlaceDetails placeId={location.state.placeId} />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(Place);
