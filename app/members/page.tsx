import { microCMSLoader } from '@/libs/loader';
import { getMembersList } from '@/libs/microcms';
import Image from 'next/image';
import styles from './page.module.css';

type Props = {
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export const runtime = 'edge';

export default async function Page({ searchParams }: Props) {
  const data = await getMembersList({
    draftKey: searchParams.dk,
  });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                loader={microCMSLoader}
                src={member.image?.url as string}
                alt=""
                width={member.image?.width}
                height={member.image?.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
      {/* <div className={styles.footer}>
        <h2 className={styles.message}>We are hiring</h2>
        <p>私たちは共にチャレンジする仲間を募集しています。</p>
        <ButtonLink href="">採用情報へ</ButtonLink>
      </div> */}
    </div>
  );
}
