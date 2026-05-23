import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '도서출판 메타노이아',
  description: '생각의 전환과 혁신을 이끄는 독립 출판사입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        
        {/* 🌟 공통 상단 메뉴바 (이제 모든 페이지에 항상 나타납니다!) */}
        <header style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px 5%', 
          borderBottom: '1px solid #eaeaea',
          gap: '15px',
          backgroundColor: '#ffffff'
        }}>
          {/* 왼쪽 로고 */}
          <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-1px', whiteSpace: 'nowrap' }}>
            <Link href="/" style={{ color: '#000', textDecoration: 'none' }}>
              북메타노이아
            </Link>
          </div>

          {/* 오른쪽 카테고리 메뉴 */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '15px', fontWeight: '500' }}>
            <Link href="/about" style={{ color: '#333', textDecoration: 'none', whiteSpace: 'nowrap' }}>출판사 소개</Link>
            <Link href="/books" style={{ color: '#333', textDecoration: 'none', whiteSpace: 'nowrap' }}>책 소개</Link>
            <Link href="/contents/youtube" style={{ color: '#333', textDecoration: 'none', whiteSpace: 'nowrap' }}>콘텐츠</Link>
            <Link href="/proposal" style={{ color: '#333', textDecoration: 'none', whiteSpace: 'nowrap' }}>제안 및 문의</Link>
          </nav>
        </header>

        {/* 🌟 각 페이지의 알맹이(메인화면, 책소개 등)가 쏙 들어가는 자리입니다 */}
        {children}

      </body>
    </html>
  )
}