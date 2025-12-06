import booksData, { type Book, type BookId } from '@/app/books-data';
import amazonLogo from '@/public/images/logos/amazon.png';
import barnesAndNobleLogo from '@/public/images/logos/barnes-and-noble.png';
import belleIsleBooksLogo from '@/public/images/logos/belle-isle-books.png';
import booksAMillionLogo from '@/public/images/logos/books-a-million.png';
import bookshopLogo from '@/public/images/logos/bookshop.png';
import Image from 'next/image';
import Link from 'next/link';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function PopupTooltip({ text, title }: { text: string; title: string }) {
    return (
        <OverlayTrigger overlay={<Tooltip>{title}</Tooltip>}>
            <span className="tooltip-text">{text}</span>
        </OverlayTrigger>
    );
}

export function BookImage({ bookId }: { bookId: BookId }) {
    const foundBook = booksData.find((book) => book.id === bookId)!;

    return <Image alt={`${foundBook.title} Cover`} className="book-image" src={foundBook.image} />;
}

export default function BookInfo({ bookData }: { bookData: Book }) {
    return (
        <>
            <BookImage bookId={bookData.id} />
            <div>
                <h2 className="title-link">
                    <Link href={{ hash: bookData.id }}>{bookData.title}</Link>
                </h2>

                <div className="book-description">{bookData.description}</div>

                <ul className="book-data">
                    <li>
                        <b>Type:</b> {'paperback' in bookData.prices && 'Paperback'}
                        {'paperback' in bookData.prices && 'hardcover' in bookData.prices && ' / '}
                        {'hardcover' in bookData.prices && 'Hardcover'}
                    </li>
                    <li>
                        <b>Price:</b> {'paperback' in bookData.prices && bookData.prices.paperback}
                        {'paperback' in bookData.prices && 'hardcover' in bookData.prices && ' / '}
                        {'hardcover' in bookData.prices && bookData.prices.hardcover}
                    </li>
                    <li>
                        <b>Pages:</b> {bookData.pages}
                    </li>
                    <li>
                        <b>Dimensions:</b> {bookData.dimensions.width} x {bookData.dimensions.height}
                    </li>
                    <li>
                        <b>Published:</b> {bookData.published.year}, {bookData.published.publisher}
                    </li>
                    <li>
                        <b>
                            <PopupTooltip text="ISBN" title="International Standard Book Number" /> 10 /{' '}
                            <PopupTooltip text="ISBN" title="International Standard Book Number" /> 13:
                        </b>{' '}
                        {bookData.isbn[10]}/{bookData.isbn[13]}
                    </li>
                </ul>

                <div className="purchase-links">
                    {'belleIsleBooks' in bookData.urls && (
                        <a href={bookData.urls.belleIsleBooks} rel="noopener noreferrer" target="_blank">
                            <Image alt="Belle Isle Books Logo" src={belleIsleBooksLogo} />
                        </a>
                    )}
                    {'bookshop' in bookData.urls && (
                        <a href={bookData.urls.bookshop} rel="noopener noreferrer" target="_blank">
                            <Image alt="Bookshop.org Logo" src={bookshopLogo} />
                        </a>
                    )}
                    {'booksAMillion' in bookData.urls && (
                        <a href={bookData.urls.booksAMillion} rel="noopener noreferrer" target="_blank">
                            <Image alt="Books-A-Million Logo" src={booksAMillionLogo} />
                        </a>
                    )}
                    {'barnesAndNoble' in bookData.urls && (
                        <a href={bookData.urls.barnesAndNoble} rel="noopener noreferrer" target="_blank">
                            <Image alt="Barnes and Noble Logo" src={barnesAndNobleLogo} />
                        </a>
                    )}
                    {'amazon' in bookData.urls && (
                        <a href={bookData.urls.amazon} rel="noopener noreferrer" target="_blank">
                            <Image alt="Amazon Logo" src={amazonLogo} />
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}
