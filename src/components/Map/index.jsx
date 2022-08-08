import React, { useRef, useEffect, useState } from 'react';
import './style.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
const Map = () => {

mapboxgl.accessToken = 'pk.eyJ1IjoiZ29uZG9sZiIsImEiOiJjbDZrbDg1bHEwMnQ4M2xydmdhZ2Vod3FsIn0.-yMbrRrEw8cJTgrfSyDPhA';

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-0.012);
const [lat, setLat] = useState(51.49);
const [zoom, setZoom] = useState(11.0);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        });

return (
    <div>
        <div className="sidebar"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
         <div ref={mapContainer} className="map-container" />
    </div>
    );
}

export default Map