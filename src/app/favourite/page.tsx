'use client';
import { ImageContainer } from '@/components/Image';
import { Pagination } from '@/components/Pagination';
import { baseCdnImage } from '@/constants';
import { useFavouriteMovies } from '@/stores/useFavouriteMovies';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';

const FavouritePages = () => {
  return (
    <Suspense>
      <Favourite />
    </Suspense>
  );
};

function Favourite() {
  const { favMovies, removeFavoriteMovie } = useFavouriteMovies();
  const searchParams = useSearchParams();

  let page = searchParams.get('page') || 1;
  page = Number.isNaN(+page) ? 1 : +page;

  useEffect(() => {
    const idx = (+page - 1) * ITEMS_PER_PAGE;
    favMovies.slice(idx, idx + ITEMS_PER_PAGE);
  }, [page, favMovies]);

  if (!favMovies.length) {
    return <h5 className='font-bold text-2xl text-center min-h-screen mt-24'>Chưa có phim yêu thích nào</h5>;
  }

  return (
    <div className='max-w-7xl mx-auto px-5 min-h-screen'>
      <h2 className='mt-24 capitalize text-3xl font-bold mb-6 md:text-4xl'>Yêu Thích</h2>
      <div className='grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14'>
        {favMovies.map((movie) => (
          <div key={movie.slug}>
            <div className='relative rounded-lg overflow-hidden group'>
              <svg
                className='w-6 h-6  absolute top-2.5 right-2.5 z-20 text-[#f00] cursor-pointer'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z' />
              </svg>
              <ImageContainer
                src={`${baseCdnImage}/uploads/movies/${movie.thumb_url}`}
                alt={movie.name}
                className='aspect-[2/3]'
              />
              <Link href={`/movies/${movie.slug}`} className='absolute inset-0 z-10 md:hidden' />
              <div className='absolute inset-0 bg-black/60 none flex-col items-center justify-center gap-4 text-sm font-bold opacity-0 group-hover:opacity-100 duration-300 text-center hidden md:flex'>
                <button
                  className='rounded-full w-36 px-6 py-2.5 -translate-y-3 group-hover:translate-y-0 duration-300 bg-[#f00]'
                  onClick={() => removeFavoriteMovie(movie.slug)}
                >
                  Bỏ Thích
                </button>
                <Link
                  href={`/movies/${movie.slug}`}
                  className='rounded-full border-2 bg- border-primary w-36 px-6 py-2.5 bg-black/70 translate-y-3 group-hover:translate-y-0 duration-300 hover:bg-primary hover:text-black'
                >
                  Chi Tiết
                </Link>
              </div>
            </div>
            <Link
              href={`/movies/${movie.slug}`}
              className='hover:text-primary duration-150 text-lg font-bold mt-1.5 block'
            >
              <abbr title={movie.name} className='no-underline line-clamp-2'>
                {movie.name}
              </abbr>
            </Link>
          </div>
        ))}
      </div>
      {favMovies?.length > 24 && (
        <Pagination currentPage={page} totalItems={favMovies.length} totalItemsPerPage={ITEMS_PER_PAGE} />
      )}
    </div>
  );
}
const ITEMS_PER_PAGE = 24;
export default FavouritePages;
