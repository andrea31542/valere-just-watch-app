'use client';
import { useEffect } from 'react';
import { useStore } from '../store/store';
import { getAllGenres } from '../api/api';

const useGetGenres = () => {
  const { allGenres, setAllGenres } = useStore();
  useEffect(() => {
    (async () => {
      const data = await getAllGenres();
      setAllGenres(data ?? []);
    })();
  }, []);
  return { allGenres };
};

export default useGetGenres;
