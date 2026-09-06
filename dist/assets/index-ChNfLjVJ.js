const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-BWLkh45l.js","assets/rolldown-runtime-hePW80VL.js","assets/modules-DdxiDmwn.js","assets/modules-CqLr8KVv.css","assets/vendor-DR4lWXe6.js","assets/ui-Dv5vySVp.js","assets/Header-wlkqIXT9.js","assets/About-D8uFxp3b.css","assets/Skills-CbxLt94l.js","assets/Skills-R_kupYeK.css","assets/Education-CicXtRXX.js","assets/timeline-CkiNMocd.css","assets/Experience-DkVRlXOp.js","assets/Projects-CJUIVZd3.js","assets/Projects-OQoXaCaW.css"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-hePW80VL.js";import{A as t,M as n,q as r}from"./modules-DdxiDmwn.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,s as d,u as f}from"./vendor-DR4lWXe6.js";import{i as p,n as m,r as h,t as g}from"./ui-Dv5vySVp.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var _=e(r(),1),v=f(),y=`darkMode`;function b(e=!1){let[t,n]=(0,_.useState)(()=>{try{let e=window.localStorage.getItem(y);if(e!==null)return e===`true`}catch{}return e});return(0,_.useEffect)(()=>{try{window.localStorage.setItem(y,t)}catch{}},[t]),{value:t,toggle:()=>n(e=>!e),enable:()=>n(!0),disable:()=>n(!1)}}var x=_.createContext(),S=e(n(),1),C={spinnerContainerStyle:{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`}};function w(){return(0,S.jsx)(`div`,{style:C.spinnerContainerStyle,children:(0,S.jsx)(i,{animation:`grow`})})}var T={navbar:`profile/navbar.json`,routes:`profile/routes.json`,home:`profile/home.json`,social:`profile/social.json`,about:`profile/about.json`,skills:`profile/skills.json`,education:`profile/education.json`,experiences:`profile/experiences.json`,projects:`profile/projects.json`,intro:`profile/intro.json`},E=e(t(),1);function D({onClick:e=()=>{}}){let t=t=>{t.toggle(),e()};return(0,S.jsx)(x.Consumer,{children:e=>{let n=e.darkMode.value;return(0,S.jsx)(`div`,{style:{marginBottom:8,display:`flex`,alignItems:`center`},children:(0,S.jsx)(`button`,{type:`button`,onClick:()=>t(e.darkMode),"aria-label":n?`Switch to light mode`:`Switch to dark mode`,style:{background:`transparent`,border:`none`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`8px`,color:n?`#fbc02d`:`#333`},children:n?(0,S.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,S.jsx)(`circle`,{cx:`12`,cy:`12`,r:`5`}),(0,S.jsx)(`line`,{x1:`12`,y1:`1`,x2:`12`,y2:`3`}),(0,S.jsx)(`line`,{x1:`12`,y1:`21`,x2:`12`,y2:`23`}),(0,S.jsx)(`line`,{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`}),(0,S.jsx)(`line`,{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`}),(0,S.jsx)(`line`,{x1:`1`,y1:`12`,x2:`3`,y2:`12`}),(0,S.jsx)(`line`,{x1:`21`,y1:`12`,x2:`23`,y2:`12`}),(0,S.jsx)(`line`,{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`}),(0,S.jsx)(`line`,{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`})]}):(0,S.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,S.jsx)(`path`,{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`})})})})}})}D.propTypes={onClick:E.default.func};var O={logoStyle:{width:50,height:40}},k=p.a`
  color: ${e=>e.theme.navbarTheme.linkColor};
  &:hover {
    color: ${e=>e.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${e=>e.theme.accentColor};
  }
`,A=p.a`
  color: ${e=>e.theme.navbarTheme.linkColor};
  &:hover {
    color: ${e=>e.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${e=>e.theme.accentColor};
  }
  &.active {
    color: ${e=>e.theme.navbarTheme.linkActiveColor};
  }
`,j=()=>{let e=(0,_.useContext)(h),[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(!1),[o,s]=(0,_.useState)(`home`);(0,_.useEffect)(()=>{fetch(T.navbar,{method:`GET`}).then(e=>e.json()).then(e=>n(e)).catch(e=>e)},[]);let c=(0,_.useMemo)(()=>t?.sections?t.sections.filter(e=>e.type!==`link`).map(e=>e.href.replace(/^(\/|#)+/,``)||`home`):[`home`,`about`,`skills`,`education`,`experience`,`projects`],[t]);(0,_.useEffect)(()=>{let e=()=>{let e=window.scrollY+140;if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-60){c.length>0&&s(c[c.length-1]);return}for(let t=c.length-1;t>=0;--t){let n=c[t],r=document.getElementById(n);if(r&&e>=r.offsetTop){s(n);break}}};return window.addEventListener(`scroll`,e,{passive:!0}),e(),()=>window.removeEventListener(`scroll`,e)},[c]);let u=(e,t)=>{e.preventDefault(),i(!1);let n=t.replace(/^(\/|#)+/,``)||`home`;if(n===`home`){let e=document.getElementById(`home`);e?e.scrollIntoView({behavior:`smooth`}):window.scrollTo({top:0,behavior:`smooth`}),window.history.pushState(null,``,`#home`),s(`home`);return}let r=document.getElementById(n);r&&(r.scrollIntoView({behavior:`smooth`}),window.history.pushState(null,``,`#${n}`),s(n))};return(0,S.jsx)(l,{fixed:`top`,expand:`md`,variant:e.bsPrimaryVariant,className:`navbar-custom`,expanded:r,children:(0,S.jsxs)(a,{children:[t?.logo&&(0,S.jsx)(l.Brand,{href:`#home`,onClick:e=>{e.preventDefault(),i(!1),window.scrollTo({top:0,behavior:`smooth`})},children:(0,S.jsx)(`img`,{src:t?.logo?.source,className:`d-inline-block align-top`,alt:`main logo`,style:t?.logo?.height&&t?.logo?.width?{height:t?.logo?.height,width:t?.logo?.width}:O.logoStyle})}),(0,S.jsx)(l.Toggle,{"aria-controls":`responsive-navbar-nav`,onClick:()=>i(!r)}),(0,S.jsxs)(l.Collapse,{id:`responsive-navbar-nav`,children:[(0,S.jsx)(d,{className:`me-auto`}),(0,S.jsx)(d,{children:t&&t.sections?.map(t=>{if(t?.type===`link`)return(0,S.jsx)(k,{href:t.href,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>i(!1),className:`navbar__link`,theme:e,children:t.title},t.title);let n=t.href.replace(/^(\/|#)+/,``)||`home`,r=o===n;return(0,S.jsx)(A,{href:t.href,onClick:e=>u(e,t.href),className:`navbar__link ${r?`active`:``}`,theme:e,children:t.title},t.title)})}),(0,S.jsx)(D,{onClick:()=>i(!1)})]})]})})},M=e(o(),1),N={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};function P(){let e=(0,_.useContext)(h),[t,n]=(0,_.useState)(null);return(0,_.useEffect)(()=>{fetch(T.social,{method:`GET`}).then(e=>e.json()).then(e=>n(e)).catch(e=>e)},[]),(0,S.jsx)(`div`,{className:`social`,children:t?t.social.map(t=>(0,S.jsx)(c,{style:N.iconStyle,url:t.href,network:t.network,bgColor:e.socialIconBgColor,fgColor:e.background,target:`_blank`,rel:`noopener`},t.network)):null})}function F(){let[e,t]=(0,_.useState)(null);(0,_.useEffect)(()=>{fetch(T.home,{method:`GET`}).then(e=>e.json()).then(e=>t(e)).catch(e=>e)},[]);let n=e=>{let t=document.getElementById(e);t&&(t.scrollIntoView({behavior:`smooth`}),window.history.pushState(null,``,`#${e}`))};return e?(0,S.jsx)(u,{triggerOnce:!0,className:`home-fade-container`,children:(0,S.jsx)(`section`,{className:`hero`,children:(0,S.jsxs)(`div`,{className:`bento`,children:[(0,S.jsxs)(`div`,{className:`tile hero-intro span-4 rspan-2`,children:[e?.status&&(0,S.jsx)(`span`,{className:`hero-eyebrow`,children:e.status}),(0,S.jsx)(`h1`,{className:`hero-name`,children:e?.name}),(0,S.jsxs)(`div`,{className:`hero-roles`,children:[(0,S.jsx)(`span`,{children:`I'm\xA0`}),(0,S.jsx)(M.default,{options:{loop:!0,autoStart:!0,strings:e?.roles}})]}),e?.tagline&&(0,S.jsx)(`p`,{className:`hero-tagline`,children:e.tagline}),(0,S.jsxs)(`div`,{className:`hero-cta`,children:[(0,S.jsx)(`a`,{className:`btn-pill btn-accent`,href:`#projects`,onClick:e=>{e.preventDefault(),n(`projects`)},children:`View my work`}),(0,S.jsx)(`a`,{className:`btn-pill btn-ghost`,href:`#about`,onClick:e=>{e.preventDefault(),n(`about`)},children:`About me`})]})]}),(0,S.jsx)(`div`,{className:`tile span-2`,style:{padding:0,overflow:`hidden`},children:(0,S.jsx)(`img`,{src:`images/about/profile.png`,alt:`Profile`,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,S.jsxs)(`div`,{className:`tile hero-social span-2`,children:[(0,S.jsx)(`span`,{className:`tile-label`,children:`Find me`}),(0,S.jsx)(P,{})]})]})})}):(0,S.jsx)(w,{})}function I(e,t,n,r,i){return r+(e-t)/(n-t)*(i-r)}function L(e,t){let n=Math.min(1,Math.max(0,e));if(t)return{opacity:I(n,0,1,1,.85),blur:0,scale:1,brightness:I(n,0,1,1,.8),overlayOpacity:I(n,0,1,.45,.54)};let r,i,a,o,s;return n<=.25?(r=I(n,0,.25,1,.96),i=I(n,0,.25,0,1.5),a=I(n,0,.25,1,1.008),o=I(n,0,.25,1,.94),s=I(n,0,.25,.45,.48)):n<=.5?(r=I(n,.25,.5,.96,.92),i=I(n,.25,.5,1.5,2.8),a=I(n,.25,.5,1.008,1.015),o=I(n,.25,.5,.94,.88),s=I(n,.25,.5,.48,.5)):n<=.75?(r=I(n,.5,.75,.92,.88),i=I(n,.5,.75,2.8,3.8),a=I(n,.5,.75,1.015,1.02),o=I(n,.5,.75,.88,.82),s=I(n,.5,.75,.5,.52)):(r=I(n,.75,1,.88,.85),i=I(n,.75,1,3.8,4.5),a=I(n,.75,1,1.02,1.025),o=I(n,.75,1,.82,.78),s=I(n,.75,1,.52,.54)),{opacity:r,blur:i,scale:a,brightness:o,overlayOpacity:s}}var R=()=>{let e=(0,_.useRef)(null),t=(0,_.useRef)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(null),[i,a]=(0,_.useState)({headline:`Building Intelligent Systems for the Real World.`,scrollButton:`SCROLL TO EXPLORE ↓`});return(0,_.useEffect)(()=>{fetch(T.intro).then(e=>e.json()).then(e=>{e&&a(t=>({...t,...e}))}).catch(()=>{})},[]),(0,_.useEffect)(()=>{let e=r.current;if(e){e.muted=!0,e.defaultMuted=!0;let t=e.play();t!==void 0&&t.catch(()=>{})}},[]),(0,_.useEffect)(()=>{let r=null,i=window.matchMedia(`(prefers-reduced-motion: reduce)`),a=i.matches,o=e=>{a=e.matches,s()};i.addEventListener&&i.addEventListener(`change`,o);let s=()=>{let r=window.scrollY||window.pageYOffset||0,i=document.getElementById(`intro-track`),o=r/(i?i.offsetHeight:window.innerHeight),s=Math.min(1,Math.max(0,o)),c=L(o,a);if(e.current&&(e.current.style.opacity=c.opacity.toFixed(3),e.current.style.filter=c.blur>.05?`blur(${c.blur.toFixed(1)}px) brightness(${c.brightness.toFixed(2)})`:`brightness(${c.brightness.toFixed(2)})`,e.current.style.transform=`scale(${c.scale.toFixed(4)}) translateZ(0)`,e.current.style.visibility=`visible`,e.current.style.pointerEvents=`none`),t.current&&(t.current.style.opacity=c.overlayOpacity.toFixed(2)),n.current){let e=Math.max(0,1-s*1.8),t=s*-60;n.current.style.opacity=e.toFixed(3),n.current.style.transform=`translateY(${t.toFixed(1)}px)`,n.current.style.visibility=e>.01?`visible`:`hidden`,n.current.style.pointerEvents=e>.1?`auto`:`none`}},c=()=>{r||=requestAnimationFrame(()=>{r=null,s()})};return window.addEventListener(`scroll`,c,{passive:!0}),window.addEventListener(`resize`,c,{passive:!0}),s(),()=>{r&&cancelAnimationFrame(r),window.removeEventListener(`scroll`,c),window.removeEventListener(`resize`,c),i.removeEventListener&&i.removeEventListener(`change`,o)}},[]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`div`,{ref:e,className:`intro-video-bg`,"aria-hidden":`true`,children:[(0,S.jsxs)(`video`,{ref:r,className:`intro-video__element`,poster:`/intro-poster.jpg`,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,preload:`auto`,children:[(0,S.jsx)(`source`,{src:`/intro-video.mp4`,type:`video/mp4`}),(0,S.jsx)(`source`,{src:`/intro-video.mp4.mov`,type:`video/quicktime`})]}),(0,S.jsx)(`div`,{ref:t,className:`intro-overlay`})]}),(0,S.jsx)(`div`,{id:`intro-track`,className:`intro-screen`,children:(0,S.jsxs)(`div`,{ref:n,className:`intro-content`,children:[(0,S.jsx)(`h1`,{className:`intro-headline`,children:i.headline}),(0,S.jsxs)(`button`,{type:`button`,className:`intro-scroll-btn`,onClick:()=>{let e=document.getElementById(`home`);e?e.scrollIntoView({behavior:`smooth`}):window.scrollTo({top:window.innerHeight,behavior:`smooth`})},"aria-label":`Scroll to explore portfolio`,children:[(0,S.jsx)(`span`,{children:i.scrollButton}),(0,S.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`intro-arrow-icon`,children:(0,S.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]})]})})]})},z=`modulepreload`,B=function(e){return`/`+e},V={},H=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=B(t,n),t=s(t),t in V)return;V[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:z,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},U={About:_.lazy(()=>H(()=>import(`./About-BWLkh45l.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Skills:_.lazy(()=>H(()=>import(`./Skills-CbxLt94l.js`),__vite__mapDeps([8,1,2,3,4,5,6,9]))),Education:_.lazy(()=>H(()=>import(`./Education-CicXtRXX.js`),__vite__mapDeps([10,1,2,3,4,5,6,11]))),Experience:_.lazy(()=>H(()=>import(`./Experience-DkVRlXOp.js`),__vite__mapDeps([12,1,2,3,4,5,6,11]))),Projects:_.lazy(()=>H(()=>import(`./Projects-CJUIVZd3.js`),__vite__mapDeps([13,1,2,3,4,5,6,14])))};function W(){let[e,t]=(0,_.useState)(null);return(0,_.useEffect)(()=>{fetch(T.routes,{method:`GET`}).then(e=>e.json()).then(e=>t(e)).catch(e=>e)},[]),(0,_.useEffect)(()=>{`scrollRestoration`in window.history&&(window.history.scrollRestoration=`manual`),window.scrollTo(0,0),window.location.hash&&window.history.replaceState(null,``,window.location.pathname);let e=setTimeout(()=>{window.scrollTo(0,0)},50);return()=>clearTimeout(e)},[]),(0,S.jsxs)(`div`,{className:`MainApp`,children:[(0,S.jsx)(R,{}),(0,S.jsx)(j,{}),(0,S.jsx)(`main`,{className:`main`,children:(0,S.jsxs)(_.Suspense,{fallback:(0,S.jsx)(w,{}),children:[(0,S.jsx)(`section`,{id:`home`,className:`portfolio-section`,children:(0,S.jsx)(F,{})}),e&&e.sections.map(e=>{let t=U[e.component];if(!t)return null;let n=e.path.replace(/^\//,``);return(0,S.jsx)(`section`,{id:n,className:`portfolio-section`,children:(0,S.jsx)(t,{header:e.headerTitle})},e.headerTitle)})]})})]})}var G=g`
  :root {
    /* Colour (theme-driven) */
    --bg: ${({theme:e})=>e.background};
    --text: ${({theme:e})=>e.color};
    --text-muted: ${({theme:e})=>e.textMuted};
    --accent: ${({theme:e})=>e.accentColor};
    --accent-2: ${({theme:e})=>e.accentColor2};
    --accent-soft: ${({theme:e})=>e.accentSoft};
    --surface: ${({theme:e})=>e.cardBackground};
    --surface-2: ${({theme:e})=>e.cardFooterBackground};
    --border: ${({theme:e})=>e.cardBorderColor};
    --navbar-bg: ${({theme:e})=>e.navbarBackground};
    --timeline-line: ${({theme:e})=>e.timelineLineColor};
    --gradient: linear-gradient(135deg, var(--accent), var(--accent-2));

    /* Elevation */
    --shadow-sm: ${({theme:e})=>e.shadowSm};
    --shadow-md: ${({theme:e})=>e.shadowMd};

    /* Spacing scale (4px base) */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.5rem;
    --space-6: 2rem;
    --space-7: 3rem;
    --space-8: 4rem;

    /* Radius */
    --radius-sm: 10px;
    --radius-md: 16px;
    --radius-lg: 22px;

    /* Motion */
    --ease: cubic-bezier(0.4, 0, 0.2, 1);
    --dur: 0.25s;

    /* Type */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Helvetica Neue', sans-serif;
    --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
    --font-mono: 'JetBrains Mono', source-code-pro, Menlo, Monaco, Consolas, monospace;
  }

  html {
    background-color: #06060a;
    scrollbar-color: var(--border) transparent;
  }

  body {
    --bs-body-bg: transparent;
    --bs-body-color: ${({theme:e})=>e.color};
    background-color: transparent !important;
    background-image: none !important;
    color: ${({theme:e})=>e.color};
    transition: color 0.3s var(--ease);
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  ::selection {
    background: var(--accent);
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`,K={background:`#f4f4f6`,color:`#18181b`,textMuted:`#52525b`,accentColor:`#4f46e5`,accentColor2:`#7c3aed`,accentSoft:`rgba(79, 70, 229, 0.12)`,glow1:`rgba(79, 70, 229, 0.10)`,glow2:`rgba(124, 58, 237, 0.08)`,chronoTheme:{cardBgColor:`#ffffff`,cardForeColor:`#18181b`,titleColor:`white`},timelineLineColor:`#e4e4e7`,cardBackground:`#ffffff`,cardFooterBackground:`#fafafa`,cardBorderColor:`rgba(0, 0, 0, 0.08)`,navbarBackground:`rgba(244, 244, 246, 0.72)`,shadowSm:`0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)`,shadowMd:`0 8px 24px rgba(0, 0, 0, 0.10), 0 16px 48px rgba(0, 0, 0, 0.12)`,navbarTheme:{linkColor:`#52525b`,linkHoverColor:`#18181b`,linkActiveColor:`#18181b`},bsPrimaryVariant:`light`,bsSecondaryVariant:`dark`,socialIconBgColor:`#18181b`},q={background:`#09090b`,color:`#f4f4f5`,textMuted:`#a1a1aa`,accentColor:`#818cf8`,accentColor2:`#c084fc`,accentSoft:`rgba(129, 140, 248, 0.14)`,glow1:`rgba(99, 102, 241, 0.18)`,glow2:`rgba(168, 85, 247, 0.12)`,chronoTheme:{cardBgColor:`#141417`,cardForeColor:`#f4f4f5`,titleColor:`black`},timelineLineColor:`#27272a`,cardBackground:`#141417`,cardFooterBackground:`#1b1b1f`,cardBorderColor:`rgba(255, 255, 255, 0.08)`,navbarBackground:`rgba(9, 9, 11, 0.62)`,shadowSm:`0 1px 2px rgba(0, 0, 0, 0.40), 0 4px 16px rgba(0, 0, 0, 0.40)`,shadowMd:`0 8px 24px rgba(0, 0, 0, 0.55), 0 16px 48px rgba(0, 0, 0, 0.60)`,navbarTheme:{linkColor:`#a1a1aa`,linkHoverColor:`#fafafa`,linkActiveColor:`#fafafa`},bsPrimaryVariant:`dark`,bsSecondaryVariant:`light`,socialIconBgColor:`#f4f4f5`};function J(){let e=b(!0);return(0,S.jsx)(x.Provider,{value:{darkMode:e},children:(0,S.jsxs)(m,{theme:e.value?q:K,children:[(0,S.jsx)(G,{}),(0,S.jsx)(`div`,{className:`App`,children:(0,S.jsx)(s,{children:(0,S.jsx)(W,{})})})]})})}var Y=document.getElementById(`root`);(0,v.createRoot)(Y).render((0,S.jsx)(_.StrictMode,{children:(0,S.jsx)(J,{})}));export{w as n,T as t};