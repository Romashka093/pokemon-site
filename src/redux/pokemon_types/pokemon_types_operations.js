import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
export const fetchPokemonTypes = createAsyncThunk(
  'types/fetchAll',
  async (_, api) => {
    const response = await axios.get(`/type`);
    try {
      return api.fulfillWithValue(response.data);
    } catch (error) {
      return api.rejectWithValue(error);
    }
  },
);
