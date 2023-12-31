import { microCMSLoader } from '@/libs/loader';
import { formatDate } from '@/libs/utils';
import Image from 'next/image';
import styles from './index.module.css';

type Props = {
  date: string;
};

export default function PublishedDate({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image loader={microCMSLoader} src="/clock.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  );
}
