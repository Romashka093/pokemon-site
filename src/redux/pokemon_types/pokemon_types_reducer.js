import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchPokemonTypes } from './pokemon_types_operations';

const data = createReducer(null, {
  [fetchPokemonTypes.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchPokemonTypes.pending]: () => true,
  [fetchPokemonTypes.fulfilled]: () => false,
  [fetchPokemonTypes.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPokemonTypes.rejected]: (_, { payload }) => payload.message,
  [fetchPokemonTypes.pending]: () => null,
});

export default combineReducers({
  data,
  loading,
  error,
});
