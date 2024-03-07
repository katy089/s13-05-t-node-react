import { createSlice } from "@reduxjs/toolkit";


const initialState = {

  bands: [],

};

export const bandsSlice = createSlice({
  name: "bands",
  initialState,
  reducers: {
    setBands: (state, action) => {
      state.bands = action.payload;
    },
    updateAllBands: (state, action) => {
      return {
        ...state, ...action.payload
      }
    },
  },
});

// selectores
export const getBands = (state) => state?.bands?.bands;
export const getUpdateBands = (state) => state?.bands //trae toodo lo anterior

// actions
export const {

  setBands,
  updateAllBands

} = bandsSlice.actions;

export default bandsSlice.reducer;
