import {createSlice} from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    isSignInModalOpen: false,
  },
  reducers: {
    toggleSignModal(state) {
      state.isSignInModalOpen = !state.isSignInModalOpen;
    },
  },
});

export const {toggleSignModal} = accountSlice.actions;
export default accountSlice.reducer;
