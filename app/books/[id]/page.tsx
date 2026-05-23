import Link from 'next/link';

// 💡 상세 페이지용 12권의 완벽한 데이터입니다. (에러 방지)
const booksData = [
  {
    id: "1", title: "마이스터 에크하르트의 중세 고지 독일어 작품집 4-1,2", author: "마이스터 에크하르트", translator: "이부현", publisher: "북메타노이아",
    imageUrl: "/book1.jpg", publicationDate: "2026.03", isbn: "준비 중", pages: "준비 중", size: "준비 중",
    description: "[저자 소개]\n마이스터 에크하르트는 중세 독일의 위대한 신비주의 사상가입니다.\n\n[역자 소개]\n이부현 교수님은...\n\n[책 소개]\n이 책은 에크하르트의 중세 고지 독일어 설교를 담은 작품집입니다.", 
    links: { kyobo: "https://www.kyobobook.co.kr", aladin: "https://www.aladin.co.kr", yes24: "https://www.yes24.com", ypbooks: "https://www.ypbooks.co.kr" }
  },
  {
    id: "2", title: "육조단경", author: "법해", translator: "권서용 외", publisher: "북메타노이아",
    imageUrl: "/book2.jpg", publicationDate: "2025.09", isbn: "준비 중", pages: "준비 중", size: "준비 중",
    description: "육조단경에 대한 상세 소개를 여기에 적어주세요.", 
    links: { kyobo: "https://www.kyobobook.co.kr", aladin: "https://www.aladin.co.kr", yes24: "https://www.yes24.com", ypbooks: "" }
  },
  {
    id: "3", title: "철학으로서 불교 입문", author: "다케무라 마키오", translator: "이태승 외", publisher: "북메타노이아",
    imageUrl: "/book3.jpg", publicationDate: "2025.08", isbn: "준비 중", pages: "준비 중", size: "준비 중",
    description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" }
  },
  { id: "4", title: "마이스터 에크하르트의 중세 고지 독일어 작품집 3", author: "마이스터 에크하르트", translator: "이부현", publisher: "북메타노이아", imageUrl: "/book4.jpg", publicationDate: "2025.06", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } },
  { id: "5", title: "은의 귀환", author: "황석현", translator: "없음", publisher: "북메타노이아", imageUrl: "/book5.jpg", publicationDate: "2025.11", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } },
  { id: "6", title: "은빛 이야기", author: "양병호", translator: "없음", publisher: "북메타노이아", imageUrl: "/book6.jpg", publicationDate: "2024.01", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } },
  { id: "7", title: "6월의 첫 눈", author: "최병식", translator: "없음", publisher: "북메타노이아", imageUrl: "/book7.jpg", publicationDate: "2024.11", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } },
  { id: "8", title: "마이스터 에크하르트의 중세 고지 독일어 작품집 2", author: "마이스터 에크하르트", translator: "이부현", publisher: "북메타노이아", imageUrl: "/book8.jpg", publicationDate: "2024.10", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } },
  { id: "9", title: "스며들 듯 스쳐 지나갈지라도", author: "정귀숙", translator: "없음", publisher: "북메타노이아", imageUrl: "/book9.jpg", publicationDate: "2023.09", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } },
  { id: "10", title: "스스로 건너다", author: "권서용", translator: "없음", publisher: "북메타노이아", imageUrl: "/book10.jpg", publicationDate: "2023.05", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } },
  { id: "11", title: "마이스터 에크하르트의 중세 고지 독일어 작품집 5", author: "마이스터 에크하르트", translator: "이부현", publisher: "북메타노이아", imageUrl: "/book11.jpg", publicationDate: "2023.12", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } },
  { id: "12", title: "M.에크하르트의 중세 고지 독일어 작품집 1", author: "마이스터 에크하르트", translator: "이부현", publisher: "북메타노이아", imageUrl: "/book12.jpg", publicationDate: "2023.10", isbn: "준비 중", pages: "준비 중", size: "준비 중", description: "상세 소개를 여기에 적어주세요.", links: { kyobo: "", aladin: "", yes24: "", ypbooks: "" } }
];

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = booksData.find((b) => b.id === params.id);

  if (!book) {
    return (
      <main style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>해당 도서를 찾을 수 없습니다. 😢</h2>
        <Link href="/books" style={{ color: '#0070f3', textDecoration: 'none' }}>← 목록으로 돌아가기</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '60px 5%', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <Link href="/books" style={{ display: 'inline-block', marginBottom: '40px', color: '#666', textDecoration: 'none', fontWeight: '500' }}>
        ← 책 목록으로 돌아가기
      </Link>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        
        {/* 상단 영역: 책 표지와 서지 정보 (가로 배열) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'flex-start' }}>
          
          {/* 왼쪽: 거대한 책 표지 */}
          <div style={{ flex: '1 1 300px', maxWidth: '350px' }}>
            <img src={book.imageUrl} alt={book.title} style={{ width: '100%', borderRadius: '4px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }} />
          </div>

          {/* 오른쪽: 상세 텍스트 정보 및 판매처 버튼 */}
          <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', wordBreak: 'keep-all', margin: '0 0 10px 0', lineHeight: '1.3' }}>
              {book.title}
            </h1>
            
            {/* 대표님 예시 이미지와 동일한 서지 정보 스타일 */}
            <p style={{ fontSize: '16px', color: '#444', margin: 0, fontWeight: '500' }}>
              저자 {book.author} {book.translator !== "없음" && `| 역자 ${book.translator} `} | 출판사 {book.publisher}
            </p>
            <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>
              발행일 {book.publicationDate} | ISBN {book.isbn}
            </p>
            <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>
              {book.pages} | {book.size}
            </p>

            {/* 도서 판매처 바로가기 (검은색 둥근 알약 버튼) */}
            <div style={{ marginTop: '30px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>도서 판매처 바로가기</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {book.links.kyobo && (
                  <a href={book.links.kyobo} target="_blank" rel="noreferrer" style={{ padding: '12px 28px', backgroundColor: '#000', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', transition: 'background-color 0.2s' }}>교보문고</a>
                )}
                {book.links.aladin && (
                  <a href={book.links.aladin} target="_blank" rel="noreferrer" style={{ padding: '12px 28px', backgroundColor: '#000', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>알라딘</a>
                )}
                {book.links.yes24 && (
                  <a href={book.links.yes24} target="_blank" rel="noreferrer" style={{ padding: '12px 28px', backgroundColor: '#000', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>YES24</a>
                )}
                {book.links.ypbooks && (
                  <a href={book.links.ypbooks} target="_blank" rel="noreferrer" style={{ padding: '12px 28px', backgroundColor: '#000', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>영풍문고</a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 영역: 저자/역자 소개 및 서평 (긴 텍스트 영역) */}
        <div style={{ borderTop: '2px solid #000', paddingTop: '40px', marginTop: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '25px' }}>저자 소개 및 책 소개</h2>
          {/* whiteSpace: 'pre-wrap'을 통해 엔터(줄바꿈)가 그대로 화면에 반영되도록 했습니다. */}
          <div style={{ fontSize: '18px', color: '#333', lineHeight: '1.9', whiteSpace: 'pre-wrap', wordBreak: 'keep-all' }}>
            {book.description}
          </div>
        </div>
      </div>

    </main>
  );
}