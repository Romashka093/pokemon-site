import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchPokemonNames } from './pokemon_names_operations';

const data = createReducer(null, {
  [fetchPokemonNames.fulfilled]: (_, { payload }) => {
    return {
      results: payload?.results?.map(elem => elem.name),
    };
  },
});

const loading = createReducer(false, {
  [fetchPokemonNames.pending]: () => true,
  [fetchPokemonNames.fulfilled]: () => false,
  [fetchPokemonNames.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPokemonNames.rejected]: (_, { payload }) => payload,
  [fetchPokemonNames.pending]: () => null,
});

export default combineReducers({
  data,
  loading,
  error,
});
