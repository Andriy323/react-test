import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './currencySlice';

const store = configureStore({
  reducer: {
    currency: rootReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
export default store;
