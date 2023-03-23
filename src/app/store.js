import { configureStore } from '@reduxjs/toolkit';
import { loaderReducer } from '../store/loaderReducer';
import { modeReducer } from '../store/modeReducer';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    loader: loaderReducer,
  },
});
