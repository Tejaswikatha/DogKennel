import {createSlice} from '@reduxjs/toolkit';
import {dogs} from '../constants/dogsList.json'

const initialState = {
  dogs,
};

const dogSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    addDog(state, action) {
      state.dogs = [...state.dogs, {...action.payload}];
    },
    deleteDog(state, action) {
      state.dogs = [
        ...state.dogs.slice(0, action.payload.index),
        ...state.dogs.slice(action.payload.index + 1),
      ];
    },
    updateDog(state, action) {
      state.dogs = [
        ...state.dogs.slice(0, action.payload.index),
        {...action.payload.dogData},
        ...state.dogs.slice(action.payload.index + 1),
      ];
    },
  },
});

export const {addDog, deleteDog, updateDog} = dogSlice.actions;

export default dogSlice.reducer;