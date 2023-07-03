import { microCMSLoader } from '@/libs/loader';
import { Article } from '@/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';
import Category from '../Category';
import PublishedDate from '../Date';
import styles from './index.module.css';

type Props = {
  news: Article;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/news/${news.id}`} className={styles.link}>
        {news.thumbnail ? (
          <Image
            loader={microCMSLoader}
            src={news.thumbnail?.url}
            alt=""
            className={styles.image}
            width={news.thumbnail?.width}
            height={news.thumbnail?.height}
          />
        ) : (
          <Image
            loader={microCMSLoader}
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <dl className={styles.content}>
          <dt className={styles.title}>{news.title}</dt>
          <dd className={styles.meta}>
            <Category category={news.category} />
            <PublishedDate date={news.publishedAt || news.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
