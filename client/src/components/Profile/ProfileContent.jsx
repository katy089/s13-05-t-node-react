// import { useEffect, useState } from "react";
import { dataImg } from "../../utils/datas";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";

function ProfileContent() {
  const datos = useSelector((state) => state.auth);

  const ultimaPosicionString = datos.ultimaPosicion
    ? `Latitud: ${datos.ultimaPosicion.lat}, Longitud: ${datos.ultimaPosicion.lon}`
    : "";

  const randomGender = Math.random() < 0.5 ? "men" : "women";
  const randomIndex = Math.floor(Math.random() * 100) + 1; // Sumamos 1 para evitar 0

  const randomAvatarUrl = `https://randomuser.me/api/portraits/${randomGender}/${randomIndex}.jpg`;

  return (
    <div className="w-full h-full bg-white flex justify-center items-center">
      <ProfileCard
        img={randomAvatarUrl}
        nombre={datos.nombre}
        activo={datos.active}
        ultimaPosicion={ultimaPosicionString}
        generos={datos?.generos?.map((gen) => gen.name) ?? []}
        bandas={datos?.bandas?.map((gen) => gen.name) ?? []}
        miGenero={datos.miGenero}
        fotos={dataImg.map((band) => band.imageLink)}
      />
    </div>
  );
}

export default ProfileContent;
