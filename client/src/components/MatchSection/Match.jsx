import { useEffect, useState } from "react";
import PreferencesColumn from "./PreferencesColumn";
import TabColumn from "./TabColumn";
import TinderColumn from "./TinderColumn";
import Chat from "../Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import {
  getId,
  getTuneMatch,
  logout,
  selectIsLoggedIn,
} from "../../redux/authSlice";
import { obtenerDatosUsuario } from "../Home/auxHome";

function Match() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatSection, setChatSection] = useState(null);
  const userId = useSelector(getId);
  const tunematch = useSelector(getTuneMatch);
  // console.log("Este es el tunematch:", tunematch);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [datosUsuario, setDatosUsuario] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser != null) {
      console.log("Actualizando chatSection para:", selectedUser.nombre);
      setChatSection(
        <div className="w-full h-[80vh] mt-4">
          <Chat selectedUser={selectedUser} datosUsuario={datosUsuario} />
        </div>
      );
    } else {
      setChatSection(null);
    }
  }, [datosUsuario, selectedUser]);

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
    <div className="w-full">
      <div className="modal-backdrop"></div>
      <div className="grid grid-cols-1 md:grid md:grid-cols-12">
        <div className="hidden md:grid md:col-span-3">
          <TabColumn
            setSelectedUser={setSelectedUser}
            chatSection={chatSection}
            selectedUser={selectedUser}
            datosUsuario={datosUsuario}
          />
        </div>
        <div className="col-span-1 md:col-span-5">
          <TinderColumn />
        </div>
        <div className="hidden md:grid md:col-span-4 bg-black">
          <PreferencesColumn />
        </div>
      </div>
    </div>
  );
}

export default Match;
