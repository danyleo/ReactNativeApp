import {configureStore} from '@reduxjs/toolkit';
import accountSlice from '../account/account-slice';
import venuesReducer from '../venues/venues-slice';

export const store = configureStore({
  reducer: {
    venues: venuesReducer,
    account: accountSlice,
  },
});
