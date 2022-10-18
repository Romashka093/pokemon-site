import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pokemonReducer from './pokemon/pokemon-reducer';
import typesReducer from './pokemon_types/pokemon_types_reducer';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    pokemon: pokemonReducer,
    types: typesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
