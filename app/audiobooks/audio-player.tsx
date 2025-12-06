import type { Dispatch, RefObject, SetStateAction } from 'react';
import { type AudioPlayerRef, AudioPlayer as ReactAudioPlayer } from 'react-audio-play';

interface Properties {
    ref: RefObject<AudioPlayerRef | null>;
    album: string;
    track: string;
    password: string;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export default function AudioPlayer({ ref, album, track, password, setIsPlaying }: Properties) {
    if (!album || !track) return <>Select a track or album to start playing!</>;

    return (
        <div className="audiobook-player-container">
            <div>
                {track} - {album}
            </div>
            <ReactAudioPlayer
                ref={ref}
                src={`/api/audiobook?track=${encodeURIComponent(`${track} - ${album}`)}&password=${encodeURIComponent(password)}`}
                onEnd={() => {
                    setIsPlaying(false);
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
