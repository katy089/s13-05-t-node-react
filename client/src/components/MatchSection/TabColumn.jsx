import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getId,
  getTuneMatch,
  logout,
  selectIsLoggedIn,
} from "../../redux/authSlice";
import { obtenerDatosUsuario } from "../Home/auxHome";
import useGetNombres from "../../hooks/useGetNombres";
import PropTypes from "prop-types";
import { ChevronRightCircle } from "lucide-react";

function TabColumn(props) {
  const { chatSection, setSelectedUser, selectedUser } = props;
  const userId = useSelector(getId);
  const tunematch = useSelector(getTuneMatch);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [datosUsuario, setDatosUsuario] = useState(null);
  const { bandas, generos } = useGetNombres();

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

  const handleGetUser = ({ nombre, id }) => {
    setSelectedUser({ nombre, id });
    document
      .querySelector('input[name="my_tabs_1"][aria-label="Mensajes"]')
      .click();
  };

  return (
    <div className="w-full bg-[#6C2B6D]">
      <div className="flex flex-col mx-auto items-center">
        <div role="tablist" className="tabs tabs-bordered text-base py-3">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab tab-white text-white pb-2 font-semi-bold text-base"
            aria-label="Matches"
            checked
            readOnly
          />{" "}
          <div role="tabpanel" className="tab-content mt-4">
            {datosUsuario && datosUsuario.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {datosUsuario.map((match) => (
                  <div
                    key={match.id}
                    onClick={() => handleGetUser(match)}
                    className="rounded-md shadow-md text-start relative snap-start w-36 h-56 z-10 hover:cursor-pointer hover:opacity-50"
                  >
                    <div>
                      <div className="relative h-56">
                        <img
                          src={
                            match.img
                              ? match.img
                              : "https://images.pexels.com/photos/11676200/pexels-photo-11676200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          }
                          alt={match.nombre}
                          className="rounded-xl -z-10 object-cover w-full h-full"
                        />
                        <div
                          className="absolute top-0 left-0 w-full h-full rounded-xl"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
                          }}
                        ></div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white">
                        <h2 className="card-title text-sm">{match.nombre}</h2>
                        <>
                          {match.generos && match.generos.length > 0 && (
                            <>
                              <div className="text-xs">
                                {match.generos
                                  .slice(0, 3)
                                  .map((generoId, index) => (
                                    <span key={index}>
                                      {" "}
                                      #{generos[generoId]}
                                    </span>
                                  ))}
                              </div>
                            </>
                          )}
                        </>

                        <>
                          {match.bandas && match.bandas.length > 0 && (
                            <>
                              <div className="text-xs">
                                {match.bandas
                                  .slice(0, 3)
                                  .map((bandaId, index) => (
                                    <span key={index}> #{bandas[bandaId]}</span>
                                  ))}
                              </div>
                            </>
                          )}
                        </>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card w-4/5 shadow-xl m-auto mt-4 bg-[#FB98FD]">
                <figure className="px-5 pt-5">
                  <img
                    src="https://images.pexels.com/photos/1021145/pexels-photo-1021145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Couple"
                    className="rounded-xl w-full h-1/3"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">
                    ¡Conoce a otros amantes de la música como tú!
                  </h2>
                  <div className="card-actions">
                    <div className="btn bg-[#BB7EBC] hover:border-[#BB7EBC] ">
                      Prueba dar like! <ChevronRightCircle />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab tab-white text-white pb-2 font-semi-bold text-base"
            aria-label="Mensajes"
            readOnly
          />{" "}
          <div role="tabpanel" className="tab-content primario ">
            {chatSection}
            {!selectedUser && (
              <div className="text-center mt-4 text-white flex items-center mx-auto px-3">
                Seleccione un usuario para iniciar una conversación.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

TabColumn.propTypes = {
  setSelectedUser: PropTypes.func,
  selectedUser: PropTypes.func,
  chatSection: PropTypes.func,
};

export default TabColumn;
