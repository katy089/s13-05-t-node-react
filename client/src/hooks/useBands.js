import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER_BANDAS, API_URL_UPDATE } from '../config/api'
import { useDispatch, useSelector } from 'react-redux'
import { getId, setBandas } from "../redux/authSlice";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useBands = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector(getId)

    let bands = []
    
    // Verificar si hay datos en localStorage para 'generos'
    const storedbands = localStorage.getItem('bands');

    // Si hay datos, usarlos; de lo contrario, inicializar con un array vacío
    bands = storedbands ? JSON.parse(storedbands) : [];


    const [bandBDD, setbandBDD] = useState(null)
    // const [buttonbandStorege, setbuttonbandStorege] = useState(true)

    useEffect(()=>{
        const fetchData = async() =>{
            await axios
              .get(API_URL_REGISTER_BANDAS)
              .then(async({data}) => {
                console.log(data?.bands)
                setbandBDD(data?.bands)
                
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


    const handleBandClick = (band) => {
        const arrayBefore = bands.length
        bands= bands.filter(item => item !== band)
        const arrayCurrent = bands.length 
        if (arrayBefore === arrayCurrent) { bands = [...bands, band]}

        // Guardar el array 'generos' en localStorage
        localStorage.setItem('bands', JSON.stringify(bands));
        console.log(bands)
    }; 


    const handleRegister = async() => {
        

        dispatch(setBandas(bands)) 
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
        localStorage.removeItem('bands');
        // setbuttonbandStorege(false)

        navigate("/register2");
    };

    return {
        bandBDD,
        handleBandClick,
        handleRegister      
    }

}

export default useBands