import { BookLink } from '@/app/page';
import aPineappleDreamAndOtherNonsenseCover from '@/public/images/books/a-pineapple-dream-and-other-nonsense.png';
import adventuresInDinglewoodCover from '@/public/images/books/adventures-in-dinglewood.png';
import higgledyPiggledyThoughtsCover from '@/public/images/books/higgledy-piggledy-thoughts.png';
import iJustMetADinosaurCover from '@/public/images/books/i-just-met-a-dinosaur.png';
import talesFromBalladhoon2Cover from '@/public/images/books/tales-from-balladhoon-2.png';
import talesFromBalladhoonCover from '@/public/images/books/tales-from-balladhoon.png';
import type { StaticImageData } from 'next/image';
import type { JSX } from 'react';

export interface Book {
    id: BookId;
    title: string;
    image: StaticImageData;
    description: JSX.Element;
    prices: { paperback?: number; hardcover?: number };
    pages: number;
    dimensions: { width: number; height: number };
    published: { year: number; publisher: string };
    isbn: { 10?: string; 13?: string };
    urls: { belleIsleBooks?: string; bookshop?: string; booksAMillion?: string; barnesAndNoble?: string; amazon?: string };
}

export type BookId =
    | 'tales-from-balladhoon-2'
    | 'adventures-in-dinglewood'
    | 'i-just-met-a-dinosaur'
    | 'higgledy-piggledy-thoughts'
    | 'a-pineapple-dream-and-other-nonsense'
    | 'tales-from-balladhoon';

