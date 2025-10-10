import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ActivityFilters {
  difficulty: string[];
  duration: string[];
  priceRange: [number, number];
  location: string[];
}

interface PriceRange {
  min: number;
  max: number;
}

interface FilterState {
  homestayLocation: string;
  activityFilters: ActivityFilters;
  priceRange: PriceRange;
  searchQuery: string;
}

interface FilterActions {
  setHomestayLocation: (location: string) => void;
  setActivityFilters: (filters: Partial<ActivityFilters>) => void;
  setPriceRange: (range: PriceRange) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
  resetHomestayFilters: () => void;
  resetActivityFilters: () => void;
}

type FilterStore = FilterState & FilterActions;

const initialActivityFilters: ActivityFilters = {
  difficulty: [],
  duration: [],
  priceRange: [0, 1000],
  location: []
};

const initialPriceRange: PriceRange = {
  min: 0,
  max: 1000
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      // Initial state
      homestayLocation: 'all',
      activityFilters: initialActivityFilters,
      priceRange: initialPriceRange,
      searchQuery: '',

      // Actions
      setHomestayLocation: (location) => {
        set({ homestayLocation: location });
      },

      setActivityFilters: (filters) => {
        set((state) => ({
          activityFilters: { ...state.activityFilters, ...filters }
        }));
      },

      setPriceRange: (range) => {
        set({ priceRange: range });
      },

      setSearchQuery: (query) => {
        set({ searchQuery: query });
      },

      resetFilters: () => {
        set({
          homestayLocation: 'all',
          activityFilters: initialActivityFilters,
          priceRange: initialPriceRange,
          searchQuery: ''
        });
      },

      resetHomestayFilters: () => {
        set({ homestayLocation: 'all' });
      },

      resetActivityFilters: () => {
        set({ activityFilters: initialActivityFilters });
      }
    }),
    {
      name: 'dokpa-filters',
      version: 1
    }
  )
);
