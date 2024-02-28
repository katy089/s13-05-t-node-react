import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER_GENEROS, API_URL_UPDATE } from '../config/api'
import { useDispatch, useSelector } from 'react-redux'
import { getId, setGeneros } from "../redux/authSlice";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useGeneros = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector(getId)
    // const genres = useSelector(getSelectedGenre)

    let generos = []
    
    // Verificar si hay datos en localStorage para 'generos'
    const storedGeneros = localStorage.getItem('generos');

    // Si hay datos, usarlos; de lo contrario, inicializar con un array vacío
    generos = storedGeneros ? JSON.parse(storedGeneros) : [];


    const [dataBDD, setDataBDD] = useState(null)
    const [buttonGeneroStorege, setbuttonGeneroStorege] = useState(true)

    useEffect(()=>{
        const fetchData = async() =>{
            await axios
              .get(API_URL_REGISTER_GENEROS)
              .then(async({data}) => {
                console.log(data?.musicalGenres)
                setDataBDD(data?.musicalGenres)
              })
              .catch(async(error)=> {
                if(error.response.status === 400){
                   Swal.fire("Error", "Ocurrió un error", "error")
                   return
                }

              }) 
        }

        fetchData()
        
        
    },[])


    const handleGeneroClick = (genero) => {
        const arrayBefore = generos.length
        generos = generos.filter(item => item !== genero)
        const arrayCurrent = generos.length 
        if (arrayBefore === arrayCurrent) { generos = [...generos, genero]}

        // Guardar el array 'generos' en localStorage
        localStorage.setItem('generos', JSON.stringify(generos));
        console.log(generos)
    }; 


    const handleRegister23 = async() => {
        

        dispatch(setGeneros(generos)) 
        await axios
              .put(`${API_URL_UPDATE}/${id}`, { generos })
              .then(async({data}) =>{
                   console.log(data)
              })
              .catch(async(error)=> {
                if(error.response.status === 400){
                   Swal.fire("Error", "Ocurrió un error", "error")
                   return
                }

              }) 

        // Limpiar 'generos' en localStorage después de usarlos
        localStorage.removeItem('generos');
        setbuttonGeneroStorege(false)

        navigate("/register221");
    };





    return {
        dataBDD,
        handleGeneroClick,
        handleRegister23,
        buttonGeneroStorege
    }

}

export default useGeneros