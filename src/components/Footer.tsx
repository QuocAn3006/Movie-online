'use client';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='pt-20'>
      <div className='max-w-7xl mx-auto pb-10'>
        <Link href='/'>
          <h1 className=' flex items-center text-2xl font-extrabold gap-2 select-none px-5'>
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
            MovOnl
          </h1>
        </Link>
        <span className='block h-0.5 bg-white/5 rounded my-8' />
        <div className='flex items-center justify-between flex-col md:flex-row gap-8 px-5'>
          <ul className='flex items-center flex-wrap gap-x-8 gap-y-2 text-xs font-semibold lg:gap-14'>
            <li className='hover:text-primary duration-150 cursor-pointer'>FAQ</li>
            <li className='hover:text-primary duration-150 cursor-pointer'>TRUNG TÂM TRỢ GIÚP</li>
            <li className='hover:text-primary duration-150 cursor-pointer'>ĐIỀU KHOẢN</li>
            <li className='hover:text-primary duration-150 cursor-pointer'>CHÍNH SÁCH</li>
          </ul>
          <ul className='flex items-center gap-x-2.5 text-xs font-semibold'>
            <Link
              href='https://github.com/QuocAn3006'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-black aspect-square p-2.5  duration-150'
            >
              <svg
                className='w-4 h-4 text-white hover:text-primary'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
            <Link
              href='https://www.facebook.com/profile.php?id=100027620832757'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-black aspect-square p-2.5  duration-150'
            >
              <svg
                className='w-4 h-4 text-white hover:text-primary'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
            <Link
              href='https://www.instagram.com/tranan498/'
              target='  '
              rel='noopener noreferrer'
              className='rounded-full bg-black aspect-square p-2.5  duration-150'
            >
              <svg
                className='w-4 h-4 text-white hover:text-primary'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  d='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </ul>
        </div>
      </div>
      <div className='bg-black pt-6 pb-8 px-5'>
        <p className='max-w-7xl mx-auto text-sm font-medium'>
          Copyright © {new Date().getFullYear()}. All Rights Reserved By <span className='text-primary'>MovOnl</span>
        </p>
      </div>
    </footer>
  );
};
