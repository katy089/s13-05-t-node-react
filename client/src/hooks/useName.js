import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getId, setNombre } from "../redux/authSlice";
import { API_URL_UPDATE } from "../config/api";
import { setName } from "../redux/nameSlice";

const useName = () => {
  const dispatch = useDispatch();
  const id = useSelector(getId);

  const handleUpdateName = async (newName) => {
    try {
      const response = await axios.put(`${API_URL_UPDATE}/${id}`, {
        nombre: newName,
      });
      const data = response.data;
      console.log(data);

      if (data) {
        console.log(data.nombre, "hola soy");
        dispatch(setName(data.nombre));
        dispatch(setNombre(data.nombre));
      } else {
        console.error("Nombre no se actualizo");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire("Error", "Ocurrió un error", "error");
      } else {
        console.error("Se produjo un error al obtener datos:", error);
      }
    }
  };

  return {
    handleUpdateName,
  };
};

export default useName;