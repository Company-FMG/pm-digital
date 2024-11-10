import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
const google_maps_key = import.meta.env.VITE_REACT_GOOGLE_MAPS_KEY

interface ComplaintMapProps{
  local: string;
  lat: number;
  lng: number;
}

export default function ComplaintMap({local, lat, lng}: ComplaintMapProps) {
  const center = {lat, lng};
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: google_maps_key,
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
          >
            <MarkerF position={center}></MarkerF>
          </GoogleMap>
        </div>
      </div>
    </>
  )
}