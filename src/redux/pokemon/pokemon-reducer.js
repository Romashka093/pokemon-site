import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchPokemonList,
  fetchPokemonItem,
  fetchFoundPokemonList,
  fetchPokemonListByType,
} from './pokemon-operations';

const data = createReducer(null, {
  [fetchPokemonList.fulfilled]: (_, { payload }) => payload,
  [fetchFoundPokemonList.fulfilled]: (_, { payload }) => payload,
  [fetchPokemonListByType.fulfilled]: (_, { payload }) => {
    return {
      results: payload.pokemon.map(elem => elem.pokemon),
    };
  },
});
const item = createReducer(null, {
  [fetchPokemonItem.fulfilled]: (_, { payload }) => payload,
});

const count = createReducer(null, {
  [fetchPokemonList.fulfilled]: (_, { payload }) => payload?.count,
});

const loading = createReducer(false, {
  [fetchPokemonList.pending]: () => true,
  [fetchPokemonList.fulfilled]: () => false,
  [fetchPokemonList.rejected]: () => false,
  [fetchFoundPokemonList.pending]: () => true,
  [fetchFoundPokemonList.fulfilled]: () => false,
  [fetchFoundPokemonList.rejected]: () => false,
  [fetchPokemonItem.pending]: () => true,
  [fetchPokemonItem.fulfilled]: () => false,
  [fetchPokemonItem.rejected]: () => false,
  [fetchPokemonListByType.pending]: () => true,
  [fetchPokemonListByType.fulfilled]: () => false,
  [fetchPokemonListByType.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPokemonList.rejected]: (_, { payload }) => payload,
  [fetchPokemonList.pending]: () => null,
  [fetchFoundPokemonList.rejected]: (_, { payload }) => payload,
  [fetchFoundPokemonList.pending]: () => null,
  [fetchPokemonItem.rejected]: (_, { payload }) => payload,
  [fetchPokemonItem.pending]: () => null,
  [fetchPokemonListByType.rejected]: (_, { payload }) => payload,
  [fetchPokemonListByType.pending]: () => null,
});

export default combineReducers({
  data,
  item,
  count,
  loading,
  error,
});
