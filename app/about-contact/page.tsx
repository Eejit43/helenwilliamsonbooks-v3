import ContactForm from '@/app/about-contact/contact-form';
import helenLWilliamsonImage from '@/public/images/helen-l-williamson.jpg';
import belleIsleBooksLogo from '@/public/images/logos/belle-isle-books.png';
import nancyTaylorAtkinsImage from '@/public/images/nancy-taylor-atkins.jpg';
import type { Metadata } from 'next';
import Image from 'next/image';
import type { CSSProperties } from 'react';

export const metadata: Metadata = { title: 'About & Contact' };

export default function AboutAndContact() {
    return (
        <>
            <h2>About Us</h2>
            <div className="grid" style={{ '--grid-columns': '1fr 4fr' } as CSSProperties}>
                <Image src={helenLWilliamsonImage} alt="Helen L. Williamson" />
                <div>
                    <h3>Helen Williamson, Author</h3>
                    <p>
                        Helen Lorrain Williamson was born in Holywood, Northern Ireland. She received her B.A. and M.A. from Trinity College
                        in Dublin, Ireland. For many years she taught creative writing in Charlottesville, Virginia, where she lives with
                        her husband. She is the author of <i>Tales from Balladhoon</i>, <i>A Pineapple Dream and other Nonsense</i>,{' '}
                        <i>Higgledy-Piggledy Thoughts</i>, <i>I Just Met A Dinosaur!</i>, <i>Adventures In Dinglewood</i>, and her newest
                        book, <i>Tales from Balladhoon</i> (2).
                    </p>
                    <p>
                        You can find her online on{' '}
                        <a href="https://www.facebook.com/Helen-L-Williamson-817953028336023" target="_blank">
                            Facebook
                        </a>
                        , and there is more information about Helen on{' '}
                        <a href="https://www.goodreads.com/author/show/8246911" target="_blank">
                            Goodreads
                        </a>{' '}
                        and{' '}
                        <a href="http://www.belleislebooks.com/helenlwilliamson.html" target="_blank">
                            Belle Isle Books
                        </a>
                        .
                    </p>
                </div>
            </div>

            <div className="grid" style={{ '--grid-columns': '1fr 4fr' } as CSSProperties}>
                <Image src={nancyTaylorAtkinsImage} alt="Nancy Taylor Atkins" />
                <div>
                    <h3>Nancy Taylor Atkins, Illustrator</h3>
                    <p>
                        Nancy Taylor Atkins lives in Williamsburg, Virginia with her family. After graduating from Furman University, she
                        worked in an experiential outdoor program for at-risk youth. In addition to owning a local nutritional store, Nancy
                        enjoys creating with clay, paint, and mixed media. She has participated in art shows and has been commissioned to
                        make tiled installations. She is the illustrator of <i>A Pineapple Dream and Other Nonsense</i>,{' '}
                        <i>Higgledy-Piggledy Thoughts</i>, <i>I Just Met A Dinosaur!</i>, <i>Adventures In Dinglewood</i>, and{' '}
                        <i>Tales from Balladhoon</i> (2).
                    </p>
                </div>
            </div>

            <h2>Contact</h2>
            <ContactForm />

            <div className="grid" style={{ marginTop: '50px' }}>
                <div>
                    <b>For more information or to arrange an interview with the author, email</b> brandylanepr@gmail.com <b>or call</b>{' '}
                    804-644-3090<b>.</b>
                </div>
                <a href="http://www.belleislebooks.com" target="_blank">
                    <Image src={belleIsleBooksLogo} alt="Belle Isle Books Logo" />
                </a>
            </div>
        </>
    );
}
