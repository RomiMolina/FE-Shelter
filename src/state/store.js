import { configureStore } from '@reduxjs/toolkit';
import pets from './features/pets/petSlice';
import petDetails from './features/details/detailSlice';
import errorSlice from './features/error/errorSlice';
import top from './features/top/topSlice';
import login from './features/login/loginSlice';

export const store = configureStore({
  reducer: { // unifica los reducer que cada estado en un solo lugar
    pets,
    petDetails,
    error: errorSlice,
    top,
    login
  }
});
