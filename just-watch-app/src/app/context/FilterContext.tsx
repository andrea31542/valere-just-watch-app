'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

type FilterStateType = {
  minYear: number;
  maxYear: number;
  selectedGenres: number[];
  withoutGenres: number[];
  score: number;
};

const initialFilterState: FilterStateType = {
  minYear: 1900,
  maxYear: new Date().getFullYear(),
  selectedGenres: [],
  withoutGenres: [],
  score: 0,
};
type UpdateFilterValue<FilterType extends keyof FilterStateType> =
  FilterStateType[FilterType];

interface FilterContextType {
  filters: FilterStateType;
  updateFilter: <FilterType extends keyof FilterStateType>(
    name: FilterType,
    value: UpdateFilterValue<FilterType>
  ) => void;
}

export const FilterContext = createContext<FilterContextType>({
  filters: {
    minYear: 0,
    maxYear: 0,
    selectedGenres: [],
    withoutGenres: [],
    score: 0,
  },
  updateFilter: () => {},
});

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterStateType>(initialFilterState);

  const updateFilter = <FilterType extends keyof FilterStateType>(
    name: FilterType,
    value: UpdateFilterValue<FilterType>
  ) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('Incorrect useage');
  }
  return context;
};
