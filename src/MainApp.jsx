import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBar from './components/NavBar';
import Home from './components/Home';
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

  return (
    <div className="MainApp">
      <NavBar />
      <main className="main">
        <Suspense fallback={<FallbackSpinner />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {data
              && data.sections.map((route) => {
                const SectionComponent = componentMap[route.component];
                if (!SectionComponent) return null;
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
                    element={<SectionComponent header={route.headerTitle} />}
                  />
                );
              })}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default MainApp;
