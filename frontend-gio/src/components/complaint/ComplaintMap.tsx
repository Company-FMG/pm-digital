import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
const api_key = import.meta.env.VITE_REACT_GOOGLE_MAPS_KEY

const center = { lat: -8.054895, lng: -34.887762 }

export default function ComplaintMap() {
  const endereco = 'Rua General Viriato de Medeiros';
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: api_key,
    libraries: ['places']
  })

  if (!isLoaded) {
    return <h1>Erro</h1>
  }

  return (
    <>
      <div className="">
        <h1 className="text-sm md:text-xl lg:text-2xl font-bold">
          Localização: {endereco}
        </h1>
        <div className="flex mt-4 w-full h-map-mdH rounded-lg border-4 border-bluemike">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%', }}
            zoom={15}
            center={center}
            options={{ mapId: "3dbe8233f2b40a5c" }}
          >
            <Marker position={center}></Marker>
          </GoogleMap>
        </div>
      </div>
    </>
  )
}