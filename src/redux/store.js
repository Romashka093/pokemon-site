import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import pokemonReducer from './pokemon/pokemon-reducer';
import typesReducer from './pokemon_types/pokemon_types_reducer';
import namesReducer from './pokemon_names/pokemon_names_reducer';

const countPersistConfig = {
  key: 'count',
  storage,
  whitelist: ['count'],
};

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  reducer: {
    pokemon: persistReducer(countPersistConfig, pokemonReducer),
    types: typesReducer,
    names: namesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
export const reduxStore = { store, persistor };
