import React, { useState, useEffect, Suspense } from 'react';
import FallbackSpinner from './components/FallbackSpinner';
import NavBar from './components/NavBar';
import Home from './components/Home';
import IntroVideo from './components/IntroVideo';
import MusicPlayer from './components/MusicPlayer';
import endpoints from './constants/endpoints';

const componentMap = {
  About: React.lazy(() => import('./components/About.jsx')),
  Skills: React.lazy(() => import('./components/Skills.jsx')),
  Education: React.lazy(() => import('./components/Education.jsx')),
  Experience: React.lazy(() => import('./components/Experience.jsx')),
  Projects: React.lazy(() => import('./components/Projects.jsx')),
};

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="MainApp">
      <IntroVideo />
      <NavBar />
      <MusicPlayer />
      <main className="main">
        <Suspense fallback={<FallbackSpinner />}>
          <section id="home" className="portfolio-section">
            <Home />
          </section>
          {data
            && data.sections.map((route) => {
              const SectionComponent = componentMap[route.component];
              if (!SectionComponent) return null;
              const sectionId = route.path.replace(/^\//, '');
              return (
                <section
                  key={route.headerTitle}
                  id={sectionId}
                  className="portfolio-section"
                >
                  <SectionComponent header={route.headerTitle} />
                </section>
              );
            })}
        </Suspense>
      </main>
    </div>
  );
}

export default MainApp;
