/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { movieTypes } from '@/constants';
import { Category, Movie, Movies } from '@/types';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ModalCommon = dynamic(() => import('./ModalCommon'), {
  ssr: false,
});

interface NavbarProps {
  genresData: { items: Category[] };
  countriesData: { items: Category[] };
}

type MobileSubMenu = 'movie' | 'genre' | 'country' | null;

const MobileMenu = ({ genres, countries }: { genres: Category[]; countries: Category[] }) => {
  const [menuType, setMenuType] = useState<MobileSubMenu>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : 'auto';
    if (!openMenu) setMenuType(null);
  }, [openMenu]);

  const handleOpenSubMenu = (type: MobileSubMenu) => {
    if (type === menuType) setMenuType(null);
    else setMenuType(type);
  };

  return (
    <>
      <button className='lg:hidden' onClick={() => setOpenMenu(true)}>
        <svg
          className='w-7 h-7'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='26'
          height='26'
          fill='none'
          viewBox='0 0 26 26'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M18 6H6m12 4H6m12 4H6m12 4H6'
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 z-40 duration-300 ${
          openMenu ? 'pointer-events-auto bg-black/90 overflow-y-auto overflow-x-hidden' : 'pointer-events-none'
        }`}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setOpenMenu(false);
        }}
      >
        <div
          className={`absolute min-h-screen right-0 w-full max-w-xs bg-zinc-950 font-bold text-xl duration-300 overflow-auto ${
            openMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <svg
            className='w-6 h-6 ml-auto cursor-pointer m-3'
            onClick={() => setOpenMenu(false)}
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
              d='M6 18 17.94 6M18 18 6.06 6'
            />
          </svg>

          <button
            className={`flex items-center w-full gap-0.5 p-2.5 ${menuType === 'movie' ? 'text-primary' : ''}`}
            onClick={() => handleOpenSubMenu('movie')}
          >
            Loại Phim
            <svg
              className={`w-6 h-6 duration-300 ${menuType === 'movie' ? 'rotate-90' : ''}`}
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
          <ul
            className={'grid grid-cols-2 gap-x-2.5 gap-y-1 font-normal text-base overflow-hidden px-2 duration-300'}
            style={{ maxHeight: menuType === 'movie' ? '50rem' : 0 }}
          >
            {movieTypes.slice(0, -1).map((type) => (
              <Link href={`/${type.path}`} key={type.path} onClick={() => setOpenMenu(false)}>
                {type.title}
              </Link>
            ))}
            <span />
            <span className='pb-2.5' />
          </ul>
          <button
            className={`flex items-center border-t w-full border-white/10 gap-0.5 p-2.5 ${
              menuType === 'genre' ? 'text-primary' : ''
            }`}
            onClick={() => handleOpenSubMenu('genre')}
          >
            Thể Loại
            <svg
              className={`w-6 h-6 duration-300 ${menuType === 'genre' ? 'rotate-90' : ''}`}
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
          <ul
            className={'grid grid-cols-2 gap-x-2.5 gap-y-1 font-normal text-base overflow-hidden px-2.5 duration-300'}
            style={{ maxHeight: menuType === 'genre' ? '50rem' : 0 }}
          >
            {genres.map((genre) => (
              <Link href={`/genres/${genre.slug}`} key={genre.slug} onClick={() => setOpenMenu(false)}>
                {genre.name}
              </Link>
            ))}
            <span />
            <span className='pb-2.5' />
          </ul>
          <button
            className={`flex items-center border-t w-full border-white/10 gap-0.5 p-2.5 ${
              menuType === 'country' ? 'text-primary' : ''
            }`}
            onClick={() => handleOpenSubMenu('country')}
          >
            Quốc Gia
            <svg
              className={`w-6 h-6 duration-300 ${menuType === 'country' ? 'rotate-90' : ''}`}
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
          <ul
            className={'grid grid-cols-2 gap-x-2.5 gap-y-1 font-normal text-base overflow-hidden px-2.5 duration-300'}
            style={{ maxHeight: menuType === 'country' ? '50rem' : 0 }}
          >
            {countries.map((country) => (
              <Link href={`/countries/${country.slug}`} key={country.slug} onClick={() => setOpenMenu(false)}>
                {country.name}
              </Link>
            ))}
            <span />
            <span className='mb-2.5' />
          </ul>
          <Link
            href='/tv-shows'
            className='flex items-center gap-2 p-2.5 border-t border-white/10'
            onClick={() => setOpenMenu(false)}
          >
            TV Shows
          </Link>
          <Link
            href='/upcoming'
            className='flex items-center gap-2 p-2.5 border-t border-white/10'
            onClick={() => setOpenMenu(false)}
          >
            Sắp Chiếu
          </Link>
        </div>
      </div>
    </>
  );
};

