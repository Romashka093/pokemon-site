import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchAll',
  async cred => {
    console.log('cred', cred);
    const { startFrom, perPage } = cred;
    if (startFrom < 0) {
      return;
    }

    const response = await axios.get(
      `/pokemon?offset=${startFrom}&limit=${perPage}`,
    );
    // const response = await axios.get(`/pokemon`);
    console.log('data: ', response.data.results);
    return response.data;
  },
);
// https://pokeapi.co/api/v2/pokemon?offset=0&limit=10
