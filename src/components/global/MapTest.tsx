import { GoogleMap } from '@capacitor/google-maps';
import { useRef, useState } from 'react';

export default function MapTest() {
  const key:string = process.env.REACT_APP_MAP_API_KEY!
  const mapRef = useRef(null);
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey: key,
      config: {
        center: {
          lat: -8.0262863,
          lng: -34.8920267
        },
        zoom: 10,
      },
    })
  }

  return (
    <div>
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: "100%",
        height: "86vh"
      }}></capacitor-google-map>
      <button onClick={createMap}>Create Map</button>
    </div>
  )
}