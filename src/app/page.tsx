/* eslint-disable react-hooks/rules-of-hooks */
import MovieCarousel from '@/components/movies/MovieCarousel';
import MovieCategory from '@/components/movies/MovieCategory';
import { useFetch } from '@/hooks';

export default async function Home() {
  const movies = await Promise.all([
    useFetch('/danh-sach/phim-moi'),
    useFetch('/the-loai/hanh-dong'),
    useFetch('/danh-sach/hoat-hinh'),
    useFetch('/the-loai/kinh-di'),
    useFetch('/quoc-gia/thai-lan'),
  ]);
  return (
    <>
      <MovieCarousel movies={movies?.[0]?.data} />
      <MovieCategory title='Phim Hành Động' movies={movies?.[1]?.data} pathAll='/genres/hanh-dong' />
      <MovieCategory title='Phim Hoạt Hình' movies={movies?.[2]?.data} pathAll='hoat-hinh' />
      <MovieCategory movies={movies?.[3].data} title='Phim Kinh Dị' pathAll='/genres/kinh-di' />
      <MovieCategory movies={movies?.[4].data} title='Phim Thái Lan' pathAll='/countries/thai-lan' />
    </>
  );
}
