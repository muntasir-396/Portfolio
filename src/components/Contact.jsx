import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/contact.css';

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);


const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 6 }}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

function Contact(props) {
  const { header } = props;
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(endpoints.contact, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = data?.email || 'muntasirmamun396@gmail.com';
    const emailSubject = encodeURIComponent(formData.subject || `Portfolio message from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
    setSubmitted(true);
  };

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        {data ? (
          <Fade triggerOnce>
            <div className="bento">
              {/* Contact Information & Socials Card */}
              <div className="tile contact-card span-3">
                <div className="contact-card-header">
                  <span className="tile-label">Connect</span>
                  <h3 className="contact-card-title">{data.title || 'Get in Touch'}</h3>
                  <p className="contact-card-text">
                    {data.intro || "Feel free to reach out anytime. I'm always open to discussing new opportunities or collaborations."}
                  </p>
                </div>

                {data.status && (
                  <div className="contact-status-pill">
                    <span className="contact-status-dot" />
                    <span>{data.status}</span>
                  </div>
                )}

                <div className="contact-info-list">
                  {data.email && (
                    <a href={`mailto:${data.email}`} className="contact-info-item">
                      <span className="contact-info-icon"><MailIcon /></span>
                      <span>{data.email}</span>
                    </a>
                  )}
                </div>

                {data.socialLinks && (
                  <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <span className="tile-label" style={{ display: 'block', marginBottom: '0.6rem' }}>
                      Social Profiles
                    </span>
                    <div className="contact-social-row">
                      {data.socialLinks.map((social) => (
                        <span key={social.network} className="contact-social-link">
                          <SocialIcon
                            url={social.href}
                            network={social.network}
                            bgColor={theme?.socialIconBgColor || '#f4f4f5'}
                            fgColor={theme?.background || '#09090b'}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: 48, height: 48 }}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Message Form Card */}
              <div className="tile contact-card span-3">
                <div className="contact-card-header">
                  <span className="tile-label">Direct Message</span>
                  <h3 className="contact-card-title">Send a Message</h3>
                  <p className="contact-card-text">
                    Drop your details below and I&apos;ll get back to you promptly.
                  </p>
                </div>

                {submitted && (
                  <div className="contact-form-alert" role="status">
                    Thank you! Your email client has been opened. You can also reach me directly at {data.email}.
                  </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="contact-name">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      className="contact-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="contact-email">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      className="contact-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="contact-subject">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      className="contact-input"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Question"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="contact-message">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      className="contact-textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-pill btn-accent contact-submit-btn"
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <span>Send Message</span>
                    <SendIcon />
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        ) : <FallbackSpinner />}
      </div>
    </>
  );
}

Contact.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Contact;
