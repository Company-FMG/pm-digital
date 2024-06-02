import { GoogleMap, MarkerF, useLoadScript, DirectionsService, DirectionsRenderer, useGoogleMap } from "@react-google-maps/api";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useMemo, useState } from "react";
import "../../index.css"
import { IonButton } from "@ionic/react";

export default function ReactMap () {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY! });
    const [center, setCenter] = useState<{ lat: number, lng: number } | undefined>(undefined);
    const rafaPosition = { lat: -8.131462, lng: -34.905769 };

    const [map, setMap] = useState<google.maps.Map | null>(null);

    
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
            console.log(position);

            setCenter({ lat: latitude, lng: longitude });
        }
        createMap();
    }, []);

    return (
        <div>
          {!isLoaded ? (
            <h1>Carregando...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={18} 
              options={{disableDefaultUI:true}}
              onLoad={(map) => setMap(map)}
              >
                {center && <MarkerF position={center} />}
                <MarkerF position={rafaPosition}/>
              </GoogleMap>
          )}
          <IonButton className="absolute top-4 right-4 z-10" onClick={() => map?.panTo(center!)}>
            Meu Local
          </IonButton>
        </div>
      );
}
