/* eslint-disable react-hooks/rules-of-hooks */
import MovieCarousel from '@/components/movies/MovieCarousel';
import { useFetch } from '@/hooks';

export default async function Home() {
  const movies = await Promise.all([
    useFetch('/danh-sach/phim-moi'),
    // useFetch('/the-loai/hanh-dong'),
    // useFetch('/danh-sach/hoat-hinh'),
    // useFetch('/the-loai/kinh-di'),
    // useFetch('/quoc-gia/thai-lan'),
  ]);
  return (
    <>
      <MovieCarousel movies={movies?.[0]?.data} />
    </>
  );
}
