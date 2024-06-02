import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useMemo, useState } from "react";
import "../../index.css"

export default function ReactMap () {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY! });
    const [center, setCenter] = useState<{ lat: number, lng: number } | undefined>(undefined);

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
              zoom={20}
              >
                {center && <MarkerF position={center} />}
              </GoogleMap>
          )}
        </div>
      );
}
