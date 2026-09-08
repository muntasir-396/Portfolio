import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/about.css';

const FocusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>
);

const AiIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const ResearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v7.31L4.62 17A2 2 0 0 0 6.31 20h11.38a2 2 0 0 0 1.69-3L14 9.31V2" />
    <line x1="8.5" y1="2" x2="15.5" y2="2" />
    <line x1="7" y1="14" x2="17" y2="14" />
  </svg>
);

const CloudIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

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
              {/* Bio & Focus Tile */}
              <div className={`tile about-bio-tile ${data.imageSource ? 'span-4 rspan-2' : 'span-6'}`}>
                {typeof data.about === 'string' ? (
                  <ReactMarkdown>{data.about}</ReactMarkdown>
                ) : (
                  <>
                    {data.about?.intro && (
                      <p className="about-intro-text">{data.about.intro}</p>
                    )}
                    <div className="about-columns-container">
                      {/* Left Subcolumn */}
                      {data.about?.leftColumn && (
                        <div className="about-subcolumn">
                          {data.about.leftColumn.title1 && (
                            <div className="about-section-group">
                              <h4 className="about-section-title">
                                <span className="about-section-icon"><FocusIcon /></span>
                                <span>{data.about.leftColumn.title1}</span>
                              </h4>
                              <ul className="about-list">
                                {data.about.leftColumn.currentFocus?.map((item) => (
                                  <li key={item} className="about-list-item">
                                    <span className="about-bullet" aria-hidden="true" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {data.about.leftColumn.title2 && (
                            <div className="about-section-group">
                              <h4 className="about-section-title">
                                <span className="about-section-icon"><ResearchIcon /></span>
                                <span>{data.about.leftColumn.title2}</span>
                              </h4>
                              <ul className="about-list">
                                {data.about.leftColumn.research?.map((item) => (
                                  <li key={item} className="about-list-item">
                                    <span className="about-bullet" aria-hidden="true" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Right Subcolumn */}
                      {data.about?.rightColumn && (
                        <div className="about-subcolumn">
                          {data.about.rightColumn.title1 && (
                            <div className="about-section-group">
                              <h4 className="about-section-title">
                                <span className="about-section-icon"><AiIcon /></span>
                                <span>{data.about.rightColumn.title1}</span>
                              </h4>
                              <ul className="about-list">
                                {data.about.rightColumn.aiEngineering?.map((item) => (
                                  <li key={item} className="about-list-item">
                                    <span className="about-bullet" aria-hidden="true" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {data.about.rightColumn.title2 && (
                            <div className="about-section-group">
                              <h4 className="about-section-title">
                                <span className="about-section-icon"><CloudIcon /></span>
                                <span>{data.about.rightColumn.title2}</span>
                              </h4>
                              <ul className="about-list">
                                {data.about.rightColumn.cloud?.map((item) => (
                                  <li key={item} className="about-list-item">
                                    <span className="about-bullet" aria-hidden="true" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Portrait Image Tile */}
              {data.imageSource && (
                <div className="tile about-image-tile span-2 rspan-2">
                  <img src={data.imageSource} alt="Muntasir Mamun" />
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
