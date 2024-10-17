import { quattrocentoSans } from '@/app/ui/fonts';
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { StrictMode } from 'react';

import '@/app/ui/styles.css';

fontAwesomeConfig.autoAddCss = false;

export const metadata: Metadata = {
    title: 'Helen Williamson Books',
    description:
        "Welcome to Helen Williamson's enchanting tales for children of all ages. If you love dinosaurs who wear polka dot slippers, if you have pineapple dreams, higgledy-piggledy thoughts or like to escape into fairy tales, you'll love Helen's whimsical world. There's no other world quite like it!",
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
                        <Link href="/">Helen Williamson Books</Link>
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
