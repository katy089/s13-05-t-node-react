import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,

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
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.nombre = "";
      state.correo = "";
      state.password = "";
      state.miGenero = "";
      state.fotos = [];
      state.bandas = [];
      state.generos = [];
      state.tuneMatch = [];
      state.ultimaPosicion = {};
      state.enBuscaDe = [];
      state.active = false;
    },
    setNombre: (state, action) => {
      state.nombre = action.payload;
    },
    setCorreo: (state, action) => {
      state.correo = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setMiGenero: (state, action) => {
      state.miGenero = action.payload;
    },
    setFotos: (state, action) => {
      state.fotos = action.payload;
    },
    setBandas: (state, action) => {
      state.bandas = action.payload;
    },
    setGeneros: (state, action) => {
      state.generos = action.payload;
    },
    setTuneMatch: (state, action) => {
      state.tuneMatch = action.payload;
    },
    setUltimaPosicion: (state, action) => {
      state.ultimaPosicion = action.payload;
    },
    setEnBuscaDe: (state, action) => {
      state.enBuscaDe = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
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


export const { 
    login, 
    logout, 
    setNombre, 
    setCorreo, 
    setPassword, 
    setMiGenero, 
    setFotos, 
    setBandas, 
    setGeneros, 
    setTuneMatch, 
    setUltimaPosicion, 
    setEnBuscaDe, 
    setActive 
} = loginSlice.actions;


export default loginSlice.reducer