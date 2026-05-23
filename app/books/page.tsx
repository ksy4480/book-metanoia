import Link from 'next/link';

export default function BooksPage() {
  // 대표님의 진짜 책 12권 데이터입니다!
  const booksData = [
    { id: "1", title: "마이스터 에크하르트의 중세 고지 독일어 작품집 4-1,2", author: "마이스터 에크하르트 지음, 이부현 옮김", imageUrl: "/book1.jpg" },
    { id: "2", title: "육조단경", author: "법해 지음, 권서용 외 옮김", imageUrl: "/book2.jpg" },
    { id: "3", title: "철학으로서 불교 입문", author: "다케무라 마키오 지음, 이태승 외 옮김", imageUrl: "/book3.jpg" },
    { id: "4", title: "마이스터 에크하르트의 중세 고지 독일어 작품집 3", author: "마이스터 에크하르트 지음, 이부현 옮김", imageUrl: "/book4.jpg" },
    { id: "5", title: "은의 귀환", author: "황석현 지음", imageUrl: "/book5.jpg" },
    { id: "6", title: "은빛 이야기", author: "양병호 지음", imageUrl: "/book6.jpg" },
    { id: "7", title: "6월의 첫 눈", author: "최병식 지음", imageUrl: "/book7.jpg" },
    { id: "8", title: "마이스터 에크하르트의 중세 고지 독일어 작품집 2", author: "마이스터 에크하르트 지음, 이부현 옮김", imageUrl: "/book8.jpg" },
    { id: "9", title: "스며들 듯 스쳐 지나갈지라도", author: "정귀숙 지음", imageUrl: "/book9.jpg" },
    { id: "10", title: "스스로 건너다", author: "권서용 지음", imageUrl: "/book10.jpg" },
    { id: "11", title: "마이스터 에크하르트의 중세 고지 독일어 작품집 5", author: "마이스터 에크하르트 지음, 이부현 옮김", imageUrl: "/book11.jpg" },
    { id: "12", title: "M.에크하르트의 중세 고지 독일어 작품집 1", author: "마이스터 에크하르트 지음, 이부현 옮김", imageUrl: "/book12.jpg" },
  ];

  return (
    <main style={{ padding: '80px 5%', width: '100%', boxSizing: 'border-box', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '50px', textAlign: 'center' }}>
        책 소개
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '40px'
      }}>
        {booksData.map((book) => (
          <Link href={`/books/${book.id}`} key={book.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden', 
              aspectRatio: '1 / 1.4', 
              boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
              marginBottom: '20px',
              backgroundColor: '#f5f5f5' 
            }}>
              <img src={book.imageUrl} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', wordBreak: 'keep-all' }}>
              {book.title}
            </h3>
            <p style={{ fontSize: '15px', color: '#888' }}>
              {book.author}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}