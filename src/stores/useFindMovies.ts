'use client';
import { Movie } from '@/types';
import { create } from 'zustand';

interface MovieSearchState {
  searchQuery: string;
  movies: Movie[];
  setSearchQuery: (query: string) => void;
  setMovies: (movies: Movie[]) => void;
  clearMovies: () => void;
}

export const useMFindMovieStore = create<MovieSearchState>((set) => ({
  searchQuery: '',
  movies: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  setMovies: (movies) => set({ movies }),
  clearMovies: () => set({ movies: [] }),
}));
