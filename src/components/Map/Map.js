import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Panel from "../sidePanel";
import axios from "axios";
import "../Map/Map.css";
import { Button } from "@material-ui/core";

const libraries = ["places"];
const mapContainerStyle = {
  width: "95vw",
  height: "100vh", //95vh to accomodate the 5% for the side panel
};
const center = {
  lat: 3.139003,
  lng: 101.686852, // Centers to KL
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function Map(props) {
  const [marker, setMarker] = useState({ lat: "", lng: "" });
  const [selected, setSelected] = useState(null);
  const [locationSelect, setLocationSelect] = useState(null);
  const [centers, setCenters] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    );
  };

  function handleMessage() {
    props.history.push("/message");
    props.handleMessage(locationSelect.name);
  }

  useEffect(() => {
    const URL =
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=3.162215,101.586929&radius=15000&name=recycle&key=" +
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    axios
      .get(URL)
      .then((response) => {
        setCenters(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="dashboardMain">
      <Panel />
      <div className="rightContent">
        <button
          className="compass"
          onClick={(event) => {
            getLocation();
          }}>
          <img src="compass.svg" alt="compass img"></img>
        </button>
        <GoogleMap
          clickableIcons={false}
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
          onClick={(event) => {
            setMarker({
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            });
          }}
          onLoad={onMapLoad}>
          {centers.map((center, index) => (
            <div key={index}>
              <Marker
                position={{
                  lat: center.geometry.location.lat,
                  lng: center.geometry.location.lng,
                }}
                onClick={(event) => setLocationSelect(center)}
              />
            </div>
          ))}
          {locationSelect ? (
            <InfoWindow
              position={{
                lat: locationSelect.geometry.location.lat,
                lng: locationSelect.geometry.location.lng,
              }}
              onCloseClick={(event) => setLocationSelect(null)}>
              <div>
                <h3>{locationSelect.name}</h3>
                <p>{locationSelect.vicinity}</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleMessage}>
                  Message
                </Button>
              </div>
            </InfoWindow>
          ) : null}
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "recycling.svg",
              scaledSize: new window.google.maps.Size(40, 40),
              anchor: new window.google.maps.Point(20, 20),
            }}
            onClick={() => setSelected(marker)}
          />
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={(event) => setSelected(null)}>
              <div>
                <h3 id="mapUsername">{props.username}</h3>
                {props.recyclables.map((input, index) => (
                  <div key={index}>
                    <h3>
                      {input.item} : {input.quantity}
                    </h3>
                  </div>
                ))}
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Map;
