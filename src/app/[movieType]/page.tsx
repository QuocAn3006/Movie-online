/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import MovieCard from '@/components/movies/MovieCard';
import { Pagination } from '@/components/Pagination';
import { useMFindMovieStore } from '@/stores/useFindMovies';
import { Movie } from '@/types';

const MovieType = () => {
  const { movies } = useMFindMovieStore();
  const srcImage = movies?.seoOnPage?.og_image || [];

  return (
    <main className='mx-auto max-w-7xl px-5'>
      <h2 className='mt-24 capitalize text-3xl font-bold mb-6 md:text-4xl'>{movies?.titlePage}</h2>
      {movies?.items?.length ? (
        <>
          <div className='grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14'>
            {movies?.items?.map((movie: Movie, index) => (
              <MovieCard item={movie} key={movie._id} srcImage={`/uploads/${srcImage[index]}`} />
            ))}
          </div>
          <Pagination {...movies?.params?.pagination} />
        </>
      ) : (
        <h5 className='font-bold text-2xl text-center min-h-screen'>Không tìm thấy phim phù hợp</h5>
      )}
    </main>
  );
};

export default MovieType;
