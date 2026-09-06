import React, { useState, useRef, useEffect } from 'react';
import '../css/music-player.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const userMutedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;

    const startPlay = () => {
      if (userMutedRef.current) return;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            cleanupListeners();
          })
          .catch(() => {
            // Autoplay policy prevented immediate playback; waiting for first gesture
          });
      }
    };

    const handleFirstGesture = () => {
      startPlay();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      window.removeEventListener('wheel', handleFirstGesture);
    };

    // 1. Attempt immediate autoplay when page loads
    startPlay();

    // 2. Attach listeners for the first user interaction (scroll, click, touch, wheel)
    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('scroll', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('keydown', handleFirstGesture, { passive: true });
    window.addEventListener('wheel', handleFirstGesture, { passive: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      userMutedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      userMutedRef.current = false;
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
        autoPlay
        preload="auto"
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
