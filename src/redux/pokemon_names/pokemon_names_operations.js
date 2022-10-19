import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
export const fetchPokemonNames = createAsyncThunk(
  'names/fetchNames',
  async (cred, api) => {
    if (!cred) {
      return;
    }
    const response = await axios.get(`/pokemon?limit=${cred}`);
    try {
      return api.fulfillWithValue(response.data);
    } catch (error) {
      return api.rejectWithValue(error.message);
    }
  },
);
