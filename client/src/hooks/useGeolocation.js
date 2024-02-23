import { useState } from 'react'

const useGeolocation = () => {

  const [ultimaPosicion, setUltimaPosicion] = useState({});  

  const obtenerPosicion = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("La geolocalización no es soportada por este navegador.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lon } = position.coords;
          setUltimaPosicion({ lat, lon });
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  return {
    obtenerPosicion,
    ultimaPosicion, 
  }


}



export default useGeolocation