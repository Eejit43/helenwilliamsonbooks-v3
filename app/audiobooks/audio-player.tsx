import type { BookId } from '@app/books-data';
import { BookImage } from '@app/books/book-info';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { type AudioPlayerRef, AudioPlayer as ReactAudioPlayer } from 'react-audio-play';

interface Properties {
    ref: RefObject<AudioPlayerRef | null>;
    album: { id: string; title: string };
    track: string;
    password: string;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    onEnd: () => void;
}

export default function AudioPlayer({ ref, album, track, password, setIsPlaying, onEnd }: Properties) {
    if (!album.id || !track) return <>Select a track or album to start playing!</>;

    return (
        <div className="audiobook-player-container">
            <BookImage bookId={album.id as BookId} />
            <div className="audiobook-player-title-container">
                <div className="audiobook-player-title">{track}</div>
                <div className="audiobook-player-album">{album.title}</div>
            </div>
            <ReactAudioPlayer
                ref={ref}
                color="var(--neutral-color-200)"
                sliderColor="var(--main-color-300)"
                src={`/api/audiobook?track=${encodeURIComponent(`${track} - ${album.title}`)}&password=${encodeURIComponent(password)}`}
                style={{ borderRadius: '10px' }}
                onEnd={() => {
                    setIsPlaying(false);
                    onEnd();
                }}
                onPause={() => {
                    setIsPlaying(false);
                }}
                onPlay={() => {
                    setIsPlaying(true);
                }}
            />
        </div>
    );
}
