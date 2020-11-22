import React, {useState} from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow,} from '@react-google-maps/api';
import Panel from "../sidePanel";

const libraries = ["places"];
const mapContainerStyle = {
    width: '95vw',
    height: '100vh',    //95vh to accomodate the 5% for the side panel
}
const center = {
    lat: 3.139003,
    lng: 101.686852,    // Centers to KL
}
const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

function Map(props) {

    const[marker, setMarker] = useState({lat: "", lng: ""});
    const[selected, setSelected] = useState(null);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if(loadError) return "Error Loading Maps";
    if(!isLoaded) return "Loading Maps";
    
    return(
        <div className="dashboardMain">
            <Panel/>
            <div className="rightContent">
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center} options={options} onClick={(event) => {setMarker({
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                })}}>
                    <Marker position={{lat:marker.lat, lng:marker.lng,}} icon={{url: 'recycling.svg', scaledSize: new window.google.maps.Size(40,40), anchor: new window.google.maps.Point(20,20)}} onClick={() => setSelected(marker)}/>
                    {selected ? <InfoWindow position={{lat:selected.lat, lng: selected.lng}} onCloseClick={(event) => setSelected(null)}><div>
                        <h3 id="mapUsername">{props.username}</h3>
                        {props.recyclables.map((input, index) => (
                        <div key={index}>
                            <h3>{input.item} : {input.quantity}</h3>
                            </div>
                        ))}</div></InfoWindow> : null}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;
