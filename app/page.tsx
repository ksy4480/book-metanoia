import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* 1. 상단 메뉴바 (반응형: 좁으면 자동으로 줄바꿈) */}
      <header style={{ 
        display: 'flex', 
        flexWrap: 'wrap', /* 화면이 좁으면 아랫줄로 넘깁니다 */
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px', /* 모바일을 위해 양옆 여백을 살짝 줄였습니다 */
        borderBottom: '1px solid #eaeaea',
        gap: '15px'
      }}>
        
        {/* 왼쪽 로고 영역 */}
        <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-1px', whiteSpace: 'nowrap' }}>
          <Link href="/" style={{ color: '#000', textDecoration: 'none' }}>
            북메타노이아
          </Link>
        </div>

        {/* 오른쪽 카테고리 메뉴 영역 */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '15px', fontWeight: '500' }}>
          {/* whiteSpace: 'nowrap'이 글자가 찌그러지는 것을 막아줍니다 */}
          <Link href="/about" style={{ color: '#333', textDecoration: 'none', whiteSpace: 'nowrap' }}>출판사 소개</Link>
          <Link href="/books" style={{ color: '#333', textDecoration: 'none', whiteSpace: 'nowrap' }}>책 소개</Link>
          <Link href="/contents/youtube" style={{ color: '#333', textDecoration: 'none', whiteSpace: 'nowrap' }}>콘텐츠</Link>
          <Link href="/proposal" style={{ color: '#333', textDecoration: 'none', whiteSpace: 'nowrap' }}>제안 및 문의</Link>
        </nav>

      </header>

      {/* 2. 메인 중앙 콘텐츠 영역 */}
      <main style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', wordBreak: 'keep-all' }}>
          생각의 전환과 혁신
        </h1>
        <p style={{ fontSize: '18px', color: '#666', wordBreak: 'keep-all' }}>
          북메타노이아 출판사에 오신 것을 환영합니다.
        </p>
      </main>

    </div>
  );
}