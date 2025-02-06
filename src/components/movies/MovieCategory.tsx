'use client';
import { Movie, Movies } from '@/types';
import Link from 'next/link';
import React, { FC, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';

type MovieCategoryProps = {
  movies: Movies;
  title?: string;
  pathAll?: string;
  slidesPerView?: number;
};
const MovieCategory: FC<MovieCategoryProps> = (props) => {
  const { movies, pathAll, slidesPerView = 4, title } = props;
  const swiperRef = useRef<SwiperCore>();
  const srcImage = movies?.seoOnPage?.og_image || [];
  return (
    <div className='max-w-7xl mx-auto px-5'>
      <div className='flex items-center justify-between mb-6 mt-12'>
        <h3 className='text-2xl md:text-3xl font-extrabold'>{title}</h3>
        <div className='flex items-center rounded-full border-2 border-white/10 text-white'>
          <button className='px-3 py-1.5' onClick={() => swiperRef.current?.slidePrev()}>
            <svg
              className='w-6 h-6 text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m15 19-7-7 7-7'
              />
            </svg>
          </button>
          <span className='w-0.5 h-6 rounded bg-white/10' />
          <button className='px-3 py-1.5' onClick={() => swiperRef.current?.slideNext()}>
            <svg
              className='w-6 h-6 text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m9 5 7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            spaceBetween: 15,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          640: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            spaceBetween: 25,
            slidesPerView,
            slidesPerGroup: slidesPerView,
          },
        }}
      >
        {movies?.items?.map((item, index) => (
          <SwiperSlide key={item._id}>
            <MovieCard item={item} srcImage={srcImage[index]} />
          </SwiperSlide>
        ))}
      </Swiper>

      {pathAll && (
        <Link
          href={pathAll}
          className='flex items-center px-5 py-2 border-2 border-primary w-max mx-auto mt-8 hover:bg-primary duration-150 hover:text-black font-bold'
        >
          Xem Tất Cả
          <svg
            className='w-6 h-6 text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m9 5 7 7-7 7' />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default MovieCategory;