const Navbar = ({ genresData, countriesData }: NavbarProps) => {
  const [displayBgColor, setDisplayBgColor] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const newGenresData = genresData?.items?.filter((item) => item.slug !== 'phim-18');

  useEffect(() => {
    function checkPositionHandler() {
      if (window.scrollY == 0) setDisplayBgColor(false);
      else setDisplayBgColor(true);
    }
    checkPositionHandler();
    window.addEventListener('scroll', checkPositionHandler);
    return () => window.removeEventListener('scroll', checkPositionHandler);
  }, []);

  return (
    <header
      className={`${displayBgColor ? 'bg-black' : 'bg-transparent'} py-3 fixed top-0 inset-x-0 z-40 duration-300`}
    >
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-4'>
        <Link href='/' className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            aria-hidden='true'
            role='img'
            className='text-[#e4d804] iconify iconify--ant-design'
            width='40'
            height='40'
            viewBox='0 0 1024 1024'
          >
            <path
              fill='currentColor'
              d='M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7'
            ></path>
          </svg>
          <span className='text-lg font-semibold'>MovOnl</span>
        </Link>
        <div className='uppercase  font-bold text-sm items-center gap-12 hidden lg:flex'>
          <span className='relative group hover:text-primary cursor-pointer'>
            Loại phim
            <ul className='dropdown-menu grid-cols-2'>
              {movieTypes.slice(0, -1).map((t) => (
                <Link key={t.path} href={`/${t.path}`} className='hover:text-primary duration-100'>
                  {t.title}
                </Link>
              ))}
            </ul>
          </span>
          <span className='relative group hover:text-primary cursor-pointer'>
            Thể loại
            <ul className='dropdown-menu'>
              {newGenresData?.map((g: Category) => (
                <Link key={g.slug} href={`/genres/${g.slug}`} className='hover:text-primary duration-100'>
                  {g.name}
                </Link>
              ))}
            </ul>
          </span>
          <span className='relative group hover:text-primary cursor-pointer'>
            Quốc gia
            <ul className='dropdown-menu'>
              {countriesData?.items?.map((c: Category) => (
                <Link key={c.slug} href={`/countries/${c.slug}`} className='hover:text-primary duration-100'>
                  {c.name}
                </Link>
              ))}
            </ul>
          </span>
          <Link href='/tv-shows' className='hover:text-primary'>
            TV Shows
          </Link>
          <Link href='/upcoming' className='hover:text-primary'>
            Sắp chiếu
          </Link>
        </div>
        <div className='flex items-center gap-5'>
          <div className='relative flex items-center'>
            <abbr title='Tìm kiếm' className={`hover:text-primary cursor-pointer `} onClick={() => setOpenSearch(true)}>
              <svg
                className='w-6 h-6 '
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
                  strokeWidth='2'
                  d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
                />
              </svg>
            </abbr>
          </div>
          <Link href='/favourite' className='hover:text-primary p-2'>
            <abbr title='Yêu thích'>
              <svg
                className='w-6 h-6 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z' />
              </svg>
            </abbr>
          </Link>
          <MobileMenu genres={newGenresData || []} countries={countriesData?.items || []} />
          <ModalCommon isOpen={openSearch} onClose={() => setOpenSearch(false)} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
