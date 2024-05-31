import { Geolocation } from "@capacitor/geolocation";
import { useState, useRef } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { IonPage, useIonViewDidEnter } from "@ionic/react";
import { Popup, Marker } from "react-leaflet";

export default function MapMike() {

  const mapRef = useRef(null);
  const latitude = -8.0262863;
  const longitude = -34.8920267;

  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  /* implementada função para acessar geolocalização do dispositivo utilizando o capacitor. 
  estudando como integrar com o leaflet

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
  } */

  return (
    <>
      <MapContainer center={[latitude, longitude]} zoom={20} ref={mapRef} style={{ height: "100vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}