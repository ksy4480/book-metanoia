import booksData from "./books.json";

export type Book = {
  id: string;
  title: string;
  author: string;
  translator?: string;
  description: string;
  coverImage: string;
  publishedAt?: string;
};

export function getBooks(): Book[] {
  return booksData as Book[];
}

export function getBookById(id: string): Book | undefined {
  return getBooks().find((book) => book.id === id);
}

export function isBookFilled(book: Book): boolean {
  return Boolean(
    book.title.trim() ||
      book.author.trim() ||
      book.translator?.trim() ||
      book.description.trim() ||
      book.coverImage.trim()
  );
}