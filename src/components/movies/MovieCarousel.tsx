/* eslint-disable react/jsx-no-undef */
'use client';
import { baseCdnImage } from '@/constants';
import { Movie, Movies } from '@/types';
import { Card } from 'flowbite-react';
import React from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageContainer } from '../Imgae';

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
                    {/* <ul className='flex items-center gap-2'>
                      {item.category.slice(0, 2).map((g, idx, arr) => (
                        <Link href={`/genres/${g.slug}`} key={g.id} className='hover:text-primary'>
                          {g.name}
                          {idx + 1 !== arr.length ? ',' : ''}
                        </Link>
                      ))}
                    </ul>
                    <div className='flex items-center gap-5'>
                      <span className='flex items-center gap-2'>
                        <Icon icon='bx:calendar' className='text-primary' height={16} />
                        {item.year}
                      </span>
                      <span className='flex items-center gap-2'>
                        <Icon icon='akar-icons:clock' className='text-primary' height={16} />
                        {item.time.replace('undefined', '???')}
                      </span>
                      <span className='flex items-center gap-2'>
                        <Icon icon='tdesign:subtitle' className='text-primary' height={16} />
                        {item.lang}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/movies/${item.slug}`}
                    className='border-2 gap-2 border-primary flex items-center px-8 py-4 rounded-full w-max hover:bg-primary duration-150 hover:text-black'
                  >
                    <Icon icon='ion:play' height={18} />
                    <span className='text-xs font-extrabold'>XEM NGAY</span>
                  </Link> */}
                  </div>
                  <ImageContainer
                    src={`${baseCdnImage}${newImages[index] || item.thumb_url}`}
                    alt={item.origin_name}
                    className='hidden aspect-[2/3] w-full max-w-[320px] rounded-lg border-[14px] border-primary md:block'
                    width={220}
                    height={480}
                  />
                  <div>hello</div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieCarousel;
