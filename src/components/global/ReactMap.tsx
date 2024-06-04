import { GoogleMap, MarkerF, DirectionsRenderer, useLoadScript } from "@react-google-maps/api";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";
import { IonButton } from "@ionic/react";
import { useMap } from "../../contexts/MapContext";
import "../../index.css";

export default function ReactMap () {
  const { showMap } = useMap();
  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY!,
    libraries: ['places']  
  });
  const [center, setCenter] = useState<{ lat: number, lng: number } | undefined>(undefined);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);

  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  
  const rafaPosition = { lat: -8.131462, lng: -34.905769 };

  async function calculateRoute(origin: { lat: number, lng: number }, destination: { lat: number, lng: number }) {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance?.text || null);
    setDuration(results.routes[0].legs[0].duration?.text || null);
  }

  useEffect(() => {
    async function createMap(): Promise<void> {
      let options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 3000
      };
  
      const position = await Geolocation.getCurrentPosition(options);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const currentLocation = {lat: latitude, lng: longitude};

      setCenter(currentLocation);
      calculateRoute(currentLocation, rafaPosition);
    }

    if (showMap) {
      createMap();
    }
  }, [showMap]);

  if (!showMap) {
    return null;
  }

  return (
    <div>
      {!isLoaded ? (
        <h1>Carregando...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={18} 
          options={{ disableDefaultUI: true }}
          onLoad={(map) => setMap(map)}
        >
          {center && <MarkerF position={center} />}
          <MarkerF position={rafaPosition} />
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      )}
      <div className="absolute top-4 left-4">
        <IonButton className="" onClick={() => map?.panTo(center!)}>
          Meu Local
        </IonButton>
        <div className="w-auto h-auto bg-white px-4 py-2">
          <h1 className="text-sm">Distância: {distance}</h1>
          <h1 className="text-sm">Duração: {duration}</h1>
        </div>
      </div>
    </div>
  );
}