import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="error-page-container">
            <h2>
                Page not found <FontAwesomeIcon icon={faFaceSadTear} />
            </h2>
            <Link href="/">Take me back to safety!</Link>
        </div>
    );
}
