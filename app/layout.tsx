import booksData from '@/app/books-data';
import { quattrocentoSans } from '@/app/ui/fonts';
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { StrictMode } from 'react';

import '@/app/ui/styles.css';

fontAwesomeConfig.autoAddCss = false;

export const viewport: Viewport = { themeColor: '#fffeed', colorScheme: 'light' };

export const metadata: Metadata = {
    metadataBase: new URL('https://helenwilliamsonbooks.com'),
    alternates: { canonical: './' },
    title: { template: '%s | Helen Williamson Books', default: 'Helen Williamson Books' },
    description:
        "Welcome to Helen Williamson's enchanting tales for children of all ages. If you like to escape into fairy tales, you'll love Helen's whimsical world.",
    keywords: ['Helen Williamson', 'Helen L. Williamson', ...booksData.map((book) => book.title)],
    openGraph: {
        url: './',
        siteName: 'Helen Williamson Books',
        locale: 'en_US',
        type: 'website',
    },
    manifest: '/site.webmanifest',
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StrictMode>
            <html lang="en">
                <body className={quattrocentoSans.variable}>
                    <div id="header" className={quattrocentoSans.className}>
                        <h1>
                            <Link href="/">Helen Williamson Books</Link>
                        </h1>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/books">Books</Link>
                                </li>
                                <li>
                                    <Link href="/about-contact">About & Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="container">{children}</div>
                </body>
            </html>
        </StrictMode>
    );
}
