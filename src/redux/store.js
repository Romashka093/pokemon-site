import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pocemonReducer from './pocemon/pocemon-reducer';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    pocemon: pocemonReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
