import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/achievements.css';

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const EnlargeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function Achievements(props) {
  const { header } = props;
  const [data, setData] = useState(null);
  const [lightboxMedia, setLightboxMedia] = useState(null);

  useEffect(() => {
    fetch(endpoints.achievements, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => err);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxMedia(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    if (lightboxMedia) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxMedia, closeLightbox]);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        {data ? (
          <Fade triggerOnce>
            <div className="bento">
              {data.achievements?.map((item) => (
                <div key={item.id || item.title} className="tile tile--interactive achievement-card span-3">
                  {/* Media: Image / Video */}
                  {(item.image || item.video) && (
                    <div className="achievement-media-container">
                      {item.image && !item.video && (
                        <div
                          className="achievement-image-wrapper"
                          onClick={() => setLightboxMedia({
                            type: 'image',
                            src: item.image,
                            title: item.title,
                            desc: item.description,
                          })}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              setLightboxMedia({
                                type: 'image',
                                src: item.image,
                                title: item.title,
                                desc: item.description,
                              });
                            }
                          }}
                          aria-label={`View large image for ${item.title}`}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="achievement-thumb-img"
                          />
                          <div className="achievement-media-overlay">
                            <span className="achievement-enlarge-pill">
                              <EnlargeIcon />
                              <span>Click to enlarge</span>
                            </span>
                          </div>
                        </div>
                      )}

                      {item.video && (
                        <div className="achievement-video-wrapper">
                          <video
                            src={item.video}
                            className="achievement-thumb-video"
                            controls
                            preload="metadata"
                            poster={item.image || undefined}
                          >
                            <track kind="captions" />
                          </video>
                          <div className="achievement-video-actions">
                            <button
                              type="button"
                              className="achievement-video-large-btn"
                              onClick={() => setLightboxMedia({
                                type: 'video',
                                src: item.video,
                                title: item.title,
                                desc: item.description,
                              })}
                            >
                              <EnlargeIcon />
                              <span>Large View</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Header info */}
                  <div className="achievement-header-info">
                    <div className="achievement-meta-row">
                      {item.issuer && (
                        <span className="achievement-issuer">{item.issuer}</span>
                      )}
                      {item.date && (
                        <span className="achievement-date">{item.date}</span>
                      )}
                    </div>
                    <h3 className="achievement-title">{item.title}</h3>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="achievement-desc">{item.description}</p>
                  )}

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="achievement-tags-row">
                      {item.tags.map((tag) => (
                        <span key={tag} className="achievement-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Link & Video Button */}
                  <div className="achievement-bottom-row">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link-btn"
                      >
                        <span>{item.linkText || 'View Link'}</span>
                        <ExternalLinkIcon />
                      </a>
                    ) : <span />}

                    {item.image && item.video && (
                      <button
                        type="button"
                        className="btn-pill btn-ghost"
                        style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}
                        onClick={() => setLightboxMedia({
                          type: 'image',
                          src: item.image,
                          title: item.title,
                          desc: item.description,
                        })}
                      >
                        View Photo
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        ) : <FallbackSpinner />}
      </div>

      {/* Lightbox Modal (Large View with Top-Left Go Back) */}
      {lightboxMedia && (
        <div
          className="achievement-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Top-Left Go Back Option */}
          <button
            type="button"
            className="achievement-lightbox-back-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Go back to portfolio"
          >
            <ArrowLeftIcon />
            <span>Go Back</span>
          </button>

          <div
            className="achievement-lightbox-content"
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            {lightboxMedia.type === 'image' && (
              <img
                src={lightboxMedia.src}
                alt={lightboxMedia.title || 'Achievement'}
                className="achievement-lightbox-img"
              />
            )}

            {lightboxMedia.type === 'video' && (
              <video
                src={lightboxMedia.src}
                className="achievement-lightbox-video"
                controls
                autoPlay
              >
                <track kind="captions" />
              </video>
            )}

            {(lightboxMedia.title || lightboxMedia.desc) && (
              <div className="achievement-lightbox-caption">
                {lightboxMedia.title && (
                  <div className="achievement-lightbox-title">
                    {lightboxMedia.title}
                  </div>
                )}
                {lightboxMedia.desc && (
                  <div className="achievement-lightbox-desc">
                    {lightboxMedia.desc}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </>
  );
}

Achievements.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Achievements;
