import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* 1. 상단 메뉴바 (가로 정렬) */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 50px', 
        borderBottom: '1px solid #eaeaea' 
      }}>
        
        {/* 왼쪽 로고 영역 */}
        <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-1px' }}>
          <Link href="/" style={{ color: '#000', textDecoration: 'none' }}>
            북메타노이아
          </Link>
        </div>

        {/* 오른쪽 카테고리 메뉴 영역 */}
        <nav style={{ display: 'flex', gap: '40px', fontSize: '16px', fontWeight: '500' }}>
          <Link href="/about" style={{ color: '#333', textDecoration: 'none' }}>출판사 소개</Link>
          <Link href="/books" style={{ color: '#333', textDecoration: 'none' }}>책 소개</Link>
          <Link href="/contents/youtube" style={{ color: '#333', textDecoration: 'none' }}>콘텐츠</Link>
          <Link href="/proposal" style={{ color: '#333', textDecoration: 'none' }}>제안 및 문의</Link>
        </nav>

      </header>

      {/* 2. 메인 중앙 콘텐츠 영역 */}
      <main style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px' }}>
          생각의 전환과 혁신
        </h1>
        <p style={{ fontSize: '20px', color: '#666' }}>
          북메타노이아 출판사에 오신 것을 환영합니다.
        </p>
      </main>

    </div>
  );
}