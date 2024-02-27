import { logout } from "../redux/authSlice";

export const revokeGoogleAccess = (dispatch, handleLogoutError) => {
  return new Promise((resolve, reject) => {
    window.google.accounts.id.disableAutoSelect();
    const emailTuneMatch = localStorage.getItem("emailTuneMatch");

    window.google.accounts.id.revoke(emailTuneMatch, (done) => {
      if (done) {
        console.log("Revocación exitosa");
        localStorage.removeItem("emailTuneMatch");
        dispatch(logout());
        resolve(); // Resuelve la promesa si la revocación fue exitosa
      } else {
        console.error("Error al revocar el consentimiento");
        handleLogoutError();
        reject(); // Rechaza la promesa si hubo un error
      }
    });
  });
};
