import { useSelector } from "react-redux";
import bgprofile from "../../assets/bgprofile.png";
import Chat from "../Chat/Chat";
import { getFotos, getNombre } from "../../redux/authSlice";
import { eventos, tuneMatch } from "./auxHome";

const HomeContent = () => {
  const fotos = useSelector(getFotos);
  const nombre = useSelector(getNombre);
  const nombreParaUser = nombre
    .replace(/\s/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const profilePhoto = fotos?.length > 0 ? fotos[0] : null;

  const handleClick = (redirectUrl) => {
    window.open(redirectUrl, "_blank");
  };

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
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
          <div role="tabpanel" className="tab-content">
            {tuneMatch.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tuneMatch.map((match) => (
                  <div key={match.id} className="rounded-md shadow-md">
                    <div className="card-body items-center text-center">
                      <img
                        src={match.img}
                        alt={match.nombre}
                        className="rounded-full w-4/5 mx-auto"
                      />
                      <h2 className="card-title">{match.nombre}</h2>
                      <p>
                        {match.generos.map((genre) => `#${genre}`).join(" ")}
                      </p>

                      <p>{match.distancia} km</p>
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
