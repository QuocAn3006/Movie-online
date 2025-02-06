// @ts-ignore
import { namespaceConfig } from 'fast-redux';

type FavoriteMoviesType = {
  favMovies: {
    slug: string;
    thumb_url: string;
    name: string;
  }[];
};

const DEFAULT_STATE: FavoriteMoviesType = {
  favMovies: [],
};

const { action, getState } = namespaceConfig('favMov', DEFAULT_STATE);

const getStoreState = (state: any): FavoriteMoviesType => getState(state);

export const getFavoritesMovie = (state: any): FavoriteMoviesType[] => getStoreState(state)?.favMovies as any;

export const addFavoriteMovie = action(
  'ADD_FAVORITE_MOVIE',
  (state: FavoriteMoviesType, data: FavoriteMoviesType[]) => {
    return { ...state, DEFAULT_STATE };
  }
);
