import axios from 'axios';
import { CitiesResponse } from '../types/City';

const api = axios.create({
  baseURL: '/',
});

export const fetchCities = async (): Promise<CitiesResponse> => {
  const response = await api.get<CitiesResponse>('cities.json');
  return response.data;
}