export default [
    {
        id: 'tales-from-balladhoon-2',
        title: 'Tales from Balladhoon',
        image: talesFromBalladhoon2Cover,
        description: (
            <>
                The original <BookLink bookId="tales-from-balladhoon" />, reimagined with new illustrations, and two more original stories!
                <hr />
                Join Johnny McGlory and his friends on a delightful journey through the Irish countryside, where fairies and leprechauns are
                as real as the donkey that walks under the sea and the magician who summons butterflies.
                <br />
                <br />
                These original Irish tales by Irish native Helen L. Williamson, are a delightful glimpse into the world of imagination and
                an introduction to the time honored craft of Irish storytelling. These books are sure to capture the hearts of both young
                and old.
            </>
        ),
        prices: { paperback: 14.99, hardcover: 23.99 },
        pages: 92,
        dimensions: { width: 8, height: 10 },
        published: { year: 2022, publisher: 'Stratton Press' },
        isbn: { 10: '1648959520', 13: '9781648959523' },
        urls: {
            // bookshop: 'https://bookshop.org/p/books/tales-from-balladhoon-helen-l-williamson/18600516',
            // booksAMillion: 'https://www.booksamillion.com/p/9781648959523',
            // barnesAndNoble: 'https://www.barnesandnoble.com/w/1016491386',
            amazon: 'https://www.amazon.com/dp/1648959520',
        },
    },
    {
        id: 'adventures-in-dinglewood',
        title: 'Adventures in Dinglewood',
        image: adventuresInDinglewoodCover,
        description: (
            <>
                If you are in a hurry, you might pass by Dinglewood without paying much attention. But if you listen carefully, you just
                might hear the pitter-patter of small feet and the chattering of tiny voices. Turn the page—There&apos;s a world of
                adventure here in Dinglewood for you to discover!
            </>
        ),
        prices: { paperback: 17.95, hardcover: 26.95 },
        pages: 80,
        dimensions: { width: 8.5, height: 8.5 },
        published: { year: 2018, publisher: 'Belle Isle Books' },
        isbn: { 10: '1947860216', 13: '9781947860216' },
        urls: {
            belleIsleBooks: 'http://www.belleislebooks.com/store/p121/adventuresindinglewood.html',
            bookshop: 'https://bookshop.org/p/books/adventures-in-dinglewood-helen-l-williamson/9758773',
            booksAMillion: 'https://www.booksamillion.com/p/9781947860131',
            barnesAndNoble: 'https://www.barnesandnoble.com/w/1129189888',
            amazon: 'https://www.amazon.com/dp/1947860216',
        },
    },
    {
        id: 'i-just-met-a-dinosaur',
        title: 'I Just Met a Dinosaur!',
        image: iJustMetADinosaurCover,
        description: (
            <>
                If you met a dinosaur, what would you do? Play hide-and-seek or go to the zoo? Who knows if their skin was pink, purple, or
                blue? Or if they squawked, roared, or mooed? Did they polish their nails and feathers and scales, and sharpen their teeth
                with the ends of their tails? When you open this book of dinosaur rhymes, you&apos;ll meet some of those creatures from
                long-ago times!
            </>
        ),
        prices: { hardcover: 18.95 },
        pages: 32,
        dimensions: { width: 11.25, height: 8.75 },
        published: { year: 2016, publisher: 'Belle Isle Books' },
        isbn: { 10: '1939930677', 13: '9781939930675' },
        urls: {
            belleIsleBooks: 'http://www.belleislebooks.com/store/p93/I_Just_Met_a_Dinosaur!.html',
            barnesAndNoble: 'https://www.barnesandnoble.com/w/1124812119',
            amazon: 'https://www.amazon.com/dp/1939930677',
        },
    },
    {
        id: 'higgledy-piggledy-thoughts',
        title: 'Higgledy-Piggledy Thoughts',
        image: higgledyPiggledyThoughtsCover,
        description: (
            <>
                Have you thought of a goat . . .
                <br />
                . . . in a fancy coat?
                <br />
                Or a hen that could only <i>SNORE</i>?<br />
                <br />
                Children will enjoy and be inspired by many short poems and beautiful illustrations.
            </>
        ),
        prices: { paperback: 12.95 },
        pages: 48,
        dimensions: { width: 8.5, height: 11 },
        published: { year: 2013, publisher: 'Donnan LLC' },
        isbn: { 10: '0981925235', 13: '9780981925233' },
        urls: { amazon: 'https://www.amazon.com/dp/0981925235' },
    },
    {
        id: 'a-pineapple-dream-and-other-nonsense',
        title: 'A Pineapple Dream and Other Nonsense',
        image: aPineappleDreamAndOtherNonsenseCover,
        description: (
            <>
                A Pineapple Dream and Other Nonsense is a beautifully illustrated full-color book of poems. They will delight your child and
                encourage their imagination as they read or listen to the poems and see the detailed drawings.
                <br />
                <br />
                It&apos;s Nonsense, it&apos;s Fun,
                <br />
                It tickles you tongue.
                <br />
                There&apos;s a mouse that knits
                <br />
                And a cat that sits.
                <br />
                There&apos;s a whale you&apos;ll adore
                <br />
                And a whole lot more.
                <br />
                <br />
                So, my friends, find a cozy nook
                <br />
                And plunge headlong into this book.
            </>
        ),
        prices: { paperback: 15.95 },
        pages: 40,
        dimensions: { width: 8.5, height: 11 },
        published: { year: 2011, publisher: 'Donnan LLC' },
        isbn: { 10: '0981925227', 13: '9780981925226' },
        urls: { amazon: 'https://www.amazon.com/dp/0981925227' },
    },
    {
        id: 'tales-from-balladhoon',
        title: 'Tales from Balladhoon',
        image: talesFromBalladhoonCover,
        description: (
            <>
                Join Johnny McGlory and his friends on a delightful journey through the Irish countryside, where fairies and leprechauns are
                as real as the donkey that walks under the sea and the magician who summons butterflies.
                <br />
                <br />
                These original Irish tales by Irish native Helen L. Williamson, are a delightful glimpse into the world of imagination and
                an introduction to the time honored craft of Irish storytelling. These books are sure to capture the hearts of both young
                and old.
            </>
        ),
        prices: { paperback: 12.95 },
        pages: 87,
        dimensions: { width: 6, height: 9 },
        published: { year: 2008, publisher: 'Donnan LLC' },
        isbn: { 10: '0981925200', 13: '9780981925202' },
        urls: { amazon: 'https://www.amazon.com/dp/0981925200' },
    },
] satisfies Book[] as Book[];
