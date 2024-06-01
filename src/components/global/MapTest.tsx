import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { useRef, useState } from 'react';
import { useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';

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

  const permission = async () => {
    try {
      const permissionStatus = await Geolocation.checkPermissions();
      console.log('Permission status: ', permissionStatus.location);
      if (permissionStatus?.location != 'granted') {
        const requestStatus = await Geolocation.requestPermissions();
        if (requestStatus.location != 'granted') {
          return;
        }
      }
      let options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 3000
      };

      const position = await Geolocation.getCurrentPosition(options);
      console.log(position);
    } catch (e) {
      console.log(e)
    }
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