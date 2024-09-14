//@ts-nocheck
import { createContext, useContext, useState } from 'react';

const MapContext = createContext();

export const useMap = () => {
  return useContext(MapContext);
};

export const MapProvider = ({ children }:{children:any}) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <MapContext.Provider value={{ showMap, setShowMap }}>
      {children}
    </MapContext.Provider>
  );
}