'use client';
import { Movies } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface MovieSearchState {
  searchQuery: string;
  movies: Movies | undefined;
  setSearchQuery: (query: string) => void;
  setMovies: (movies: Movies) => void;
  clearMovies: () => void;
}

export const useMFindMovieStore = create<MovieSearchState>()(
  persist(
    (set) => ({
      searchQuery: '',
      movies: undefined,
      setSearchQuery: (query) => set({ searchQuery: query }),
      setMovies: (movies) => set({ movies }),
      clearMovies: () => set({ movies: undefined }),
    }),
    {
      name: 'search-movies',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
