import {
  FilterParams,
  Genre,
  MovieCreditsResponse,
  MovieDetailType,
  MovieResponseType,
  SearchResponseType,
  TopRatedMoviesResponseType,
} from '../types/types';
import { endpoints } from './endpoints';
import api from './instance';

export const getAllGenres = async (): Promise<Genre[]> => {
  try {
    const res = await api.get(endpoints.genres);
    return res.data.genres;
  } catch (error) {
    console.error('Get all genres', error);
    throw error;
  }
};

export const getTheLatestMovies = async (): Promise<MovieResponseType> => {
  try {
    const res = await api.get(endpoints.nowPlaying);
    return res.data;
  } catch (error) {
    console.error('Get the latest movies error', error);
    throw error;
  }
};

export const getTopRatedMovies =
  async (): Promise<TopRatedMoviesResponseType> => {
    try {
      const res = await api.get(endpoints.topRated);
      return res.data;
    } catch (error) {
      console.error('Get the latest movies error', error);
      throw error;
    }
  };

export const getNPopularMoviesByGenre = async (
  genreIds: number[] = [35]
): Promise<TopRatedMoviesResponseType> => {
  try {
    const res = await api.get(endpoints.movieByGenre, {
      params: { with_genres: genreIds },
    });
    return res.data;
  } catch (error) {
    console.error('Get popular movies by genre error', error);
    throw error;
  }
};

export const getFilteredPopularMovies = async (
  params: FilterParams = {}
): Promise<TopRatedMoviesResponseType> => {
  try {
    const res = await api.get(endpoints.movieByGenre, {
      params: {
        page: params.page || 1,
        with_genres: params.with_genres,
        without_genres: params.without_genres,
        'vote_average.gte': params['vote_average.gte'],
        'release_date.gte': params['release_date.gte'],
        'release_date.lte': params['release_date.lte'],
      },
    });
    return res.data;
  } catch (error) {
    console.error('Get filtered popular movies error', error);
    throw error;
  }
};

export const getMovieDetails = async (
  movieId: number
): Promise<MovieDetailType> => {
  try {
    const res = await api.get(`${endpoints.movieDetails}${movieId}`);
    return res.data;
  } catch (error) {
    console.error('Get movie details error', error);
    throw error;
  }
};

export const getMovieCasting = async (
  movieId: number
): Promise<MovieCreditsResponse> => {
  try {
    const res = await api.get(`${endpoints.movieDetails}${movieId}/credits`);
    return res.data;
  } catch (error) {
    console.error('Get movie cast list details error', error);
    throw error;
  }
};

export const getSearchData = async (
  query: string,
  page: number = 1
): Promise<SearchResponseType> => {
  try {
    const res = await api.get(endpoints.search, {
      params: { query: query, page: page },
    });
    return res.data;
  } catch (error) {
    console.error('Get search error', error);
    throw error;
  }
};
