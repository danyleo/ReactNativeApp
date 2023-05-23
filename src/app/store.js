import {configureStore} from '@reduxjs/toolkit';
import venuesReducer from '../venues/venues-slice';

export const store = configureStore({
  reducer: {
    venues: venuesReducer,
  },
});
