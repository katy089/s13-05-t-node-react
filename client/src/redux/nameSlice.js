import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "",
};

export const namesSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.nombre = action.payload;
    },
  },
});

// selectores
export const getName = (state) => state?.name.nombre;

// actions
export const { setName } = namesSlice.actions;

export default namesSlice.reducer;
