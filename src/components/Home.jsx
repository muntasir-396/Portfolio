import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import '../css/home.css';

function initialsOf(name) {
  if (!name) return '';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade triggerOnce className="home-fade-container">
      <section className="hero">
        <div className="bento">
          <div className="tile hero-intro span-4 rspan-2">
            {data?.status && (
              <span className="hero-eyebrow">{data.status}</span>
            )}
            <h1 className="hero-name">{data?.name}</h1>
            <div className="hero-roles">
              <span>I&apos;m&nbsp;</span>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: data?.roles,
                }}
              />
            </div>
            {data?.tagline && <p className="hero-tagline">{data.tagline}</p>}
            <div className="hero-cta">
              <Link className="btn-pill btn-accent" to="/projects">
                View my work
              </Link>
              <Link className="btn-pill btn-ghost" to="/about">
                About me
              </Link>
            </div>
          </div>

          <div className="tile span-2" style={{ padding: 0, overflow: 'hidden' }}>
            <img 
              src="images/about/profile.png" 
              alt="Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          <div className="tile hero-social span-2">
            <span className="tile-label">Find me</span>
            <Social />
          </div>
        </div>
      </section>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
