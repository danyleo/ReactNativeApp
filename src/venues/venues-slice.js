import {createSlice} from '@reduxjs/toolkit';

const venuesSlice = createSlice({
  name: 'venues',
  initialState: {
    venues: [],
  },
  reducers: {
    setVenues(state, action) {
      state.venues = action.payload;
    },
  },
});

export const {setVenues} = venuesSlice.actions;
export default venuesSlice.reducer;
