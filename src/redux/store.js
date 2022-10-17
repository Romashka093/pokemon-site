import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    pocemon: {},
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
