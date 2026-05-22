import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBookById, getBooks, isBookFilled } from "../books";

type BookDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return getBooks().map((book) => ({
    id: book.id,
  }));
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) {
    notFound();
  }

  const filled = isBookFilled(book);
  const title = book.title || `${book.id}번 도서`;

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-12 text-neutral-900">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/books"
          className="inline-flex text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
        >
          ← 책 목록으로
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[420px_1fr]">
          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
              {book.coverImage ? (
                <Image
                  src={book.coverImage}
                  alt={`${title} 표지`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center border border-dashed border-neutral-300 text-center text-neutral-400">
                  <span>
                    {book.id}번 책의
                    <br />
                    표지 이미지 입력 대기
                  </span>
                </div>
              )}
            </div>
          </div>

          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
            <div className="mb-5">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                  filled
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-neutral-100 text-neutral-500"
                }`}
              >
                {filled ? "등록 완료" : "입력 대기"}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>

            <dl className="mt-8 grid gap-4 border-y border-neutral-200 py-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-neutral-500">저자</dt>
                <dd className="mt-1 text-base text-neutral-900">
                  {book.author || "미입력"}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-neutral-500">번역가</dt>
                <dd className="mt-1 text-base text-neutral-900">
                  {book.translator || "미입력"}
                </dd>
              </div>

              {book.publishedAt ? (
                <div>
                  <dt className="text-sm font-medium text-neutral-500">
                    출간 정보
                  </dt>
                  <dd className="mt-1 text-base text-neutral-900">
                    {book.publishedAt}
                  </dd>
                </div>
              ) : null}
            </dl>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold">책소개</h2>

              {book.description ? (
                <p className="mt-4 whitespace-pre-line text-base leading-8 text-neutral-700">
                  {book.description}
                </p>
              ) : (
                <p className="mt-4 text-base leading-8 text-neutral-500">
                  아직 책소개가 입력되지 않았습니다. n8n 폼에서 책 표지,
                  책 제목, 저자, 번역가, 책소개를 입력하면 이 영역에
                  반영됩니다.
                </p>
              )}
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}