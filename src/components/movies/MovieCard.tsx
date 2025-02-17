import { baseCdnImage } from '@/constants';
import { Movie } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { ImageContainer } from '../Image';

type MovieCardProps = {
  item: Movie;
  srcImage?: string;
};
const MovieCard: FC<MovieCardProps> = ({ item, srcImage }) => {
  return (
    <div className='select-none group'>
      <div className='relative rounded-lg overflow-hidden'>
        {/* {isFavourite && (
              <Icon
                icon="ph:heart-fill"
                className="absolute top-2.5 right-2.5 z-20"
                color="red"
                height={28}
              />
            )} */}
        <span className='absolute top-2.5 left-2.5 rounded z-20 px-2.5 py-0.5 text-xs text-black bg-primary font-bold'>
          {item.episode_current.replace(/Hoàn Tất/i, '') || `(0/1)`}
        </span>
        <ImageContainer src={`${baseCdnImage}${srcImage}`} alt={item.origin_name} className='aspect-[2/3]' />
        <Link href={`/movies/${item.slug}`} className='absolute inset-0 z-10 md:hidden' />
        <div className='absolute inset-0 bg-black/60 none flex-col items-center justify-center gap-4 text-sm font-bold opacity-0 group-hover:opacity-100 duration-300 text-center hidden md:flex'>
          <button
            // className={`rounded-full w-36 px-6 py-2.5 -translate-y-3 group-hover:translate-y-0 duration-300 ${
            //   isFavourite ? "bg-[#f00]" : "bg-primary text-black"
            // }`}
            className='rounded-full w-36 px-6 py-2.5 -translate-y-3 group-hover:translate-y-0 duration-300 bg-primary text-black'
            // onClick={() => handleFavourite(isFavourite ? "REMOVE" : "ADD")}
          >
            {/* {isFavourite ? "Bỏ Thích" : "Yêu Thích"} */}
            Yêu Thích
          </button>
          <Link
            href={`/movies/${item.slug}`}
            className='rounded-full border-2 bg- border-primary w-36 px-6 py-2.5 bg-black/70 translate-y-3 group-hover:translate-y-0 duration-300 hover:bg-primary hover:text-black'
          >
            Chi Tiết
          </Link>
        </div>
      </div>
      <h3 className='flex items-center justify-between my-1.5 gap-5 md:my-3'>
        <Link href={`/movies/${item.slug}`} className='hover:text-primary duration-150 text-lg font-bold truncate'>
          <abbr title={item.name} className='no-underline'>
            {item.name}
          </abbr>
        </Link>
        <span className='text-primary text-sm font-medium hidden md:block'>{item.year}</span>
      </h3>
      {item.quality && (
        <div className='flex flex-col gap-1.5 justify-between text-xs md:items-center md:flex-row'>
          <div className='flex items-center gap-2'>
            <span className='border-2 border-white px-2 py-0.5'>
              <strong className='text-primary'>{item.quality}</strong>
            </span>
            <span className='bg-white px-2 py-1'>
              <strong className='text-black'>{item.lang}</strong>
            </span>
          </div>
          <span className='flex items-center gap-1 truncate'>
            <svg
              className='w-4 h-4 text-white'
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
                d='M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>

            {item.time.replace('undefined', '???') || 'Đang cập nhật'}
          </span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
