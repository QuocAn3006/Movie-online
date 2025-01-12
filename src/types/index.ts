export type Category = {
  name: string;
  id: string;
  slug: string;
};

export type MovieType = {
  title: string;
  path: string;
};

export type Movies = {
  seoOnPage: {
    og_image: string[];
  };
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
