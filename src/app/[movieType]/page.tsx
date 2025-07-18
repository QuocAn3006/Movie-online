/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import MovieCard from '@/components/movies/MovieCard';
import { Pagination } from '@/components/Pagination';
import { useFetch } from '@/hooks';
import { useMFindMovieStore } from '@/stores/useFindMovies';
import { Movie, Movies } from '@/types';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MovieType = () => {
  const { movies } = useMFindMovieStore();
  const pathName = usePathname();
  const [movieData, setMovieData] = useState<Movies | undefined>();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (pathName?.includes('tim-kiem')) {
          setMovieData(movies);
        } else {
          const data = await useFetch(`/danh-sach${pathName}`);
          setMovieData(data?.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [pathName, movies]);
  const srcImage = movieData?.seoOnPage?.og_image || [];

  return (
    <main className='mx-auto max-w-7xl px-5'>
      <h2 className='mt-24 capitalize text-3xl font-bold mb-6 md:text-4xl'>{movieData?.titlePage}</h2>
      {movieData?.items?.length ? (
        <>
          <div className='grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14'>
            {movies?.items?.map((movie: Movie, index) => (
              <MovieCard
                item={movie}
                key={movie._id}
                srcImage={pathName?.includes('tim-kiem') ? `/uploads/${srcImage[index]}` : `${srcImage[index]}`}
              />
            ))}
          </div>
          <Pagination {...movieData?.params?.pagination} />
        </>
      ) : (
        <h5 className='font-bold text-2xl text-center min-h-screen'>Không tìm thấy phim phù hợp</h5>
      )}
    </main>
  );
};

export default MovieType;
