import { useDispatch, useSelector } from "react-redux";
import Chat from "../Chat/Chat";
import {
  getFotos,
  getId,
  getNombre,
  getTuneMatch,
  logout,
  selectIsLoggedIn,
} from "../../redux/authSlice";
import { eventos, obtenerDatosUsuario } from "./auxHome";
import { useEffect, useRef, useState } from "react";
import CardColumnHome from "./CardColumnHome";
import MiddleColumnHome from "./MiddleColumnHome";

const HomeContent = () => {
  const userId = useSelector(getId);
  const tunematch = useSelector(getTuneMatch);
  // console.log("Este es el tunematch:", tunematch);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const fotos = useSelector(getFotos);
  const nombre = useSelector(getNombre);
  const nombreParaUser = nombre
    .replace(/\s/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const profilePhoto = fotos?.length > 0 ? fotos[0] : null;
  const [datosUsuario, setDatosUsuario] = useState(null);
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatSection, setChatSection] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    if (selectedUser != null) {
      setChatSection(
        <div
          className="w-4/5 sm:w-4/6 sm:mt-4 md:w-1/4 mx-auto pb-4"
          ref={chatRef}
        >
          <Chat selectedUser={selectedUser} datosUsuario={datosUsuario} />
        </div>
      );
      // Desplazo automáticamente a la sección del chat en dispositivos móviles
      if (chatRef.current && window.innerWidth <= 768) {
        chatRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setChatSection(null);
    }
  }, [datosUsuario, selectedUser, tunematch]);

  const handleClick = (redirectUrl) => {
    window.open(redirectUrl, "_blank");
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      if (!isLoggedIn || !userId) {
        if (isLoggedIn) {
          // para evitar bucle infinito
          dispatch(logout());
        }
        return;
      } else {
        try {
          const datos = await obtenerDatosUsuario(tunematch);
          setDatosUsuario(datos);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    obtenerDatos();
  }, [dispatch, isLoggedIn, tunematch, userId]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-4/5 sm:w-4/6 md:w-1/4 mx-auto pt-4 pb-2">
        <CardColumnHome
          profilePhoto={profilePhoto}
          nombre={nombre}
          nombreParaUser={nombreParaUser}
          eventos={eventos}
          handleClick={handleClick}
        />
      </div>
      <div className="w-4/5 sm:w-4/6 md:w-2/5 mx-auto py-4">
        <MiddleColumnHome
          datosUsuario={datosUsuario}
          setSelectedUser={setSelectedUser}
        />
      </div>
      {chatSection}
    </div>
  );
};

export default HomeContent;
