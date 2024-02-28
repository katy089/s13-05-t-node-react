import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER_BANDAS, API_URL_UPDATE } from '../config/api'
import { useDispatch, useSelector } from 'react-redux'
import { getId, setGeneros } from "../redux/authSlice";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useBands = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector(getId)

    let bands = []
    
    // Verificar si hay datos en localStorage para 'generos'
    const storedGeneros = localStorage.getItem('generos');

    // Si hay datos, usarlos; de lo contrario, inicializar con un array vacío
    bands = storedGeneros ? JSON.parse(storedGeneros) : [];


    const [dataBDD, setDataBDD] = useState(null)
    const [buttonGeneroStorege, setbuttonGeneroStorege] = useState(true)

    useEffect(()=>{
        const fetchData = async() =>{
            await axios
              .get(API_URL_REGISTER_BANDAS)
              .then(async({data}) => {
                console.log(data)
                setDataBDD(data?.bands)
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
        const arrayBefore = bands.length
        bands= bands.filter(item => item !== genero)
        const arrayCurrent = bands.length 
        if (arrayBefore === arrayCurrent) { bands = [...bands, genero]}

        // Guardar el array 'generos' en localStorage
        localStorage.setItem('generos', JSON.stringify(bands));
        console.log(bands)
    }; 


    const handleRegister23 = async() => {
        

        dispatch(setGeneros(bands)) 
        await axios
              .put(`${API_URL_UPDATE}/${id}`, { bands })
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

export default useBands