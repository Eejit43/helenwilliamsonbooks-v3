import AudiobooksForm from '@app/audiobooks/form';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Audiobooks' };

export default function Audiobooks() {
    return <AudiobooksForm />;
}
