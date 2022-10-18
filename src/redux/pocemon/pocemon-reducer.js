import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchPokemonList } from './pocemon-operations';

const data = createReducer(null, {
  [fetchPokemonList.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchPokemonList.pending]: () => true,
  [fetchPokemonList.fulfilled]: () => false,
  [fetchPokemonList.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPokemonList.rejected]: (_, { payload }) => payload.message,
  [fetchPokemonList.pending]: () => null,
});

export default combineReducers({
  data,
  loading,
  error,
});
