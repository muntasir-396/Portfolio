import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/about.css';

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        {data ? (
          <Fade triggerOnce>
            <div className="bento">
              <div className="tile about-bio-tile span-4 rspan-2">
                {typeof data.about === 'string' ? (
                  <ReactMarkdown>{data.about}</ReactMarkdown>
                ) : (
                  <div className="about-custom-grid">
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{data.about?.intro}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                      {data.about?.leftColumn && (
                        <div style={{ flex: '1 1 250px' }}>
                          <h4>{data.about.leftColumn.title1}</h4>
                          <ul>{data.about.leftColumn.currentFocus?.map(i => <li key={i}>{i}</li>)}</ul>
                          <h4 style={{ marginTop: '1rem' }}>{data.about.leftColumn.title2}</h4>
                          <ul>{data.about.leftColumn.research?.map(i => <li key={i}>{i}</li>)}</ul>
                        </div>
                      )}
                      {data.about?.rightColumn && (
                        <div style={{ flex: '1 1 250px' }}>
                          <h4>{data.about.rightColumn.title1}</h4>
                          <ul>{data.about.rightColumn.aiEngineering?.map(i => <li key={i}>{i}</li>)}</ul>
                          <h4 style={{ marginTop: '1rem' }}>{data.about.rightColumn.title2}</h4>
                          <ul>{data.about.rightColumn.cloud?.map(i => <li key={i}>{i}</li>)}</ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {data?.imageSource && (
                <div className="tile about-image-tile span-2 rspan-2">
                  <img src={data.imageSource} alt="profile" />
                </div>
              )}
            </div>
          </Fade>
        ) : <FallbackSpinner />}
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
