import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import loginbg from "../../assets/loginbg.jpg";
import LOGO from "../../assets/LOGO.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [ultimaPosicion, setUltimaPosicion] = useState({});
  const [emailTuneMatch, setEmailTuneMatch] = useState(null);

  const obtenerPosicion = () => {
    if (!navigator.geolocation) {
      console.error("La geolocalización no es soportada por este navegador.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        setUltimaPosicion({ lat, lon });
        console.log({ lat, lon });
      },
      (error) => {
        console.error("Error obteniendo la ubicación del usuario:", error);
      }
    );
  };

  useEffect(() => {
    obtenerPosicion();
  }, []);

  const handleLoginSuccess = (response) => {
    // agregar un alert de respuesta exitosa
    console.log(response);
    // envío la info al backend
    sendToBackend(response);
    navigate("/home");
  };

  const handleLoginError = (error) => {
    // manejo de errores
    console.error(error);
  };

  const sendToBackend = (response) => {
    const body =
      Object.keys(ultimaPosicion).length !== 0
        ? { id_token: response.credential, ultimaPosicion }
        : { id_token: response.credential };

    fetch("http://localhost:8080/api/usuario/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "emailTuneMatch",
          JSON.stringify(res.usuario.correo)
        );
        setEmailTuneMatch(res.usuario.correo);
      })
      .catch(handleLoginError);
  };

  const handleSignOut = async () => {
    window.google.accounts.id.disableAutoSelect(); // google queda como variable global si se pone el script en el index principal
    window.google.accounts.id.revoke(
      localStorage.getItem("emailTuneMatch"),
      (done) => {
        if (done) {
          console.log("Revocación exitosa");
          localStorage.removeItem("emailTuneMatch"); // colocar el correo en el storage puede no ser seguro, pero se necesita durante la sesion para poder cerrar
          window.location.reload(); // en caso de que haya quedado algo en el navegador se elimina, pero no es tan necesario, podría funcionar sin reload()
        } else {
          console.error("Error al revocar el consentimiento");
        }
      }
    );
  };
  return (
    <div className="w-screen min-h-[130vh] sm:min-h-screen flex bg-black">
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-0 h-0 border-solid border-transparent border-r-[35vw] border-b-[100vh] border-black bg-black z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 120%)",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-0 h-0 border-solid border-transparent border-l-[23vw] border-b-[90vh] border-black bg-black z-10 triangle-top"
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        ></div>
        <nav className="flex items-center w-full top-0 z-20 relative bg-black text-white pt-2 pb-2 md:pb-0 md:pt-4">
          <ul className="flex items-center space-x-4 sm:space-x-8 md:space-x-14 mx-4 md:mx-10">
            <li>
              <img src={LOGO} alt="logo" title="logo de la aplicación" />
            </li>
            <li>
              <Link to="/">Registrarse</Link>
            </li>
          </ul>
        </nav>
        <div
          className="pt-20 pb-40 sm:pt-40 h-[90vh] flex items-center text-white relative"
          style={{
            backgroundImage: `url(${loginbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col sm:flex-row justify-between w-full h-[85vh]  px-2 sm:px-4 md:px-10 z-40">
            <div className="place-content-start flex flex-col w-11/12 mx-auto sm:mx-0 sm:w-1/2 md:w-3/4 mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-6xl text-start py-10">
                Conecta con músicos!
              </h1>
              <p className="text-base md:text-xl  md:pr-56">
                Únete a TuneMatch!! conecta con músicos, amantes de la música y
                bandas. Descubre, colabora y crece en una comunidad vibrante.
                ¡Inicia sesión ahora para formar parte de esta experiencia
                musical única!
              </p>
            </div>
            <div
              className="place-content-end w-11/12 mx-auto sm:mx-0 sm:w-1/2 md:w-1/3 px-4 py-6
           rounded-lg bg-opacity-95"
              style={{
                backgroundImage: ` linear-gradient(180deg, rgba(102,77,102,1) 0%, rgba(108,43,109,0.9808298319327731) 34%)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-3xl text-center">Iniciar sesión</h1>
              <form
                action="submit"
                className="flex flex-col my-6 border-b-[3.5px] border-white pb-8"
              >
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    style={{
                      backgroundImage: ` linear-gradient(180deg, rgba(169,181,180,1) 0%, rgba(154,201,196,1) 34%)`,
                    }}
                    className="outline-none appearance-none border-none rounded-lg px-2 py-2 text-black placeholder:text-gray-500"
                    type="email"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    style={{
                      backgroundImage: ` linear-gradient(180deg, rgba(169,181,180,1) 0%, rgba(154,201,196,1) 34%)`,
                    }}
                    className="outline-none appearance-none border-none rounded-lg px-2 py-2 text-black placeholder:text-gray-500"
                    type="password"
                    placeholder="Introduce tu contraseña"
                  />
                </div>
                <button className="bg-[#BB7EBC] rounded-3xl my-6 p-2">
                  Inicia Sesión
                </button>
              </form>
              <span className="-mt-[38px] flex items-center justify-center mx-auto text-center w-max px-1 bg-[#6C2B6D]">
                o continua con
              </span>
              <div className="flex items-center flex-col my-6">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onFailure={handleLoginError}
                  theme="filled_black"
                  size="medium"
                  text="signin_with"
                  shape="pill"
                  // type="icon" muestra solo el icono con la G
                />
                <p className="my-4">
                  ¿No tienes cuenta? <b>Registrate!</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        {emailTuneMatch && (
          <button id="g_id_signout" onClick={handleSignOut}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
