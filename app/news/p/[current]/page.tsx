import ArticleList from '@/components/NewsList';
import Pagination from '@/components/Pagination';
import { NEWS_LIST_LIMIT } from '@/constants';
import { getNewsList } from '@/libs/microcms';

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = 60;

export const runtime = 'edge';

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath="/news" />
    </>
  );
}
