import { GoogleMap, MarkerF, DirectionsRenderer, useLoadScript } from "@react-google-maps/api";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";
import { IonButton } from "@ionic/react";

export default function LiveMapTest() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY!,
    libraries: ["places", "geometry"],
  });

  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [simulating, setSimulating] = useState(false);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const destination = { lat: -8.0578727, lng: -34.8825846 }; // Defina seu destino fixo ou variável

  async function calculateRoute(origin: { lat: number; lng: number }, destination: { lat: number; lng: number }) {
    const directionsService = new google.maps.DirectionsService();
    try {
      const results = await directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      console.log("Resultados da Rota: ", results);

      if (results.routes && results.routes.length > 0 && results.routes[0].legs && results.routes[0].legs.length > 0) {
        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance?.text || null);
        setDuration(results.routes[0].legs[0].duration?.text || null);
      } else {
        console.error("Erro: Rota ou pernas não encontradas.");
        setDirectionsResponse(null);
      }
    } catch (error) {
      console.error("Erro ao calcular a rota: ", error);
      setDirectionsResponse(null);
    }
  }

  function startSimulation() {
    if (!directionsResponse) return;

    setSimulating(true);

    const steps = directionsResponse.routes[0].legs[0].steps;

    console.log("Passos da Rota: ", steps);

    const path = steps.flatMap((step) => {
      if (step.polyline && step.polyline.points) {
        return google.maps.geometry.encoding.decodePath(step.polyline.points);
      } else if (step.path) {
        return step.path;
      } else {
        console.error("Passo sem polyline ou path: ", step);
        return [];
      }
    });

    if (path.length === 0) {
      console.error("Nenhum caminho encontrado para a simulação.");
      setSimulating(false);
      return;
    }

    let index = 0;

    const intervalId = setInterval(() => {
      if (index < path.length) {
        setCurrentPosition({ lat: path[index].lat(), lng: path[index].lng() });
        index++;
      } else {
        clearInterval(intervalId);
        setSimulating(false);
      }
    }, 3000);
  }

  useEffect(() => {
    async function getCurrentPosition() {
      try {
        const position = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });
        const userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
        setCurrentPosition(userLocation);
        calculateRoute(userLocation, destination);
      } catch (error) {
        console.error("Erro ao obter a localização: ", error);
        setCurrentPosition({ lat: -8.0550202, lng: -34.8878231 });
      }
    }

    getCurrentPosition();
  }, []);

  if (!isLoaded || !currentPosition) {
    return <h1>Carregando mapa...</h1>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerClassName="map-container"
        center={currentPosition}
        zoom={16}
        options={{ disableDefaultUI: true }}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        {currentPosition && <MarkerF position={currentPosition} />}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{ suppressMarkers: true }} // Para evitar marcadores extras
          />
        )}
      </GoogleMap>
      <div className="absolute top-4 left-4">
        <button
          className={`p-2 ${simulating ? "bg-gray-500" : "bg-blue-500"} text-white rounded`}
          onClick={startSimulation}
          disabled={simulating}
        >
          {simulating ? "Simulando..." : "Iniciar Simulação"}
        </button>
      </div>
      <div className="absolute bottom-4 right-4">
        <IonButton onClick={() => map?.panTo(currentPosition!)}>
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
