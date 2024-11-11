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
      <div className="flex flex-col">
        <h1 className="text-xl 2xl:text-2xl font-bold line-clamp-2 text-justify">
          Localização:<span className="font-normal"> {local}</span>
        </h1>
        <div className="mt-4 w-full h-64 md:h-96 2xl:h-map-mdH rounded-xl border-4 md:border-8 border-gray-300 bg-gray-300">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '6px'}}
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