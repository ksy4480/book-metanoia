import Link from 'next/link';

export default function BooksPage() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main
      style={{
        width: '100%',
        maxWidth: '1500px',
        margin: '0 auto',
        padding: '70px 60px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          fontSize: '40px',
          fontWeight: 'bold',
          marginBottom: '60px',
        }}
      >
        책 소개
      </h1>

      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(160px, 1fr))',
          columnGap: '48px',
          rowGap: '56px',
        }}
      >
        {books.map((bookNumber) => (
          <Link
            href={`/books/${bookNumber}`}
            key={bookNumber}
            style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                width: '100%',
                backgroundColor: '#f5f5f5',
                border: '1px solid #eaeaea',
                borderRadius: '10px',
                aspectRatio: '1 / 1.4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
                marginBottom: '18px',
              }}
            >
              <span
                style={{
                  fontSize: '17px',
                  color: '#888',
                  fontWeight: 'bold',
                }}
              >
                책 표지 {bookNumber}
              </span>
            </div>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: '700',
                wordBreak: 'keep-all',
                margin: 0,
              }}
            >
              도서 제목 {bookNumber}
            </h3>
          </Link>
        ))}
      </div>
    </main>
  );
}