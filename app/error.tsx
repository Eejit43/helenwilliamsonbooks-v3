'use client';

import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Error({ error }: { error: Error & { digest?: string } }) {
    console.log(error, error.name, error.message, error.digest);

    return (
        <div className="error-page-container">
            <h2>
                {error.name}
                {'digest' in error ? ` (digest code ${error.digest})` : ''} <FontAwesomeIcon icon={faFaceSadTear} />
            </h2>
            <Link href="/">Take me back to safety!</Link>
        </div>
    );
}
