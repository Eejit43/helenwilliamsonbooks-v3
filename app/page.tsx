import booksData, { BookId } from '@/app/books-data';
import { BookImage } from '@/app/books/book-info';
import helenLWilliamsonImage from '@/public/images/helen-l-williamson.jpg';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

function BookLink({ bookId }: { bookId: BookId }) {
    return (
        <Link href={`/books#${bookId}`} className="book-link">
            {booksData.find((book) => book.id === bookId)!.title}
        </Link>
    );
}

export default function Home() {
    return (
        <>
            <div className="welcome">
                Welcome to Helen Williamson's enchanting tales for children of all ages. If you love dinosaurs who wear polka dot slippers,
                if you have pineapple dreams, higgledy-piggledy thoughts or like to escape into fairy tales, you'll love Helen's whimsical
                world. There's no other quite like it!
            </div>

            <div className="grid" style={{ '--grid-columns': '1fr 3fr' } as CSSProperties}>
                <Image src={helenLWilliamsonImage} alt="Helen L. Williamson" />
                <div>
                    <p>
                        Helen was born in Holywood, County Down in Northern Ireland. In the Irish tradition, books and the telling of tales
                        have enchanted her since she was a child, and writing and telling her own stories is just a projection of this love.
                    </p>

                    <p>
                        She received her B.A. and M.A. from Trinity College in Dublin, and now lives in the United States with her husband.
                    </p>

                    <p>
                        Helen continues to write stories that delight readers with her amusing and playful perspective on the world. She is
                        the author of <i>Tales from Balladhoon</i>, <i>A Pineapple Dream and other Nonsense</i>,{' '}
                        <i>Higgledy-Piggledy Thoughts</i>, <i>I Just Met A Dinosaur!</i>, <i>Adventures In Dinglewood</i>, and her newest
                        book, <i>Tales from Balladhoon</i> (2).
                    </p>

                    <b>Come join the fun and explore!</b>
                </div>
            </div>

            <h2>
                Check out the updated <BookLink bookId="tales-from-balladhoon-2" />, with new illustrations and stories!
            </h2>
            <div className="grid" style={{ '--grid-columns': '3fr 5fr' } as CSSProperties}>
                <BookImage bookId="tales-from-balladhoon-2" />
                <div>
                    The original <BookLink bookId="tales-from-balladhoon" />
                    , reimagined with new illustrations, and two more original stories!
                    <hr />
                    <p>
                        Join Johnny McGlory and his friends on a delightful journey through the Irish countryside, where fairies and
                        leprechauns are as real as the donkey that walks under the sea and the magician who summons butterflies.
                    </p>
                    <p>
                        These original Irish tales by Irish native Helen L. Williamson, are a delightful glimpse into the world of
                        imagination and an introduction to the time honored craft of Irish storytelling. These books are sure to capture the
                        hearts of both young and old.
                    </p>
                </div>
            </div>

            <h2>
                <BookLink bookId="adventures-in-dinglewood" /> is available now in paperback and hardcover!
            </h2>
            <div className="grid">
                <BookImage bookId="adventures-in-dinglewood" />
                <div>
                    <p>
                        If you are in a hurry, you might pass by Dinglewood without paying much attention. But if you listen carefully, you
                        just might hear the pitter-patter of small feet and the chattering of tiny voices. Turn the page— There's a world of
                        adventure here in Dinglewood for you to discover!
                    </p>

                    <hr />

                    <p>
                        “. . . Adventures in Dinglewood is sure to take its place alongside many long-loved children's books as a delightful
                        modern classic.”
                    </p>
                    <p>
                        <i>— Kai Rady, Toy and Book Buyer, Shenanigans (est. 1974), Charlottesville, VA, USA</i>
                    </p>

                    <hr />

                    <p>
                        “Helen Williamson and Nancy Atkins charm young readers with the magical adventures of Henrietta and Jasper as they
                        encounter Dinglewood's many zany woodland creatures. . . Adventures in Dinglewood would be a wonderful addition to
                        any child's bookshelf.”
                    </p>
                    <p>
                        <i>— Anna Burger, author of Pea Soup and the Seafood Feast and The Sea Hunt</i>
                    </p>
                </div>
            </div>
        </>
    );
}
