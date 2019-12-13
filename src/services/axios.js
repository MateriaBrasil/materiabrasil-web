import axios from 'axios';
import headers from 'auth/headers';
import afterResponse from 'auth/afterResponse';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: headers(),
  afterResponse: afterResponse,
});
