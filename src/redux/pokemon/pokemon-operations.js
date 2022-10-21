import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchAll',
  async (cred, api) => {
    const { startFrom, perPage } = cred;
    if (startFrom < 0) {
      return;
    }
    const response = await axios.get(
      `/pokemon?offset=${startFrom}&limit=${perPage}`,
    );
    try {
      return api.fulfillWithValue(response.data);
    } catch (error) {
      return api.rejectWithValue(error.message);
    }
  },
);
export const fetchPokemonItem = createAsyncThunk(
  'pokemon/fetchItem',
  async (id, api) => {
    const response = await axios.get(`/pokemon/${id}`);
    try {
      return api.fulfillWithValue(response.data);
    } catch (error) {
      return api.rejectWithValue(error.message);
    }
  },
);
export const fetchFoundPokemonList = createAsyncThunk(
  'pokemon/fetchFound',
  async (cred, api) => {
    const response = await axios.get(`/pokemon/${cred}`);
    try {
      return api.fulfillWithValue(response.data);
    } catch (error) {
      return api.rejectWithValue(error.message);
    }
  },
);

export const fetchPokemonListByType = createAsyncThunk(
  'pokemon/fetchByType',
  async (cred, api) => {
    const response = await axios.get(`/type/${cred}`);
    try {
      return api.fulfillWithValue(response.data);
    } catch (error) {
      return api.rejectWithValue(error.message);
    }
  },
);
