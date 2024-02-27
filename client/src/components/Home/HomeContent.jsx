import { useSelector } from "react-redux";
import bgprofile from "../../assets/bgprofile.png";
import Chat from "../Chat/Chat";
import { getFotos } from "../../redux/authSlice";

const eventos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Metallica",
    city: "Buenos Aires",
    redirect: "https://www.metallica.com",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "AC/DC",
    city: "La Plata",
    redirect: "https://www.acdc.com/tour/",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Foo Fighters",
    city: "Rosario",
    redirect: "https://foofighters.com/",
  },
];

const HomeContent = () => {
  const fotos = useSelector(getFotos);

  const profilePhoto = fotos?.length > 0 ? fotos[0] : null;

  const handleClick = (redirectUrl) => {
    window.open(redirectUrl, "_blank");
  };

  return (
    <div className="my-4 flex flex-col md:flex-row">
      <div className="w-4/5 md:w-1/4  flex flex-col mx-auto md:mx-0 items-center">
        <div className="card w-full md:w-11/12 bg-base-100 shadow-lg image-full shadow-gray-500">
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
                <h2 className="card-title">Megan Fox</h2>
                <h3>@MeganFox</h3>
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
        <div className="mt-6">
          <h2>Puede interesarte</h2>
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
      <div className="w-4/5 md:w-1/2 bg-green-400 flex flex-col mx-auto md:mx-0">
        <nav>
          <ul>
            <li>Siguiendo</li>
            <li>Trending</li>
            <li>Para ti</li>
          </ul>
        </nav>
        <div className="container">
          <div className="grid-cols-2">
            <div className="col-span-1">
              <h1>Descubre las novedades de esta semana</h1>
              <button className="rounded-lg bg-white text-black">
                Explorar
              </button>
            </div>
            <div className="col-span-1">
              <h1>Descubre las novedades de esta semana</h1>
              <button className="rounded-lg bg-white text-black">
                Explorar
              </button>
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
