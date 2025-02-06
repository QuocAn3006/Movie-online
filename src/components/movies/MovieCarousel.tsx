/* eslint-disable react/jsx-no-undef */
'use client';
import { baseCdnImage } from '@/constants';
import { Movie, Movies } from '@/types';
import { Card } from 'flowbite-react';
import React from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageContainer } from '../Imgae';
import Link from 'next/link';

type MovieCarouselProps = {
  movies: Movies;
};
const MovieCarousel = ({ movies }: MovieCarouselProps) => {
  const newImages = movies?.seoOnPage?.og_image || [];
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {movies?.items?.map((item: Movie, index: number) => (
        <SwiperSlide key={item._id}>
          <div
            className='bg-cover min-h-screen w-full relative bg-center max-h-[800px] lg:min-h-0 lg:aspect-video bg-black'
            style={{ backgroundImage: `url(${baseCdnImage}${newImages[index] || item?.poster_url})` }}
          >
            <div className='absolute inset-0 bg-black/80 md:bg-black/90 flex items-center'>
              <div className='w-full max-w-7xl px-4 mx-auto flex items-center justify-between gap-8'>
                <div>
                  <h2 className='text-4xl lg:text-5xl font-extrabold leading-snug'>{item.name}</h2>
                  <h3 className='text-primary font-bold md:text-lg'>{item.origin_name}</h3>
                  <div className='font-medium flex flex-col gap-2.5 my-5 lg:my-10 lg:gap-5 lg:items-center lg:flex-row'>
                    <div className='flex items-center gap-2 text-xs font-bold'>
                      <span className='bg-white px-2.5 py-1 text-black'>{item.episode_current}</span>
                      <span className='border-2 border-white px-2.5 py-0.5'>{item.quality}</span>
                    </div>
                    <ul className='flex items-center gap-2'>
                      {item.category.slice(0, 2).map((g, idx, arr) => (
                        <Link href={`/genres/${g.slug}`} key={g.id} className='hover:text-primary'>
                          {g.name}
                          {idx + 1 !== arr.length ? ',' : ''}
                        </Link>
                      ))}
                    </ul>
                    <div className='flex items-center gap-5'>
                      <span className='flex items-center gap-2'>
                        <svg
                          aria-hidden='true'
                          role='img'
                          className='text-primary iconify iconify--bx'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z'
                          ></path>
                        </svg>

                        {item.year}
                      </span>
                      <span className='flex items-center gap-2'>
                        <svg
                          aria-hidden='true'
                          role='img'
                          className='text-primary iconify iconify--akar-icons'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                        >
                          <g
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                          >
                            <circle cx='12' cy='12' r='10'></circle>
                            <path d='m15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6'></path>
                          </g>
                        </svg>

                        {item.time.replace('undefined', '???')}
                      </span>
                      <span className='flex items-center gap-2'>
                        <svg
                          aria-hidden='true'
                          role='img'
                          className='text-primary iconify iconify--tdesign'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='M1 3h22v18H1zm2 2v14h18V5zm2 5a2 2 0 0 1 2-2h4v2H7v4h4v2H7a2 2 0 0 1-2-2zm8 0a2 2 0 0 1 2-2h4v2h-4v4h4v2h-4a2 2 0 0 1-2-2z'
                          ></path>
                        </svg>
                        {item.lang}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/movies/${item.slug}`}
                    className='border-2 gap-2 border-primary flex items-center px-8 py-4 rounded-full w-max hover:bg-primary duration-150 hover:text-black'
                  >
                    <svg
                      className='w-6 h-6'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z'
                        clipRule='evenodd'
                      />
                    </svg>

                    <span className='text-xs font-extrabold'>XEM NGAY</span>
                  </Link>
                </div>
                <ImageContainer
                  src={`${baseCdnImage}${newImages[index] || item.thumb_url}`}
                  alt={item.origin_name}
                  className='hidden aspect-[2/3] w-full max-w-[320px] rounded-lg border-[14px] border-primary md:block'
                  width={220}
                  height={480}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieCarousel;
