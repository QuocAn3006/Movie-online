'use client';
import { baseCdnImage, baseUrlProxy } from '@/constants';
import { Episode, MovieDetail } from '@/types';
import React, { useEffect, useRef, useState } from 'react';
import { ImageContainer } from '../Image';
import Link from 'next/link';
import { useFavouriteMovies } from '@/stores/useFavouriteMovies';
import ShareButton from './button/ShareButton';
import ModalCommon from '../ModalCommon';

type ServerType = 'art-player' | 'anym' | 'hlsplayer';

const MovieDetails = ({ movie }: { movie: MovieDetail }) => {
  const { favMovies, removeFavoriteMovie, addFavoriteMovie } = useFavouriteMovies();
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | undefined>();
  const [openTrailer, setOpenTrailer] = useState<boolean>(false);
  const [videoTrailerId, setVideoTrailerId] = useState<string | undefined>(undefined);

  const isFavourite = favMovies.some((item: any) => item?.slug === movie?.slug);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [serverType, setServerType] = useState<ServerType>('art-player');

  const handleAddFavorite = () => {
    isFavourite
      ? removeFavoriteMovie(movie?.slug)
      : addFavoriteMovie({ name: movie?.name, slug: movie?.slug, thumb_url: movie?.thumb_url });
  };

  useEffect(() => {
    if (!['Tập 0', 'Trailer'].includes(movie.episode_current) && movie.episodes[0].server_data[0].name) {
      setSelectedEpisode(movie.episodes[0].server_data[0]);
    }
  }, [movie]);

  useEffect(() => {
    if (!iframeRef.current) return;
    iframeRef.current.src += '';
  }, [serverType]);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${baseUrlProxy + baseCdnImage + '/uploads/movies/' + movie.poster_url})` }}
        className='bg-cover w-full aspect-video relative bg-center lg:max-h-[800px]'
      >
        <div className='inset-0 bg-black/90 px-4 pb-10 pt-24 flex items-center lg:absolute'>
          <div className='w-full max-w-7xl mx-auto flex flex-col items-center gap-8 md:flex-row'>
            <ImageContainer
              src={`${baseCdnImage}/uploads/movies/${movie.thumb_url}`}
              alt={movie.name}
              className='aspect-[2/3] rounded w-full max-w-[300px]'
            />
            <div className='w-full'>
              <h2 className='text-4xl font-extrabold lg:text-5xl'>{movie.name}</h2>
              <span className='text-primary font-bold'>{movie.origin_name}</span>
              <div className='font-medium flex flex-col gap-5 my-4 lg:flex-row lg:items-center'>
                <div className='flex items-center gap-2 text-xs font-bold'>
                  <span className='bg-white px-2.5 py-1 text-black'>{movie.episode_current}</span>
                  <span className='border-2 border-white px-2.5 py-0.5'>{movie.quality}</span>
                </div>
                <ul className='flex items-center flex-wrap gap-x-2'>
                  {movie.category.map((g, idx) => (
                    <Link href={`/genres/${g.slug}`} key={g.id} className='hover:text-primary'>
                      {g.name}
                      {idx + 1 !== movie.category.length ? ',' : ''}
                    </Link>
                  ))}
                </ul>
              </div>
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
                  {movie.year}
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
                    <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
                      <circle cx='12' cy='12' r='10'></circle>
                      <path d='m15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6'></path>
                    </g>
                  </svg>
                  {movie.time.replace('undefined', '???') || 'Đang cập nhật'}
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
                  {movie.lang}
                </span>
              </div>
              <div className='flex items-center gap-5'>
                <span className='flex items-center gap-2'>
                  <svg
                    fill='#e4d804'
                    width={16}
                    height={16}
                    viewBox='-2 -2 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMinYMin'
                    className='jam jam-movie'
                  >
                    <path d='M6 15v3h8v-7H6v4zm-2-2v-2H2V9h2V7H2v6h2zm0 2H2v1a2 2 0 0 0 2 2v-3zm14-2V7h-2v2h2v2h-2v2h2zm0 2h-2v3a2 2 0 0 0 2-2v-1zm-4-8V2H6v7h8V7zm4-2V4a2 2 0 0 0-2-2v3h2zM4 5V2a2 2 0 0 0-2 2v1h2zm0-5h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z' />
                  </svg>
                  {movie.episode_current === 'Full' ? '1' : movie.episode_current.match(/\d+/) ?? 0} /{' '}
                  {movie.episode_total === 'Full' ? '1' : movie.episode_total}
                </span>
                <div className='flex items-center gap-2 my-2'>
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
                  <ul className='flex items-center gap-2'>
                    {movie.country.map((c, idx) => (
                      <Link href={`/countries/${c.slug}`} key={c.id} className='hover:text-primary'>
                        {c.name}
                        {idx + 1 !== movie.country.length ? ',' : ''}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: movie.content }}
                className='text-sm max-h-80 overflow-auto movie-content'
              />

              <div className='border border-white/5 bg-white/5 px-4 py-4 flex items-center w-max rounded-lg mt-8 gap-1.5 md:gap-5 md:px-7'>
                <ShareButton />
                <span className='h-12 w-0.5 bg-white/10 md:block' />
                <div className='flex items-center gap-3 text-sm font-bold'>
                  <button
                    className='rounded-full bg-primary text-black px-8 py-3 disabled:bg-zinc-600 disabled:hover:bg-zinc-600 disabled:text-white'
                    disabled={!movie.trailer_url}
                    onClick={() => {
                      if (movie.trailer_url) {
                        setOpenTrailer(true);
                        setVideoTrailerId(movie.trailer_url.split('v=')[1]);
                      }
                    }}
                  >
                    Trailer
                  </button>
                  <button
                    className={`${
                      isFavourite
                        ? 'bg-[#f00] border-[#f00]'
                        : 'bg-black/70 border-primary hover:bg-primary hover:text-black'
                    } flex items-center gap-2 rounded-full border-2 px-5 py-2.5 duration-300`}
                    onClick={() => handleAddFavorite()}
                  >
                    {isFavourite ? 'Bỏ thích' : 'Yêu thích'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedEpisode && (
        <div className='mx-auto max-w-7xl'>
          <div className='text-sm px-5'>
            {movie?.episodes?.map((server) => (
              <ul key={server.server_name}>
                <p className='text-base font-bold mb-4 mt-8'>{server.server_name}</p>
                <li
                  className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12 text-center gap-2'
                  key={server.server_name}
                >
                  {server.server_data.map((ep) => (
                    <button
                      onClick={() => {
                        setSelectedEpisode(ep);
                        iframeRef.current?.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }}
                      key={ep.slug}
                      className={`
                    ${selectedEpisode?.link_embed === ep.link_embed ? 'bg-primary text-black' : 'bg-white/5'}
                     rounded hover:bg-primary duration-200 py-1 hover:text-black`}
                    >
                      {ep.name}
                    </button>
                  ))}
                </li>
              </ul>
            ))}
          </div>
          <div className='max-w-5xl mx-auto mt-16'>
            <div className='flex items-center justify-center gap-2'>
              <button
                className={`rounded px-4 py-0.5 ${serverType === 'art-player' ? 'bg-blue-500' : 'bg-white/5'}`}
                onClick={() => setServerType('art-player')}
              >
                Server 1
              </button>
              <button
                className={`rounded px-4 py-0.5 ${serverType === 'anym' ? 'bg-blue-500' : 'bg-white/5'}`}
                onClick={() => setServerType('anym')}
              >
                Server 2
              </button>
              <button
                className={`rounded px-4 py-0.5 ${serverType === 'hlsplayer' ? 'bg-blue-500' : 'bg-white/5'}`}
                onClick={() => setServerType('hlsplayer')}
              >
                Server 3
              </button>
            </div>
            <p className='text-red-500 text-center text-sm mt-2 mb-5'>Vui lòng đổi server nếu không xem được</p>
            <iframe
              ref={iframeRef}
              src={
                serverType === 'art-player'
                  ? selectedEpisode.link_embed
                  : serverType === 'anym'
                  ? `https://anym3u8player.com/tv/p.php?url=${selectedEpisode.link_m3u8}`
                  : `https://www.hlsplayer.org/play?url=${encodeURIComponent(selectedEpisode.link_m3u8)}`
              }
              className='w-full aspect-video overflow-hidden bg-stone-900 rounded-md'
              scrolling='no'
              sandbox={serverType === 'art-player' ? undefined : 'allow-scripts'}
              allowFullScreen
              referrerPolicy='no-referrer'
            />
          </div>
        </div>
      )}
      <ModalCommon
        isOpen={openTrailer}
        onClose={() => setOpenTrailer(false)}
        modalType='trailer'
        videoTrailerId={videoTrailerId}
      />
    </>
  );
};

export default MovieDetails;
