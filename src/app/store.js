import { configureStore } from '@reduxjs/toolkit';
import { loaderReducer } from '../store/loaderReducer';
import { loadPageReducer } from '../store/loadPageReducer';
import { modeReducer } from '../store/modeReducer';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    loader: loaderReducer,
    load: loadPageReducer,
  },
});
