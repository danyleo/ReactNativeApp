import {createSlice} from '@reduxjs/toolkit';
import {VENUES} from '../app/config/mock-data';

const venuesSlice = createSlice({
  name: 'venues',
  initialState: {
    venues: VENUES,
  },
  reducers: {
    setVenues(state, action) {
      state.venues = action.payload;
    },
  },
});

export const {setVenues} = venuesSlice.actions;
export default venuesSlice.reducer;
