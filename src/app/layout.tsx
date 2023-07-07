import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const runtime = 'edge';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>서비스 종료 안내</title>
        <meta property="og:title" content="ℂ𝕠𝕣𝕖 𝕂𝕖𝕖𝕡𝕖𝕣 서버 종료 안내" />
        <meta
          property="og:description"
          content="코어키퍼 서버를 이용해주시는 고객 여러분들께 감사 드리며, 서버 종료와 관련해 안내 말씀 드립니다."
        />
        <meta property="og:url" content="https://core-keeper.rudbeckiaz.com" />
        <meta property="og:image" content="https://core-keeper.rudbeckiaz.com/background.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
