//@ts-nocheck
import { GoogleMap, MarkerF, DirectionsRenderer, useLoadScript } from "@react-google-maps/api";
import { Geolocation } from "@capacitor/geolocation";
import axios from "axios";
import { useEffect, useState } from "react";
import { IonButton } from "@ionic/react";
import { useMap } from "../../contexts/MapContext";
import "../../index.css";
import usePolling from "../../hooks/usePolling";

export default function ReactMap() {
  const { data: denuncias } = usePolling("http://localhost:8080/denuncias", 5000);
  const { showMap } = useMap();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY!,
    libraries: ['places'],
  });

  const [center, setCenter] = useState<{ lat: number, lng: number } | undefined>(undefined);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [destLocation, setDestLocation] = useState<{ lat: number, lng: number } | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [mapInitialized, setMapInitialized] = useState(false); // Novo estado para controlar a inicialização do mapa

  // Função para calcular a rota
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
        maximumAge: 3000,
      };

      // Obtém a localização atual do usuário
      const position = await Geolocation.getCurrentPosition(options);
      const currentLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
      setCenter(currentLocation);

      // Se houver denúncias e o mapa ainda não foi inicializado
      if (denuncias && denuncias.length > 0 && !mapInitialized) {
        const mostRecentDenuncia = denuncias[denuncias.length - 1];
        const destLat = parseFloat(mostRecentDenuncia.lat); // Use 'lat' aqui
        const destLng = parseFloat(mostRecentDenuncia.lng); // Use 'lng' aqui

        // Verifica se as coordenadas são válidas
        if (!isNaN(destLat) && !isNaN(destLng)) {
          const destLocation = { lat: destLat, lng: destLng };
          setDestLocation(destLocation);
          await calculateRoute(currentLocation, destLocation); // Calcula a rota
        } else {
          console.error("Coordenadas de destino inválidas:", mostRecentDenuncia);
        }
        setMapInitialized(true); // Marca que o mapa foi inicializado
      }
    }

    if (showMap) {
      createMap();
    }
  }, [showMap, denuncias, mapInitialized]); // Adiciona 'mapInitialized' como dependência

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
      {/* {center && <MarkerF position={center} />}
          {destLocation && <MarkerF position={destLocation} />}*/} 
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      )}
      <div className="absolute top-4 left-4">
        <IonButton onClick={() => map?.panTo(center!)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          </svg>
        </IonButton>
        <div className="w-auto h-auto bg-white px-4 py-2">
          <h1 className="text-sm">Distância: {distance}</h1>
          <h1 className="text-sm">Duração: {duration}</h1>
        </div>
      </div>
    </div>
  );
}
