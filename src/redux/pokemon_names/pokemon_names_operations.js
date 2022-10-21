import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = 'https://pokeapi.co/api/v2';
export const fetchPokemonNames = createAsyncThunk(
  'names/fetchNames',
  async (_, api) => {
    const { pokemon } = api.getState();
    const { count } = pokemon;
    if (count < 0 || count === null) {
      return;
    }

    const response = await axios.get(`/pokemon?limit=${count}`);
    try {
      return api.fulfillWithValue(response.data);
    } catch (error) {
      return api.rejectWithValue(error.message);
    }
  },
);
