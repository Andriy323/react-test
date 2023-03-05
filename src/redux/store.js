import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './contactSlice';
export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
