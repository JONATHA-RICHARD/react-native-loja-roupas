import { configureStore, createSlice } from "@reduxjs/toolkit";

const roupasSlice = createSlice({
  name: "roupas",
  initialState: {
    lista: []
  },
  reducers: {
    setRoupas: (state, action) => {
      state.lista = action.payload;
    }
  }
});

export const { setRoupas } = roupasSlice.actions;

export const store = configureStore({
  reducer: {
    roupas: roupasSlice.reducer
  }
});