import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Languages } from '../context/LanguageContext';
import { Genre, MovieCreditsResponse, MovieDetailType } from '../types/types';
import { setItem } from '../api/localStorage';

type StoreType = {
  favourites: number[];
  setFavourites: (favouriteId: number) => void;
  removeFavourites: (favouriteId: number) => void;
  language: Languages;
  setLanguage: (_: Languages) => void;
  allGenres: Genre[];
  setAllGenres: (_: Genre[]) => void;
  movieDetails: MovieDetailType;
  setMovieDetails: (_: MovieDetailType) => void;
  movieDetailsId: number | undefined;
  setMovieDetailsId: (_: number | undefined) => void;
  casting: MovieCreditsResponse | undefined;
  setCasting: (_: MovieCreditsResponse) => void;
};

export const useStore = create<StoreType>()(
  persist(
    (set) => ({
      favourites: [],

      setFavourites: (favouriteId: number) => {
        set((state) => ({
          favourites: [...state.favourites, favouriteId],
        }));
      },
      removeFavourites: (favouriteId: number) => {
        set((state) => ({
          favourites: state.favourites.filter((id) => id !== favouriteId),
        }));
      },
      language: 'hr-HR',
      setLanguage: (language: Languages) => {
        set(() => {
          setItem('language', language);
          return { language };
        });
      },
      allGenres: [],
      setAllGenres: (allGenres: Genre[]) => {
        set(() => {
          return { allGenres };
        });
      },
      movieDetails: {},
      setMovieDetails: (movieDetails: MovieDetailType) => {
        set(() => {
          return { movieDetails };
        });
      },
      movieDetailsId: undefined,
      setMovieDetailsId: (movieDetailsId) => {
        set(() => {
          return { movieDetailsId };
        });
      },
      casting: undefined,
      setCasting: (casting: MovieCreditsResponse) => {
        set(() => {
          return { casting };
        });
      },
    }),
    {
      name: 'storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
