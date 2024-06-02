import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { useRef, useState } from 'react';
import { useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';

export default function MapTest() {
  const key:string = process.env.REACT_APP_MAP_API_KEY!
  const mapRef = useRef(null);
  let newMap: GoogleMap;


  async function createMap() : Promise<void>{

    let options: PositionOptions = {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 3000
    };

    const position = await Geolocation.getCurrentPosition(options);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(position)

    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: 'home-map',
      element: mapRef.current,
      apiKey: key,
      config: {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: 17,
      },
    })

    const markerId = await newMap.addMarker({
      coordinate: {
        lat: latitude,
        lng: longitude
      }
    });
  }

  useIonViewWillEnter(() => {
    createMap();
  });

  return (
    <div>
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: "100%",
        height: "67vh"
      }}></capacitor-google-map>
    </div>
  )
}