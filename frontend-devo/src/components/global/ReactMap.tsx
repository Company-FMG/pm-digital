//@ts-nocheck
import { useEffect, useState } from "react";
import { GoogleMap, DirectionsRenderer, useLoadScript } from "@react-google-maps/api";
import { Geolocation as CapacitorGeolocation } from "@capacitor/geolocation";
import { useMap } from "../../contexts/MapContext";
import { IonButton } from "@ionic/react";
import axios from "axios";
import "../../index.css";

interface Geolocation{
  lat: number;
  lng: number;
}

interface Denuncia{
  geolocation: Geolocation;
}
 
export default function ReactMap() {
  const [mapState, setMapState] = useState<{
    center: Geolocation | null;
    destLocation: Geolocation | null;
    directionsResponse: google.maps.DirectionsResult | null;
    distance: string | null;
    duration: string | null;
  }>({
    center: null,
    destLocation: null,
    directionsResponse: null,
    distance: null,
    duration: null,
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapInitialized, setMapInitialized] = useState(false); // Novo estado para controlar a inicialização do mapa

  const { showMap, setShowMap } = useMap();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY!,
    libraries: ['places'],
  });

  const apiUrl = import.meta.env.VITE_API_URL!;
  const [denuncia, setDenuncia] = useState<Denuncia>();

  const fetchDenuncia = async () => {
    try {
      const response = await axios.get<Denuncia>(`${apiUrl}/viaturas/${localStorage.getItem("placaViatura")}/denuncia`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setShowMap(true);
      setDenuncia(response.data);
      console.log(response.data.geolocation);
    } catch (error) {
      console.error("Erro ao carregar a denúncia:", error);
      if(error.response.status === 404) {
        alert("Sem denúncias atribuídas à viatura no momento");
      }
    }
  };
  
  useEffect(() => {
    fetchDenuncia();
  }, []);

  useEffect(() => {
    if (showMap && denuncia) {
      initializeMap();
    }
  }, [showMap, denuncia]);

  const initializeMap = async () => {
    try {
      const position = await CapacitorGeolocation.getCurrentPosition();
      const currentLocation: Geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      
      setMapState((prev) => ({
        ...prev,
        center: currentLocation,
      }));
      
      if (denuncia?.geolocation) {
        const destLocation: Geolocation = {
          lat: denuncia.geolocation.lat,
          lng: denuncia.geolocation.lng,
        };
        
        console.log("Localização atual:", currentLocation);
        console.log("Localização da denúncia:", destLocation);

        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
          origin: currentLocation,
          destination: destLocation,
          travelMode: google.maps.TravelMode.DRIVING,
        });
  
        setMapState({
          center: currentLocation,
          destLocation,
          directionsResponse: results,
          distance: results.routes[0].legs[0].distance?.text || null,
          duration: results.routes[0].legs[0].duration?.text || null,
        });
      }
    } catch (error) {
      console.error("Erro ao inicializar o mapa:", error);
    }
  };

  if (!isLoaded) {
    return <h1>Carregando biblioteca do Google Maps...</h1>;
  }
  
  if (!showMap) {
    return <h1>Mapa desativado. Ative para continuar.</h1>;
  }

  return (
    <div>
      {!isLoaded ? (
        <h1>Carregando...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={mapState.center || undefined}
          zoom={18}
          options={{ disableDefaultUI: true }}
          onLoad={(map) => setMap(map)}
        >
      {/* {center && <MarkerF position={center} />}
          {destLocation && <MarkerF position={destLocation} />}*/} 
          {mapState.directionsResponse && <DirectionsRenderer directions={mapState.directionsResponse} />}
        </GoogleMap>
      )}
      <div className="absolute top-4 left-4">
        <IonButton onClick={() => map?.panTo(mapState.center!)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          </svg>
        </IonButton>
        <div className="w-auto h-auto bg-white px-4 py-2">
          <h1 className="text-sm">Distância: {mapState.distance}</h1>
          <h1 className="text-sm">Duração: {mapState.duration}</h1>
        </div>
      </div>
    </div>
  );
}
