import Hero from '@/components/Hero';
import Sheet from '@/components/Sheet';

export const metadata = {
  title: 'メンバー｜アールシステム',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
