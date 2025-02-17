'use client';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type FavoriteMovie = {
  slug: string;
  thumb_url: string;
  name: string;
};

export type FavoriteMoviesState = {
  favMovies: FavoriteMovie[];
  addFavoriteMovie: (movie: FavoriteMovie) => void;
  removeFavoriteMovie: (slug: string) => void;
};

export const useFavouriteMovies = create<FavoriteMoviesState>()(
  persist(
    (set) => ({
      favMovies: [],
      addFavoriteMovie: (movie) =>
        set((state) => ({
          favMovies: state.favMovies.some((fav) => fav.slug === movie.slug)
            ? state.favMovies
            : [...state.favMovies, movie],
        })),
      removeFavoriteMovie: (slug) =>
        set((state) => ({
          favMovies: state.favMovies.filter((movie) => movie.slug !== slug),
        })),
    }),
    {
      name: 'favorite-movies',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
