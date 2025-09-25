/* eslint-disable react-hooks/rules-of-hooks */
import { MoviePagination } from "@/components/movies/MoviePagination";
import { Pagination } from "@/components/Pagination";
import { useFetch, useMetadata } from "@/hooks";
import { notFound } from "next/navigation";

type MoviesGenreContext = {
  params: Promise<{ type: string }>;
  searchParams: Promise<{
    page: string;
  }>;
};

export default async function MoviesGenre(context: MoviesGenreContext) {
  const params = await context.params;
  const searchParams = await context.searchParams;
  const { type } = params;
  const { page = 1 } = searchParams;

  const { data } = await useFetch(`/the-loai/${type}?page=${page}`);
  if (!data) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-5">
      <MoviePagination movies={data.items} title={data.titlePage} />
      <Pagination {...data.params.pagination} />
    </main>
  );
}

export async function generateMetadata(context: MoviesGenreContext) {
  const params = await context.params;
  const searchParams = await context.searchParams;
  const { type } = params;
  const { page } = searchParams;

  const { data } = await useFetch(`/the-loai/${type}?page=${page}`);
  if (!data) {
    return useMetadata({
      title: "Not Found",
      description: "The page is not found.",
      urlPath: `/genres/${type}`,
    });
  }

  const genre = data.titlePage.replace("Phim", "");
  return useMetadata({
    title: `Phim ${genre}`,
    description: `Kho phim ${genre} chọn lọc chất lượng cao hay nhất. Được cập nhật liên tục để phục vụ các mọt phim.`,
    urlPath: `/genres/${type}`,
  });
}
