import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'https://www.mcteaparty.fun/api/metamorph/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
});

export default $api;