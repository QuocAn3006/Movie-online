export type Category = {
  name: string;
  id: string;
  slug: string;
};

export type MovieType = {
  title: string;
  path: string;
};

type Pagination = {
  currentPage: number;
  pageRanges: number;
  totalItems: number;
  totalItemsPerPage: number;
};

type MovieParams = {
  pagination: Pagination;
};

export type Movies = {
  titlePage: string;
  seoOnPage: {
    og_image: string[];
  };
  params: MovieParams;
  items: Movie[];
};

export type Movie = {
  category: Category[];
  chieurap: boolean;
  country: Category[];
  episode_current: string;
  lang: string;
  modified: {
    time: Date;
  };
  name: string;
  origin_name: string;
  poster_url: string;
  quality: string;
  slug: string;
  sub_docquyen: boolean;
  thumb_url: string;
  time: string;
  type: string;
  year: number;
  _id: string;
};
