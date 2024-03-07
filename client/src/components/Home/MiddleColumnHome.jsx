import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CustomButton from "../reusable-components/forms/CustomButton";
import useGetNombres from "../../hooks/useGetNombres";

const MiddleColumnHome = (props) => {
  const { datosUsuario, setSelectedUser } = props;
  const navigate = useNavigate();
  const { bandas, generos } = useGetNombres();

  const handleDiscover = () => {
    navigate("/match");
  };
  const handleGetUser = ({ nombre, id }) => {
    setSelectedUser({ nombre, id });
  };


  return (
    <div className="flex flex-col mx-auto">
      <div role="tablist" className="tabs tabs-bordered  w-full">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Matches"
          checked
          readOnly
        />
        <div role="tabpanel" className="tab-content mt-4">
          {datosUsuario && datosUsuario.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                          match.fotos[0]
                            ? match.fotos[0]
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
                                  <span key={index}> #{generos[generoId]}</span>
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
            <div
              className="card w-4/5 md:w-1/2 bg-base-100 shadow-xl m-auto mt-4"
              style={{
                backgroundColor: "#3030303d",
              }}
            >
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
                  <CustomButton
                    className="btn bg-[#BB7EBC] hover:border-[#BB7EBC] "
                    onClick={handleDiscover}
                    text={"Descubre más"}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab w-1/2"
          aria-label="Siguiendo"
          readOnly
        />
        <div role="tabpanel" className="tab-content">
          <div
            className="card w-4/5 md:w-1/2 bg-base-100 shadow-xl m-auto mt-4"
            style={{
              backgroundColor: "#3030303d",
            }}
          >
            <figure className="px-5 pt-5">
              <img
                src="https://images.pexels.com/photos/3450887/pexels-photo-3450887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Couple"
                className="rounded-xl w-full h-1/3"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                ¡Conoce a otros amantes de la música como tú!
              </h2>
              <div className="card-actions">
                <CustomButton
                  text={"Descubre más"}
                  className="btn bg-[#BB7EBC] hover:border-[#BB7EBC]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MiddleColumnHome.propTypes = {
  datosUsuario: PropTypes.array,
  setSelectedUser: PropTypes.func,
};

export default MiddleColumnHome;
