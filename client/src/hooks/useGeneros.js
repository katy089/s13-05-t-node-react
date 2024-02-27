import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER_GENEROS } from '../config/api'
// import { useDispatch, useSelector } from 'react-redux'
// import { getId, setId } from "../redux/authSlice";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useGeneros = () => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const userGetId = useSelector(getId)

    let generos = []

    const [dataBDD, setDataBDD] = useState(null)

    useEffect(()=>{
        const fetchData = async() =>{
            await axios
              .get(API_URL_REGISTER_GENEROS)
              .then(async({data}) => {
                console.log(data)
  
                setDataBDD(data?.musicalGenres)
                console.log(dataBDD)
                

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
        generos =generos.filter(item => item !== genero)
        const arrayCurrent = generos.length 
        if (arrayBefore === arrayCurrent) { generos = [...generos, genero]}
        console.log(generos)
    }; 

     

    const handleRegister23 = async() => {
        console.log(generos)

        // dispatch(setId()) 
        // await axios
        //       .post(`${API_URL_REGISTER_GENEROS}/${userGetId}`, 
        //       { 
        //         generos 
        //       })
            //   .then(async({data})) => {

            //   }


        
        navigate("/register2");
    };




    return {
        dataBDD,
        handleGeneroClick,
        handleRegister23
    }

}

export default useGeneros