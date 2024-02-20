import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nombre: "",
    correo: "",
    password: "",
    miGenero: "",
    fotos: [],
    bandas: [],
    generos: [],
    tuneMatch: [],
    ultimaPosicion: {},
    enBuscaDe: [],
    active: false,   
  }

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
});


// selectores
export const getNombre = (state) => state?.user?.nombre
export const getCorreo = (state) => state?.user?.correo
export const getPassword = (state) => state?.user?.password
export const getMiGenero = (state) => state?.user?.miGenero
export const getFotos = (state) => state?.user?.fotos
export const getBandas = (state) => state?.user?.bandas
export const getGeneros = (state) => state?.user?.generos
export const getTuneMatch = (state) => state?.user?.tuneMatch
export const getUltomaPosicion = (state) => state?.user?.ultomaPosicion
export const getEnBuscaDe = (state) => state?.user?.enBuscaDe
export const getActive = (state) => state?.user?.active


export const { startLoading, stopLoading } = loginSlice.actions

export default loginSlice.reducer