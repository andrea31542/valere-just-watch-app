import axios from 'axios';
import { getItem } from './localStorage';

const baseApiPath = `${process.env.NEXT_PUBLIC_BE_SERVICE_URL}`;

const commonHeader = {
  'Content-Type': 'application/json',
};

export const getAuthorizationHeader = () => {
  return {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_TMDB}`,
  };
};

const api = axios.create({
  baseURL: baseApiPath,
  headers: {
    ...commonHeader,
  },
});

api.interceptors.request.use(
  (config) => {
    const language = getItem('language');
    const authorization = getAuthorizationHeader().Authorization;
    if (authorization) {
      config.headers.Authorization = authorization;
    }
    if (language) {
      config.params = {
        ...config.params,
        language,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
