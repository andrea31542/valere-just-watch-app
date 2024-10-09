import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Languages } from '../context/LanguageContext';
import { Genre } from '../types/types';

type StoreType = {
  favourites: number[];
  setFavourites: (favouriteId: number) => void;
  removeFavourites: (favouriteId: number) => void;
  language: Languages;
  setLanguage: (_: Languages) => void;
  allGenres: Genre[];
  setAllGenres: (_: Genre[]) => void;
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
          return { language };
        });
      },
      allGenres: [],
      setAllGenres: (allGenres: Genre[]) => {
        set(() => {
          return { allGenres };
        });
      },
    }),
    {
      name: 'storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
