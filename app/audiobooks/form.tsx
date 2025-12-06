'use client';

import audioTracks from '@/app/audio-tracks';
import AudioPlayer from '@/app/audiobooks/audio-player';
import PasswordForm from '@/app/audiobooks/password-form';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { AudioPlayerRef } from 'react-audio-play';
import { Col, Row } from 'react-bootstrap';

export default function AudiobooksForm() {
    const [password, setPassword] = useState('');
    const [hasValidPassword, setHasValidPassword] = useState(false);

    const [currentAlbum, setCurrentAlbum] = useState('');
    const [currentTrack, setCurrentTrack] = useState('');

    const [isPlaying, setIsPlaying] = useState(false);
    const isPlayingReference = useRef(isPlaying);

    useEffect(() => {
        isPlayingReference.current = isPlaying;
    }, [isPlaying]);

    const playerReference = useRef<AudioPlayerRef>(null);

    const playTrack = async (album?: string, track?: string) => {
        if (isPlayingReference.current) {
            setIsPlaying(false);
            isPlayingReference.current = false;
        }

        if (album && track) {
            setCurrentAlbum(album);
            setCurrentTrack(track);
        }

        while (!isPlayingReference.current) {
            await new Promise((resolve) => setTimeout(resolve, 100)); // eslint-disable-line no-await-in-loop
            playerReference.current?.play();
        }
    };

    const pauseTrack = () => {
        playerReference.current?.pause();
    };

    return (
        <>
            <h2>Audiobooks</h2>
            {hasValidPassword ? (
                <Row className="audiobook-player-row">
                    <Col className="audiobooks">
                        {audioTracks.map((album) => (
                            <div key={album.id}>
                                <div className="audiobook-header">
                                    <FontAwesomeIcon
                                        icon={currentAlbum === album.title && isPlaying ? faPauseCircle : faPlayCircle}
                                        onClick={() => {
                                            if (currentAlbum !== album.title) void playTrack(album.title, album.tracks[0].name);
                                            else if (isPlaying) pauseTrack();
                                            else void playTrack();
                                        }}
                                    />
                                    <h3>
                                        {album.title}
                                        <Link className="" href={{ pathname: '/books', hash: album.id }} target="_blank">
                                            <FontAwesomeIcon icon={faExternalLink} />
                                        </Link>
                                    </h3>
                                </div>
                                <div className="audiobook-tracks">
                                    {album.tracks.map((track) => {
                                        const isActive = currentAlbum === album.title && currentTrack === track.name;

                                        return (
                                            <div
                                                key={track.key}
                                                className="audiobook-track"
                                                onClick={() => {
                                                    if (!isActive) void playTrack(album.title, track.name);
                                                    else if (isPlaying) pauseTrack();
                                                    else void playTrack();
                                                }}>
                                                <FontAwesomeIcon icon={isActive && isPlaying ? faPauseCircle : faPlayCircle} />
                                                {track.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </Col>
                    <Col>
                        <AudioPlayer
                            ref={playerReference}
                            album={currentAlbum}
                            password={password}
                            setIsPlaying={setIsPlaying}
                            track={currentTrack}
                        />
                    </Col>
                </Row>
            ) : (
                <PasswordForm password={password} setHasValidPassword={setHasValidPassword} setPassword={setPassword} />
            )}
        </>
    );
}
