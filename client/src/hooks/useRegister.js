import Swal from "sweetalert2";
import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from "axios";
import { 
    login,
    setId,
    setNombre,
    setCorreo,
    setActive,
 } from '../redux/authSlice'

import { API_URL_REGISTER } from '../config/api'

const useRegister = () => {
    
    const [showPassword, setShowPassword] = useState(false)
    const [repeatShowPassword, setRepeatShowPassword] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const handleRegister = async (data) => {
        const {name, email, password, repeatPassword, checkbox = false } = data;

        console.log(data)

        if(!checkbox){
            Swal.fire("Error", "Acepte los terminos y condiciones", "error");
            return
        }

        if (!name) {
            Swal.fire("Error", "El nombre es necesario", "error");
            return
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.match(emailRegex)) {
            Swal.fire("Error", "Ingrese una dirección de correo electrónico válida", "error");
        return;
        }
        
        //eslint-disable-next-line
        // const passwordRegex = /^(?=.*[A-Za-z0-9])(?=.*[.*+\/]).{6,}$/;
        // if (!password.match(passwordRegex)) { 
        //     Swal.fire(
        //         "Error",
        //         "La contraseña debe contener al menos 6 dígitos y un carácter especial (., *, +)",
        //         "error"
        //      );
        //     return;
        // }
              
        if (!password) { 
            Swal.fire(
                "Error",
                "La contraseña debe contener al menos 6 dígitos y un carácter especial (., *, +)",
                "error"
             );
            return;
        }

        if (password !== repeatPassword) { 
            Swal.fire(
                "Error",
                "Las contraseñas no coincide",
                "error"
             );
            return;
        }


        await axios
              .post(API_URL_REGISTER, {
                   nombre: name,
                   correo: email,
                   password,
               })
               .then(async({data}) => {
                   const { id, nombre, correo } = data.usuario;
                   console.log(data)
                             
                   if( id ) {
                    dispatch(login())
                    dispatch(setId(id))
                    dispatch(setNombre(nombre))
                    dispatch(setCorreo(correo))
                    dispatch(setActive(true))
                    navigate("/register22")
                   }        
               })
               .catch(async(error) => {

                   if(error.response.status === 400){
                      Swal.fire("Error", "Usuario existente", "error")
                      return
                    }

                   Swal.fire("Error", "Ocurrió un error durante el registro", "error")
                   
               })            

    }
    
    return {
        handleRegister,
        showPassword,
        setShowPassword,
        repeatShowPassword, 
        setRepeatShowPassword
    }  

} 

export default useRegister