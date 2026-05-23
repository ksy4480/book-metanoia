import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      


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