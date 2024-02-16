import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import loginbg from "../../assets/loginbg.jpg";
import LOGO from "../../assets/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../reusable-components/forms/CustomButton";
import {
  authenticateUser,
  sendToBackend,
} from "../../auxFunctions/loginFunctions";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [ultimaPosicion, setUltimaPosicion] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [emailTuneMatch, setEmailTuneMatch] = useState(null);
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleButton = () => {
    navigate("/signup");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Solicitud de autenticación
    const response = await authenticateUser(correo, password);
    if (response.status === 200 && response.success) {
      // Pregunto al usuario si es mayor de  18 años antes de redirigir
      Swal.fire({
        title: "¿Eres mayor de  18 años?",
        background: "#ff0000",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, soy mayor",
        cancelButtonText: "No, soy menor",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma que es mayor de  18 años, redirigimos a /home
          Swal.fire({
            title: "Bienvenido a TuneMatch!",
            text: "Conecta a través de la música🎷",
            icon: "success",
          });
          navigate("/home");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Si el usuario niega ser mayor de  18 años, muestro un mensaje de disculpa
          Swal.fire(
            "Lo sentimos",
            "Debes ser mayor de  18 años para ingresar.",
            "info"
          );
        }
      });
    } else {
      // Muestro alerta con el mensaje de error
      Swal.fire({
        title: "Error de autenticación",
        text: response.message,
        icon: "error",
      });
    }
  };

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
    // envío la info al backend
    sendToBackend(
      response,
      ultimaPosicion,
      setEmailTuneMatch,
      handleLoginError
    );
    Swal.fire({
      title: "¿Eres mayor de  18 años?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, soy mayor",
      cancelButtonText: "No, soy menor",
      confirmButtonColor: "#50d45b",
      cancelButtonColor: "#d33",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma que es mayor de  18 años, redirigimos a /home
        Swal.fire({
          title: "Bienvenido a TuneMatch!",
          imageUrl:
            "https://images.pexels.com/photos/4406761/pexels-photo-4406761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          text: "Conecta a través de la música🎷",
        });
        navigate("/home");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Si el usuario niega ser mayor de  18 años, muestro un aleert de disculpa
        Swal.fire(
          "Lo sentimos",
          "Debes ser mayor de  18 años para ingresar.",
          "info"
        );
      }
    });
  };

  const handleLoginError = (error) => {
    // manejo de errores
    Swal.fire({
      title: "Error de autenticación",
      text: "Prueba ingresar un cuenta válida",
      icon: "error",
    });
    console.error(error);
  };

  return (
    <div className="w-screen min-h-[140vh] sm:min-h-screen flex bg-black">
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
              <Link to="/signup">Registrarse</Link>
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
            <div className="place-content-start flex flex-col w-11/12 mx-auto justify-normal sm:justify-center sm:mx-0 sm:w-1/2 md:w-3/4 mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-6xl text-start py-10">
                Conecta con músicos!
              </h1>
              <p className="text-base md:text-xl  md:pr-56">
                Únete a TuneMatch!! conecta con músicos, amantes de la música y
                bandas. Descubre, colabora y crece en una comunidad vibrante.
                ¡Inicia sesión ahora para formar parte de esta experiencia
                musical única!
              </p>
              <div className="flex items-center justify-center  my-5 sm:my-10">
                <CustomButton
                  handleClick={handleButton}
                  text={"Comienza Ahora!"}
                  className="bg-[#BB7EBC] hover:text-[#BB7EBC] btn border-none w-1/2 md:w-1/3 text-white rounded-3xl"
                />
              </div>
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
                onSubmit={handleSubmit}
                action="submit"
                className="flex flex-col my-6 border-b-[3.5px] border-white pb-8"
              >
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                    style={{
                      backgroundImage: ` linear-gradient(180deg, rgba(169,181,180,1) 0%, rgba(154,201,196,1) 34%)`,
                    }}
                    className="outline-none appearance-none border-none rounded-lg px-2 py-2 text-black placeholder:text-gray-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      backgroundImage: ` linear-gradient(180deg, rgba(169,181,180,1) 0%, rgba(154,201,196,1) 34%)`,
                    }}
                    className="outline-none appearance-none border-none rounded-lg px-2 py-2 text-black placeholder:text-gray-500"
                    placeholder="Introduce tu contraseña"
                  />
                </div>
                <div className="flex items-center justify-center text-center my-6">
                  <button
                    type="submit"
                    className="bg-[#BB7EBC] btn border-none w-full text-white rounded-3xl"
                  >
                    Inicia Sesión
                  </button>
                </div>
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
                <div className="my-4 flex items-center space-x-1">
                  <p>¿No tienes cuenta?</p>
                  <CustomButton
                    className="hover:text-gray-400"
                    handleClick={handleButton}
                    text={"Registrate!"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
