import ButtonLink from '@/components/ButtonLink';
import NewsList from '@/components/NewsList';
import { TOP_NEWS_LIMIT } from '@/constants';
import { getNewsList } from '@/libs/microcms';
import Image from 'next/image';
import styles from './page.module.css';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>アールシステム</h1>
          <p className={styles.description}>
            高品質なシステムを素早く開発・展開するアールシステムです。
          </p>
        </div>
        <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={3600} height={1200} />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Business</h2>
            <p className={styles.sectionTitleJa}>事業内容</p>
            <p className={styles.sectionDescription}>
              アールシステムは、ビジネスの課題を解決し、価値を創造するITソリューションを提供します。
              <br />
              私たちは、深いテクノロジーの知識と実践的な経験を活用し、お客様の要望に最適なソリューションを設計・実装します。
            </p>
            <ButtonLink href="">サービスページへ</ButtonLink>
          </div>
          <Image
            className={styles.businessImg}
            src="/img-business.png"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>About Us</h2>
              <p className={styles.sectionTitleJa}>私たちについて</p>
              <p className={styles.sectionDescription}>
                私たちのテクノロジー、あなたのビジョン。あなたのビジネスを次のレベルに引き上げます。
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>屋号</dt>
                <dd className={styles.infoDescription}>アールシステム</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>開業</dt>
                <dd className={styles.infoDescription}>2023年1月</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>代表者</dt>
                <dd className={styles.infoDescription}>栗本 龍一</dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
      {/* <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="">採用情報へ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section> */}
    </>
  );
}
