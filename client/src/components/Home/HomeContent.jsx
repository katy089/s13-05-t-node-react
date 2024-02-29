import { useDispatch, useSelector } from "react-redux";
import bgprofile from "../../assets/bgprofile.png";
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
import { useEffect, useState } from "react";

const HomeContent = () => {
  const userId = useSelector(getId);
  const tunematch = useSelector(getTuneMatch);
  // console.log("Este es el userId:", userId);
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
    <div
      className="my-4 flex flex-col md:flex-row
    "
    >
      <div className="w-4/5 md:w-1/4  flex flex-col mx-auto md:mx-0 items-center">
        <div className="card w-full md:w-11/12 bg-base-100 shadow-lg image-full shadow-gray-400">
          <figure>
            <img
              src={bgprofile}
              alt="foto de background"
              className="object-cover w-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row space-x-8 border-b-2 border-white pb-4">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {profilePhoto ? (
                    <img alt="Perfil" src={profilePhoto} />
                  ) : (
                    <img
                      alt="Foto de perfil por defecto"
                      src="https://images.pexels.com/photos/4472043/pexels-photo-4472043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col m-auto">
                <h2 className="card-title">{nombre}</h2>
                <h3 className="lowercase">@{nombreParaUser}</h3>
              </div>
            </div>
            <div className="grid-cols-3 flex flex-row justify-evenly">
              <div className="col-span-1 flex flex-col items-center">
                <h3>15k</h3>
                <h4>Likes</h4>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <h3>15k</h3>
                <h4>Likes</h4>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <h3>15k</h3>
                <h4>Likes</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="mb-1 font-medium">Puede interesarte</h2>
          <div className="grid-cols-1">
            {eventos.map((evento) => (
              <div key={evento.id} className="col-span-1 mb-3">
                <div className="grid-cols-3 flex flex-row">
                  <div className="col-span-1">
                    <img
                      src={evento.src}
                      alt={evento.title}
                      className="w-24 h-16 object-cover rounded-xl"
                    />
                  </div>
                  <div className=" col-span-1 flex flex-col m-auto px-2 items-center justify-center">
                    <h1 className="text-xs font-bold text-start">
                      {evento.title}
                    </h1>
                    <h4 className="text-xs font-extralight">{evento.city}</h4>
                  </div>
                  <div className=" col-span-1 flex items-center justify-center">
                    <button
                      className="btn btn-xs px-4 py-1 rounded m-auto bg-red-600 text-white"
                      onClick={() => handleClick(evento.redirect)}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-4/5 md:w-2/5  flex flex-col mx-auto">
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
                    className="rounded-md shadow-md text-start relative snap-start w-36 h-56 z-10"
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
                        <p className="text-xs">
                          {match.generos
                            .map((genre) => `#${genre.name}`)
                            .join(" ")}
                        </p>

                        <p className="text-xs">
                          {match.bandas
                            .map((band) => `#${band.name}`)
                            .join(" ")}
                        </p>
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
                    <button className="btn bg-[#BB7EBC] hover:border-[#BB7EBC] ">
                      Descubre más
                    </button>
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
                  <button className="btn bg-[#BB7EBC] hover:border-[#BB7EBC] ">
                    Descubre más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 md:w-1/4 bg-orange-500 flex flex-col mx-auto md:mx-0">
        <Chat />
      </div>
    </div>
  );
};

export default HomeContent;
