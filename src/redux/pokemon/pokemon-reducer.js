import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchPokemonList, fetchPokemonItem } from './pokemon-operations';

const data = createReducer(null, {
  [fetchPokemonList.fulfilled]: (_, { payload }) => payload,
  //   [fetchFoundPokemonList.fulfilled]: (_, { payload }) => payload,
});
const item = createReducer(null, {
  [fetchPokemonItem.fulfilled]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [fetchPokemonList.pending]: () => true,
  [fetchPokemonList.fulfilled]: () => false,
  [fetchPokemonList.rejected]: () => false,
  //   [fetchFoundPokemonList.pending]: () => true,
  //   [fetchFoundPokemonList.fulfilled]: () => false,
  //   [fetchFoundPokemonList.rejected]: () => false,
  [fetchPokemonItem.pending]: () => true,
  [fetchPokemonItem.fulfilled]: () => false,
  [fetchPokemonItem.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPokemonList.rejected]: (_, { payload }) => payload.message,
  [fetchPokemonList.pending]: () => null,
  //   [fetchFoundPokemonList.rejected]: (_, { payload }) => payload,
  //   [fetchFoundPokemonList.pending]: () => null,
  [fetchPokemonItem.rejected]: (_, { payload }) => payload.message,
  [fetchPokemonItem.pending]: () => null,
});

export default combineReducers({
  data,
  item,
  loading,
  error,
});
