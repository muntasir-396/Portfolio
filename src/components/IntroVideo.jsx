import React, { useEffect, useRef, useState } from 'react';
import endpoints from '../constants/endpoints';
import '../css/intro-video.css';

function interpolate(p, x0, x1, y0, y1) {
  return y0 + ((p - x0) / (x1 - x0)) * (y1 - y0);
}

function getAnimValues(rawP, prefersReduced) {
  const p = Math.min(1, Math.max(0, rawP));

  if (prefersReduced) {
    return {
      opacity: interpolate(p, 0, 1, 1, 0.85),
      blur: 0,
      scale: 1,
      brightness: interpolate(p, 0, 1, 1, 0.80),
      overlayOpacity: interpolate(p, 0, 1, 0.45, 0.54),
    };
  }

  let opacity;
  let blur;
  let scale;
  let brightness;
  let overlayOpacity;

  if (p <= 0.25) {
    opacity = interpolate(p, 0, 0.25, 1, 0.96);
    blur = interpolate(p, 0, 0.25, 0, 1.5);
    scale = interpolate(p, 0, 0.25, 1, 1.008);
    brightness = interpolate(p, 0, 0.25, 1, 0.94);
    overlayOpacity = interpolate(p, 0, 0.25, 0.45, 0.48);
  } else if (p <= 0.5) {
    opacity = interpolate(p, 0.25, 0.5, 0.96, 0.92);
    blur = interpolate(p, 0.25, 0.5, 1.5, 2.8);
    scale = interpolate(p, 0.25, 0.5, 1.008, 1.015);
    brightness = interpolate(p, 0.25, 0.5, 0.94, 0.88);
    overlayOpacity = interpolate(p, 0.25, 0.5, 0.48, 0.50);
  } else if (p <= 0.75) {
    opacity = interpolate(p, 0.5, 0.75, 0.92, 0.88);
    blur = interpolate(p, 0.5, 0.75, 2.8, 3.8);
    scale = interpolate(p, 0.5, 0.75, 1.015, 1.020);
    brightness = interpolate(p, 0.5, 0.75, 0.88, 0.82);
    overlayOpacity = interpolate(p, 0.5, 0.75, 0.50, 0.52);
  } else {
    opacity = interpolate(p, 0.75, 1, 0.88, 0.85);
    blur = interpolate(p, 0.75, 1, 3.8, 4.5);
    scale = interpolate(p, 0.75, 1, 1.020, 1.025);
    brightness = interpolate(p, 0.75, 1, 0.82, 0.78);
    overlayOpacity = interpolate(p, 0.75, 1, 0.52, 0.54);
  }

  return { opacity, blur, scale, brightness, overlayOpacity };
}

const IntroVideo = () => {
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  const [data, setData] = useState({
    headline: 'Building Intelligent Systems for the Real World.',
    scrollButton: 'SCROLL TO EXPLORE ↓',
  });

  useEffect(() => {
    fetch(endpoints.intro)
      .then((res) => res.json())
      .then((res) => {
        if (res) setData((prev) => ({ ...prev, ...res }));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  useEffect(() => {
    let rafId = null;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReduced = mediaQuery.matches;

    const handleMotionChange = (e) => {
      prefersReduced = e.matches;
      updateVisuals();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    }

    const updateVisuals = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const track = document.getElementById('intro-track');
      const trackHeight = track ? track.offsetHeight : window.innerHeight;
      const rawP = scrollY / trackHeight;
      const p = Math.min(1, Math.max(0, rawP));

      const anim = getAnimValues(rawP, prefersReduced);

      // 1. Update permanent video background (never hidden, remains visible)
      if (bgRef.current) {
        bgRef.current.style.opacity = anim.opacity.toFixed(3);
        bgRef.current.style.filter = anim.blur > 0.05
          ? `blur(${anim.blur.toFixed(1)}px) brightness(${anim.brightness.toFixed(2)})`
          : `brightness(${anim.brightness.toFixed(2)})`;
        bgRef.current.style.transform = `scale(${anim.scale.toFixed(4)}) translateZ(0)`;
        bgRef.current.style.visibility = 'visible';
        bgRef.current.style.pointerEvents = 'none';
      }

      // 2. Update dark overlay opacity (subtle dark translucent layer 45-55%)
      if (overlayRef.current) {
        overlayRef.current.style.opacity = anim.overlayOpacity.toFixed(2);
      }

      // 3. Update intro text content (fades and rises upward)
      if (contentRef.current) {
        const textOpacity = Math.max(0, 1 - p * 1.8);
        const textTranslateY = p * -60;
        contentRef.current.style.opacity = textOpacity.toFixed(3);
        contentRef.current.style.transform = `translateY(${textTranslateY.toFixed(1)}px)`;
        contentRef.current.style.visibility = textOpacity > 0.01 ? 'visible' : 'hidden';
        contentRef.current.style.pointerEvents = textOpacity > 0.1 ? 'auto' : 'none';
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateVisuals();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    updateVisuals();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      }
    };
  }, []);

  const handleSkipIntro = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Permanent fixed background video layer */}
      <div ref={bgRef} className="intro-video-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="intro-video__element"
          poster="/intro-poster.jpg"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          <source src="/intro-video.mp4.mov" type="video/quicktime" />
        </video>
        <div ref={overlayRef} className="intro-overlay" />
      </div>

      {/* First screen content */}
      <div id="intro-track" className="intro-screen">
        <div ref={contentRef} className="intro-content">
          <h1 className="intro-headline">
            {data.headline}
          </h1>
          <button
            type="button"
            className="intro-scroll-btn"
            onClick={handleSkipIntro}
            aria-label="Scroll to explore portfolio"
          >
            <span>{data.scrollButton}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="intro-arrow-icon"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
