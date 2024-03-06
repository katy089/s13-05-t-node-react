import axios  from "axios";
import Swal from "sweetalert2";
import { API_URL_UPDATE } from "../config/api";
import { getId, setNombre } from "../redux/authSlice"
import { useDispatch, useSelector } from 'react-redux'

const useName = () => {

    const id = useSelector(getId)
    const dispatch = useDispatch()

    const handleRename = async(data) => {

        const {name} = data
        console.log("Soy el Id de name " + id)
        
        console.log("Soy un Nombre en useName " + name)

        if (!name) {
            Swal.fire("Error", "El nombre es necesario", "error");
            return;
        }

        try {      
            const nombre = name
    
            const response = await axios.put(`${API_URL_UPDATE}/${id}`, { nombre })
            const data = response.data
            console.log(data)
            
            if (data) {
                console.log(data.nombre);
                dispatch(setNombre(data.nombre))
            } else {
                console.error("name no se actualizo");
            }
            
        } catch (error) {
                if (error.response && error.response.status === 400) {
                    Swal.fire("Error", "Ocurrió un error", "error");
                } else {
                    console.error("Se produjo un error al obtener datos:", error);
                }
                
        }

    }


    return { 
        handleRename
    }

}


export default useName