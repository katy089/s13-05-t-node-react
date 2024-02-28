import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const data = [
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  },
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  },
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  },
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  },
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  },
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  },
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  },
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  },
  {
    imageLink: `https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/800/600`, 
  }
];





function ProfileContent() {
  const obtenerDatosLocalStorage = () => {
    const datos = localStorage.getItem("sessionData");
    return datos ? JSON.parse(datos) : null;
  };

  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Obtener los datos del localStorage al montar el componente
    const datosLocalStorage = obtenerDatosLocalStorage();
    setDatos(datosLocalStorage);
  }, []);

  return (
    <div className="w-full h-full bg-white flex justify-center items-center">
      <ProfileCard
        img={datos ? datos.usuario.fotos : ""}
        nombre={datos ? datos.usuario.nombre : ""}
        activo={true}
        ultimaPosicion={datos?.usuario?.distancia ?? 0}// Valor predeterminado para última posición
        generos={datos?.generos?.map((gen) => gen.nombre) ?? []} // Lista vacía si no hay géneros
        bandas={datos?.bandas?.map((band) => band.nombre) ?? []} // Lista vacía si no hay bandas
        miGenero={datos?.usuario?.genero ?? "Género Predeterminado"}
        fotos={data.map((band) => band.imageLink)}
      />
    </div>
  );
}

export default ProfileContent;
