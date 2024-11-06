import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
const api_key = import.meta.env.VITE_REACT_GOOGLE_MAPS_KEY

interface ComplaintMapProps{
  local: string;
  lat: number;
  lng: number;
}

export default function ComplaintMap({local, lat, lng}: ComplaintMapProps) {
  const center = {lat, lng};
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: api_key,
    libraries: ['places']
  })

  if (!isLoaded) {
    return <h1>Erro</h1>
  }

  console.log(center);

  return (
    <>
      <div className="">
        <h1 className="text-sm md:text-xl lg:text-2xl font-bold">
          Localização: {local}
        </h1>
        <div className="flex mt-4 w-full h-map-mdH rounded-lg border-4 border-bluemike">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%', }}
            zoom={15}
            center={center}
            options={{ mapId: "3dbe8233f2b40a5c" }}
          >
            <MarkerF position={center}></MarkerF>
          </GoogleMap>
        </div>
      </div>
    </>
  )
}