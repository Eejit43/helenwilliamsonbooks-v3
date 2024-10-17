import booksData from '@/app/books-data';
import BookInfo from '@/app/books/book-info';
import { nanoid } from 'nanoid';

export default function Books() {
    const mappedBookData = booksData.map((bookData) => (
        <div className="grid book-grid" key={nanoid()} id={bookData.id}>
            <BookInfo bookData={bookData} />
        </div>
    ));

    return mappedBookData;
}
