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

export type Episode = {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
};

export type MovieDetail = {
  created: {
    time: Date;
  };
  modified: {
    time: Date;
  };
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  content: string;
  type: string;
  status: string;
  thumb_url: string;
  poster_url: string;
  is_copyright: boolean;
  sub_docquyen: boolean;
  chieurap: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  notify: string;
  showtimes: string;
  year: number;
  view: number;
  actor: string[];
  director: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  }[];
  country: {
    id: string;
    name: string;
    slug: string;
  }[];
  episodes: {
    server_name: string;
    server_data: Episode[];
  }[];
};
