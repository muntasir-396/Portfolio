import React, { useState, useRef, useEffect } from 'react';
import '../css/music-player.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
    }
  }, []);

  const togglePlay = (e) => {
    e?.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.5;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/music/music.mp3" type="audio/mpeg" />
        <source src="/music/background.mp3" type="audio/mpeg" />
        <source src="/music/audio.mp3" type="audio/mpeg" />
        <source src="/music/song.mp3" type="audio/mpeg" />
        <source src="/music/music.m4a" type="audio/mp4" />
        <source src="/music/music.wav" type="audio/wav" />
      </audio>

      <button
        type="button"
        className="music-player-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        title={isPlaying ? 'Mute Music' : 'Play Music'}
      >
        <span className="music-tooltip">
          {isPlaying ? 'Mute Music' : 'Play Music'}
        </span>

        {isPlaying ? (
          <div className="music-equalizer" aria-hidden="true">
            <span className="music-bar" />
            <span className="music-bar" />
            <span className="music-bar" />
            <span className="music-bar" />
          </div>
        ) : (
          <svg
            className="music-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
