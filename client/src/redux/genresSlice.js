import { createSlice } from "@reduxjs/toolkit";


const initialState = {

   genres:[],

};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
    reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },

    updateAllGenres: (state, action) => {
      return  {
        ...state, ...action.payload
      }
    },
  },
});

// selectores
export const getGenres = (state) => state?.genres?.genres;
export const getUpdateGenres = (state) => state?.genres //trae toodo lo anterior

// actions
export const {
 
  setGenres,
  updateAllGenres
  
} = genresSlice.actions;

export default genresSlice.reducer;