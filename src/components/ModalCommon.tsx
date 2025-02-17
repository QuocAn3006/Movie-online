/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useDebounce, useFetch } from '@/hooks';
import { Movie, Movies } from '@/types';
import { Modal, Spinner } from 'flowbite-react';
import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import { ImageContainer } from './Image';
import { baseCdnImage, baseUrlProxy } from '@/constants';
import { useRouter } from 'next/router';
import { useMFindMovieStore } from '@/stores/useFindMovies';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalCommon: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [searchResult, setSearchResult] = useState<Movies>();
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceSearch = useDebounce(searchValue, 700);
  const [loading, setLoading] = useState<boolean>(false);
  const { setSearchQuery, setMovies, searchQuery } = useMFindMovieStore();
  const handleSearch = async (value: string) => {
    try {
      setLoading(true);
      const data = await useFetch(`/tim-kiem?keyword=${value}`);
      setSearchResult(data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickSeeMore = async (e: SyntheticEvent) => {
    e.preventDefault();
    setSearchQuery(debounceSearch);
    setMovies(searchResult?.items || []);
  };

  console.log(searchQuery);

  useEffect(() => {
    if (debounceSearch) {
      handleSearch(debounceSearch);
    }
  }, [debounceSearch]);

  return (
    <Modal show={isOpen} onClose={() => onClose()}>
      <Modal.Header className='bg-[#020103] border-none' />
      <div className='bg-[#020103] min-h-[90px] border-0 shadow-lg flex flex-col w-full text-white outline-none focus:outline-none'>
        <div className='relative px-4 flex-auto'>
          <input
            type='text'
            className='rounded-2xl bg-transparent w-full px-2 py-3 outline-none focus:border-primary focus:ring-0'
            placeholder='Phim, diễn viên, thể loại...'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {loading && <Spinner aria-label='Default status example' className='absolute top-4 right-7 w-4 h-4' />}
        </div>
        {searchResult?.items?.length && (
          <div className='w-full h-fit'>
            <ul className='list-none w-full h-fit overflow-y-auto p-4'>
              {searchResult.items
                .slice(0, 5)
                .sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime())
                .map((item: Movie) => (
                  <li key={item._id} className='p-3 hover:bg-gray-800 cursor-pointer'>
                    <div className='flex items-center justify-between'>
                      <div className='flex gap-3 items-center'>
                        <div className='relative min-w-[50px] min-h-[50px]'>
                          <ImageContainer
                            src={`${baseCdnImage}/uploads/movies/${item.poster_url}`}
                            alt='item'
                            width={50}
                            height={50}
                            className='absolute inset-0 w-full h-full object-cover'
                          />
                        </div>
                        <div>
                          <h3 className='text-sm font-medium'>{item.name}</h3>
                          <p className='text-xs text-gray-500'>{item.year}</p>
                        </div>
                      </div>
                      <svg
                        className='w-6 h-6 text-primary'
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
                          d='M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2'
                        />
                      </svg>
                    </div>
                  </li>
                ))}
              <li
                onClick={handleClickSeeMore}
                className='flex justify-center items-center hover:text-primary cursor-pointer p-2'
              >
                Xem thêm
              </li>
            </ul>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalCommon;
