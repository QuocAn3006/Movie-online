import { MovieType } from '@/types';
import { CustomFlowbiteTheme } from 'flowbite-react';

export const baseUrl = process.env.NEXT_PUBLIC_API as string;
export const baseCdnImage = process.env.NEXT_PUBLIC_DOMAIN_CDN_IMAGE as string;
export const baseCdnBackupImage = process.env.NEXT_PUBLIC_DOMAIN_BACKUP_CDN_IMAGE as string;

export const movieTypes: MovieType[] = [
  { title: 'Phim mới', path: 'phim-moi' },
  { title: 'Phim bộ', path: 'phim-bo' },
  { title: 'Phim lẻ', path: 'phim-le' },
  { title: 'Phim Vietsub', path: 'phim-vietsub' },
  { title: 'Phim thuyết minh', path: 'phim-thuyet-minh' },
  { title: 'Phim lồng tiếng', path: 'phim-long-tieng' },
  { title: 'Phim hoàn thành', path: 'phim-bo-hoan-thanh' },
  { title: 'Phim đang chiếu', path: 'phim-bo-dang-chieu' },
  { title: 'Phim độc quyền', path: 'subteam' },
  { title: 'Phim hoạt hình', path: 'hoat-hinh' },
  { title: 'Tìm kiếm', path: 'tim-kiem' },
];
