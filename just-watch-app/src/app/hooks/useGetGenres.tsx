import { useEffect } from 'react';
import { useStore } from '../store/store';
import { getAllGenres } from '../api/api';

const useGetGenres = () => {
  const { allGenres, language, setAllGenres } = useStore();
  useEffect(() => {
    (async () => {
      const data = await getAllGenres();
      setAllGenres(data ?? []);
    })();
  }, [language]);
  return { allGenres };
};

export default useGetGenres;
