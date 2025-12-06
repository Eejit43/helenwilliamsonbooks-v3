import booksData from '@/app/books-data';
import BookInfo from '@/app/books/book-info';
import { nanoid } from 'nanoid';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Books' };

export default function Books() {
    return booksData.map((bookData) => (
        <div key={nanoid()} className="grid book-grid" id={bookData.id}>
            <BookInfo bookData={bookData} />
        </div>
    ));
}
