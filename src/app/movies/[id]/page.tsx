/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react-hooks/rules-of-hooks */
import MovieCategory from '@/components/movies/MovieCategory';
import MovieDetails from '@/components/movies/MovieDetails';
import { useFetch, useMetadata } from '@/hooks';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export const revalidate = 3600;

type MovieContext = {
  params: { id: string };
};

export default async function Movie(context: MovieContext) {
  const {
    params: { id },
  } = context;

  const [{ data }, recentUpdateMovies] = await Promise.all([useFetch(`/phim/${id}`), useFetch('/danh-sach/phim-moi')]);
  if (!data.item) return notFound();

  return (
    <>
      <MovieDetails movie={data?.item} />
      <div id='disqus_thread' className='max-w-5xl mx-auto my-16 px-5'></div>
      <MovieCategory movies={recentUpdateMovies?.data} title='Mới cập nhật' slidesPerView={5} />
    </>
  );
}

export async function generateMetadata({ params }: MovieContext): Promise<Metadata> {
  const { id } = params;
  const { data } = await useFetch(`/phim/${id}`);
  if (!data) {
    return useMetadata({
      title: 'Not Found',
      description: 'The page is not found.',
      urlPath: `/movies/${id}`,
    });
  }

  const { name, origin_name, year, quality, lang, content, thumb_url } = data.item;

  return useMetadata({
    title: `${name} - ${origin_name} (${year}) [${quality} - ${lang}]`,
    description: content,
    urlPath: `/movies/${id}`,
    image: thumb_url,
  });
}
