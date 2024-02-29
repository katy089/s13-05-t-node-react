import LOGO from "../../assets/LOGO.png";
import generos from "../../assets/generos.png";
import Button2 from "../reusable-components/Buttons/Button2";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

// Lista de género
const data = [
  {
    name: "Rock",
  },
  {
    name: "Pop",
  },
  {
    name: "HipHop",
  },
  {
    name: "R&B",
  },
  {
    name: "Electrónica",
  },
  {
    name: "Jazz",
  },
  {
    name: "Folk",
  },
  {
    name: "Clásica",
  },
  {
    name: "Funk",
  },
  {
    name: "Blues",
  },
  {
    name: "Metal",
  },
  {
    name: "Country",
  },
  {
    name: "Reggae",
  },
  {
    name: "Reggaeton",
  },
  {
    name: "Cumbia",
  },
  {
    name: "Dance&EDM",
  },
  {
    name: "Disco",
  },
  {
    name: "80's",
  },
  {
    name: "Punk",
  },
  {
    name: "Grunge",
  },
  {
    name: "Lofi",
  },
  {
    name: "Otro",
  },
];

function PageSelection() {
  return (
    <div className="w-screen min-h-[140vh] sm:min-h-screen flex bg-black text-white">
      <ScrollToTop />
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-0 h-0 border-solid border-transparent border-r-[35vw] border-b-[100vh] border-black bg-black z-10"
          style={{
            clipPath: "polygon(0px 0px, 35% 611px, 0px 100%)",
          }}
        ></div>

        <nav className="flex items-center w-full top-0 z-20 relative bg-black text-white pt-2 pb-2 md:pb-0 md:pt-4">
          <ul className="flex items-center space-x-4 sm:space-x-8 md:space-x-14 mx-4 md:mx-10">
            <li>
              <img src={LOGO} alt="logo" title="logo de la aplicación" />
            </li>
          </ul>
        </nav>
        <div
          className="pt-20 pb-40 sm:pt-40 h-[88vh] flex items-center text-white relative"
          style={{
            backgroundImage: `url(${generos})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col sm:flex-row justify-between w-full h-[85vh]  px-2 sm:px-4 md:px-10 z-40">
            <div className="place-content-start flex flex-col w-11/12 mx-auto justify-normal sm:justify-center sm:mx-0 sm:w-1/2 md:w-3/4 mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-6xl text-start py-10">
                 Cuentanos acerca de tus géneros favoritos
              </h1>
              <p className="text-base md:text-xl  md:pr-56">
                   Dinos qué música te apasiona y nos aseguraremos de 
                   <br></br>
                   conectar contigo personas que comparten tus
                   <br></br>
                   mismos gustos. ¡Comparte tu pasión musical y 
                   <br></br>
                   descubre nuevas  experiencias con personas afines!
              </p>
              <div className="flex items-center justify-center  my-5 sm:my-10"></div>
            </div>
            <div
              className="place-content-end w-11/12 mx-auto sm:mx-0 sm:w-1/3 md:w-1/2 px-4 py-6
           rounded-lg bg-opacity-95"
              style={{
                backgroundImage: ` linear-gradient(180deg, rgba(102,77,102,1) 0%, rgba(108,43,109,0.9808298319327731) 34%)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-3xl text-center">Escoge tus generos musicales preferidos!</h1>
              <form
                action="submit"
                className="flex flex-col my-6 border-b-[3.5px] border-white pb-8"
              >
                <div className="grid grid-cols-3 gap-5">
                  {data.map((e) => (
                    <Button2 key={e.name} text={e.name} />
                  ))}
                </div>
              </form>
              <span className="-mt-[38px] flex items-center justify-center mx-auto text-center w-max px-1 bg-[#6C2B6D]">
                Puedes cambiar estos ajustes cuando quieras
              </span>
              <div className="flex items-center flex-col my-4">
                <button
                  type="submit"
                  className="bg-[#BB7EBC] btn border-none w-full text-white rounded-3xl"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSelection;