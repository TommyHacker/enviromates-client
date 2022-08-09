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
            style: 'mapbox://styles/gondolf/cl6kwe4fz003c14mr3doqd0sx',
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
    
    // useEffect(() => {
    //     map.current.on('load', function(){
    //         map.current.addLayer({
    //             'id': 'Airports',
    //             'type': 'symbol',
    //             'source': 'Airport_points',
    //             'layout': {
    //                 'icon-image': 'Airport_icon',
    //                 'icon-size': 100
    //             }
    //         })
    //         map.current.addSource('Airport_points', {
    //             type: 'geojson',
    //             data: 'https://cloud.maptiler.com/data/7aad02b2-473d-437f-80ee-41c9911e3368/#13.24/51.4989/-0.10096'
    //         });
    
    //     })
    // });
    

    // // map.addSource('Airport_points', {
    // //     type: 'geojson',
    // //     data: ''
    // // })

return (
    <div>
        <div className="sidebar"> Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} </div>
         <div ref={mapContainer} className="map-container" />
    </div>
    );
}

export default Map
