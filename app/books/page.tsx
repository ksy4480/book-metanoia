import Image from "next/image";
import Link from "next/link";
import { getBooks, isBookFilled } from "./books";

export default function BooksPage() {
  const books = getBooks();

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-16 text-neutral-900">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Book Metanoia
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            책 소개
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            북메타노이아의 도서를 소개합니다. 표지, 제목, 저자, 번역가,
            책소개는 n8n 입력 폼을 통해 채워 넣을 수 있습니다.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => {
            const filled = isBookFilled(book);
            const title = book.title || `도서 ${book.id}`;

            return (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                className="group rounded-3xl bg-white p-4 shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
                  {book.coverImage ? (
                    <Image
                      src={book.coverImage}
                      alt={`${title} 표지`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center border border-dashed border-neutral-300 text-center text-sm text-neutral-400">
                      <span>
                        책 표지
                        <br />
                        입력 대기
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                      filled
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    {filled ? "등록 완료" : "입력 대기"}
                  </span>

                  <h2 className="mt-3 text-lg font-semibold text-neutral-900">
                    {title}
                  </h2>

                  <p className="mt-1 text-sm text-neutral-500">
                    {book.author || "저자 정보 대기 중"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}