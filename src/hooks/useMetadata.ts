import { baseUrl } from '@/constants';
import { Metadata } from 'next';

type Params = {
  title: string;
  description: string;
  urlPath: string;
  image?: string;
};

export const useMetadata = (params: Params) => {
  const { title, description, urlPath, image = '/icon.svg' } = params;

  return {
    title: `${title} | Thunmov`,
    description,
    alternates: {
      canonical: baseUrl + urlPath,
    },
    openGraph: {
      title: `${title} | Thunmov`,
      description,
      url: baseUrl + urlPath,
      type: 'website',
      siteName: 'Thunmov',
      locale: 'vi-VN',
      images: image,
    },
    twitter: {
      title: `${title} | Thunmov`,
      description,
      card: 'summary',
      images: image,
    },
    referrer: 'origin',
    robots: {
      follow: true,
      index: true,
    },
    metadataBase: new URL(baseUrl),
  } as Metadata;
};
