import { configureStore } from '@reduxjs/toolkit';
import { modeReducer } from '../store/modeReducer';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
