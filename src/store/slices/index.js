import {combineReducers} from '@reduxjs/toolkit';
import dogs from './dogSlice';

export const rootReducer = combineReducers({
  dogs,
});
