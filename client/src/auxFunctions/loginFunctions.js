import { API_URL_LOGIN, API_URL_GOOGLE } from "../config/api";
import { updateAll } from "../redux/authSlice";
// import { useDispatch } from "react-redux";
// import { setId } from '../redux/authSlice'

export const authenticateUser = async (correo, password) => {
  //eslint-disable-next-line
  // const dispatch = useDispatch();
  //console.log(correo , password);
  try {
    const response = await fetch(API_URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correo, password }),
    });

    // Verifica si response fue exitosa
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      return {
        status: response.status,
        success: true,
        message: data.message,
        usuario: data.usuario,
      };
    } else {
      const errorData = await response.json();
      return {
        status: response.status,
        success: false,
        message: errorData.message,
      };
    }
  } catch (error) {
    console.error("Error de autenticación:", error);
    return { success: false, message: "Hubo un error al iniciar sesión." };
  }
};

export const sendToBackend = (
  response,
  ultimaPosicion,
  setEmailTuneMatch,
  handleLoginError,
  dispatch
) => {
  const body =
    Object.keys(ultimaPosicion).length !== 0
      ? { id_token: response.credential, ultimaPosicion }
      : { id_token: response.credential };

  fetch(API_URL_GOOGLE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resp) => resp.json())
    .then((res) => {
      console.log(res.usuario, "hola soy el primer res");
      localStorage.setItem(
        "emailTuneMatch",
        JSON.stringify(res.usuario.correo)
      );
      localStorage.setItem(
        "sessionData",
        JSON.stringify(res) // Guarda todos los datos de la respuesta en localStorage
      );
      setEmailTuneMatch(res.usuario.correo);

      dispatch(updateAll(res.usuario));
    })
    .catch(handleLoginError);
};

export const handleSignOut = async () => {
  window.google.accounts.id.disableAutoSelect(); // google queda como variable global si se pone el script en el index principal
  window.google.accounts.id.revoke(
    localStorage.getItem("emailTuneMatch"),
    localStorage.getItem("sessionData"),
    (done) => {
      if (done) {
        console.log("Revocación exitosa");
        localStorage.removeItem("emailTuneMatch"); // colocar el correo en el storage puede no ser seguro, pero se necesita durante la sesion para poder cerrar
        localStorage.removeItem("sessionData"); // colocar el correo en el storage puede no ser seguro, pero se necesita durante la sesion para poder cerrar
        window.location.reload(); // en caso de que haya quedado algo en el navegador se elimina, pero no es tan necesario, podría funcionar sin reload()
      } else {
        console.error("Error al revocar el consentimiento");
      }
    }
  );
};

/**
 Botoncito que cierra sesión que se puede colocar en NavBar
{
  emailTuneMatch && (
    <button id="g_id_signout" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
 */
