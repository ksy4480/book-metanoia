// 상세 페이지 코드
export default function BookDetailPage({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      
      <div style={{ backgroundColor: '#f5f5f5', height: '400px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
         <span style={{ fontSize: '24px', color: '#888' }}>{params.id}번 책의 거대한 표지 이미지</span>
      </div>

      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        {params.id}번 도서의 상세 제목
      </h1>
      
      <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', wordBreak: 'keep-all' }}>
        이곳은 {params.id}번 책에 대한 자세한 소개 글이 들어가는 공간입니다. 출판사 서평, 저자 소개, 그리고 서점(교보문고, 예스24 등)으로 이동하는 판매처 링크 버튼들을 이 아래에 배치할 수 있습니다.
      </p>

    </main>
  );
}