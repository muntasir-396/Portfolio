import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState, useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import ThemeToggler from './ThemeToggler';

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const sectionIds = useMemo(() => {
    if (!data?.sections) return ['home', 'about', 'skills', 'education', 'experience', 'projects'];
    return data.sections
      .filter((s) => s.type !== 'link')
      .map((s) => s.href.replace(/^(\/|#)+/, '') || 'home');
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      // If close to bottom of document, activate the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        if (sectionIds.length > 0) {
          setActiveSection(sectionIds[sectionIds.length - 1]);
        }
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setExpanded(false);
    const targetId = href.replace(/^(\/|#)+/, '') || 'home';
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
      setActiveSection('home');
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
      setActiveSection(targetId);
    }
  };

  return (
    <Navbar
      fixed="top"
      expand="md"
      variant={theme.bsPrimaryVariant}
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        {data?.logo && (
          <Navbar.Brand
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <img
              src={data?.logo?.source}
              className="d-inline-block align-top"
              alt="main logo"
              style={
                data?.logo?.height && data?.logo?.width
                  ? { height: data?.logo?.height, width: data?.logo?.width }
                  : styles.logoStyle
              }
            />
          </Navbar.Brand>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {data
              && data.sections?.map((section) => {
                if (section?.type === 'link') {
                  return (
                    <ExternalNavLink
                      key={section.title}
                      href={section.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setExpanded(false)}
                      className="navbar__link"
                      theme={theme}
                    >
                      {section.title}
                    </ExternalNavLink>
                  );
                }

                const targetId = section.href.replace(/^(\/|#)+/, '') || 'home';
                const isActive = activeSection === targetId;

                return (
                  <InternalNavLink
                    key={section.title}
                    href={section.href}
                    onClick={(e) => handleNavClick(e, section.href)}
                    className={`navbar__link ${isActive ? 'active' : ''}`}
                    theme={theme}
                  >
                    {section.title}
                  </InternalNavLink>
                );
              })}
          </Nav>
          <ThemeToggler
            onClick={() => setExpanded(false)}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
