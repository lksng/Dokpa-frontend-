import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  activities: number[];
  homestays: number[];
}

interface FavoritesActions {
  addFavorite: (type: 'activities' | 'homestays', id: number) => void;
  removeFavorite: (type: 'activities' | 'homestays', id: number) => void;
  toggleFavorite: (type: 'activities' | 'homestays', id: number) => void;
  isFavorite: (type: 'activities' | 'homestays', id: number) => boolean;
  clearFavorites: (type?: 'activities' | 'homestays') => void;
}

type FavoritesStore = FavoritesState & FavoritesActions;

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      // Initial state
      activities: [],
      homestays: [],

      // Actions
      addFavorite: (type, id) => {
        set((state) => ({
          [type]: [...state[type], id].filter((item, index, arr) => arr.indexOf(item) === index)
        }));
      },

      removeFavorite: (type, id) => {
        set((state) => ({
          [type]: state[type].filter((item) => item !== id)
        }));
      },

      toggleFavorite: (type, id) => {
        const { isFavorite, addFavorite, removeFavorite } = get();
        if (isFavorite(type, id)) {
          removeFavorite(type, id);
        } else {
          addFavorite(type, id);
        }
      },

      isFavorite: (type, id) => {
        return get()[type].includes(id);
      },

      clearFavorites: (type) => {
        if (type) {
          set({ [type]: [] });
        } else {
          set({ activities: [], homestays: [] });
        }
      }
    }),
    {
      name: 'dokpa-favorites',
      version: 1
    }
  )
);
