const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-BpMv4LK4.js","assets/rolldown-runtime-hePW80VL.js","assets/modules-JBFQm2KT.js","assets/modules-CqLr8KVv.css","assets/vendor-tBSbMn_-.js","assets/ui-DyFuPUXv.js","assets/Header-891ztvuG.js","assets/About-l2_kbeMk.css","assets/Skills-TpAtDCsT.js","assets/Skills-R_kupYeK.css","assets/Education-9pULlJPq.js","assets/timeline-CkiNMocd.css","assets/Experience-DkEkxol9.js","assets/Projects-BZZyd7dK.js","assets/Projects-OQoXaCaW.css","assets/Achievements-wVM8JtDP.js","assets/Achievements-CcCgt5I2.css","assets/Contact-18GUYSnZ.js","assets/Contact-DxqtnPzM.css"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-hePW80VL.js";import{M as t,q as n}from"./modules-JBFQm2KT.js";import{a as r,c as i,i as a,l as o,o as s,s as c}from"./vendor-tBSbMn_-.js";import{i as l,n as u,r as d,t as f}from"./ui-DyFuPUXv.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var p=e(n(),1),m=o(),h=`darkMode`;function g(e=!1){let[t,n]=(0,p.useState)(()=>{try{let e=window.localStorage.getItem(h);if(e!==null)return e===`true`}catch{}return e});return(0,p.useEffect)(()=>{try{window.localStorage.setItem(h,t)}catch{}},[t]),{value:t,toggle:()=>n(e=>!e),enable:()=>n(!0),disable:()=>n(!1)}}var _=p.createContext(),v=e(t(),1),y={spinnerContainerStyle:{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`}};function b(){return(0,v.jsx)(`div`,{style:y.spinnerContainerStyle,children:(0,v.jsx)(a,{animation:`grow`})})}var x={navbar:`profile/navbar.json`,routes:`profile/routes.json`,home:`profile/home.json`,social:`profile/social.json`,about:`profile/about.json`,skills:`profile/skills.json`,education:`profile/education.json`,experiences:`profile/experiences.json`,projects:`profile/projects.json`,intro:`profile/intro.json`,contact:`profile/contact.json`,achievements:`profile/achievements.json`},S={logoStyle:{width:50,height:40}},C=l.a`
  color: ${e=>e.theme.navbarTheme.linkColor};
  &:hover {
    color: ${e=>e.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${e=>e.theme.accentColor};
  }
`,w=l.a`
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
`,T=()=>{let e=(0,p.useContext)(d),[t,n]=(0,p.useState)(null),[i,a]=(0,p.useState)(!1),[o,l]=(0,p.useState)(`about`);(0,p.useEffect)(()=>{fetch(x.navbar,{method:`GET`}).then(e=>e.json()).then(e=>n(e)).catch(e=>e)},[]);let u=(0,p.useMemo)(()=>t?.sections?t.sections.filter(e=>e.type!==`link`).map(e=>e.href.replace(/^(\/|#)+/,``)||`about`):[`about`,`skills`,`education`,`experience`,`projects`,`achievements`,`contact`],[t]);(0,p.useEffect)(()=>{let e=()=>{let e=window.scrollY+140;if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-60){u.length>0&&l(u[u.length-1]);return}for(let t=u.length-1;t>=0;--t){let n=u[t],r=document.getElementById(n);if(r&&e>=r.offsetTop){l(n);break}}};return window.addEventListener(`scroll`,e,{passive:!0}),e(),()=>window.removeEventListener(`scroll`,e)},[u]);let f=(e,t)=>{e.preventDefault(),a(!1);let n=t.replace(/^(\/|#)+/,``)||`about`,r=document.getElementById(n);r?(r.scrollIntoView({behavior:`smooth`}),window.history.pushState(null,``,`#${n}`),l(n)):window.scrollTo({top:0,behavior:`smooth`})};return(0,v.jsx)(r,{fixed:`top`,expand:`md`,variant:e.bsPrimaryVariant,className:`navbar-custom`,expanded:i,children:(0,v.jsxs)(c,{children:[t?.logo&&(0,v.jsx)(r.Brand,{href:`#about`,onClick:e=>{e.preventDefault(),a(!1),window.scrollTo({top:0,behavior:`smooth`})},children:(0,v.jsx)(`img`,{src:t?.logo?.source,className:`d-inline-block align-top`,alt:`main logo`,style:t?.logo?.height&&t?.logo?.width?{height:t?.logo?.height,width:t?.logo?.width}:S.logoStyle})}),(0,v.jsx)(r.Toggle,{"aria-controls":`responsive-navbar-nav`,onClick:()=>a(!i)}),(0,v.jsxs)(r.Collapse,{id:`responsive-navbar-nav`,children:[(0,v.jsx)(s,{className:`me-auto`}),(0,v.jsx)(s,{children:t&&t.sections?.map(t=>{if(t?.type===`link`)return(0,v.jsx)(C,{href:t.href,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>a(!1),className:`navbar__link`,theme:e,children:t.title},t.title);let n=t.href.replace(/^(\/|#)+/,``)||`home`,r=o===n;return(0,v.jsx)(w,{href:t.href,onClick:e=>f(e,t.href),className:`navbar__link ${r?`active`:``}`,theme:e,children:t.title},t.title)})})]})]})})};function E(e,t,n,r,i){return r+(e-t)/(n-t)*(i-r)}function D(e,t){let n=Math.min(1,Math.max(0,e));if(t)return{opacity:E(n,0,1,1,.85),blur:0,scale:1,brightness:E(n,0,1,1,.8),overlayOpacity:E(n,0,1,.45,.54)};let r,i,a,o,s;return n<=.25?(r=E(n,0,.25,1,.96),i=E(n,0,.25,0,1.5),a=E(n,0,.25,1,1.008),o=E(n,0,.25,1,.94),s=E(n,0,.25,.45,.48)):n<=.5?(r=E(n,.25,.5,.96,.92),i=E(n,.25,.5,1.5,2.8),a=E(n,.25,.5,1.008,1.015),o=E(n,.25,.5,.94,.88),s=E(n,.25,.5,.48,.5)):n<=.75?(r=E(n,.5,.75,.92,.88),i=E(n,.5,.75,2.8,3.8),a=E(n,.5,.75,1.015,1.02),o=E(n,.5,.75,.88,.82),s=E(n,.5,.75,.5,.52)):(r=E(n,.75,1,.88,.85),i=E(n,.75,1,3.8,4.5),a=E(n,.75,1,1.02,1.025),o=E(n,.75,1,.82,.78),s=E(n,.75,1,.52,.54)),{opacity:r,blur:i,scale:a,brightness:o,overlayOpacity:s}}var O=()=>{let e=(0,p.useRef)(null),t=(0,p.useRef)(null),n=(0,p.useRef)(null),r=(0,p.useRef)(null),[i,a]=(0,p.useState)({headline:`Building Intelligent Systems for the Real World.`,scrollButton:`SCROLL TO EXPLORE ↓`});return(0,p.useEffect)(()=>{fetch(x.intro).then(e=>e.json()).then(e=>{e&&a(t=>({...t,...e}))}).catch(()=>{})},[]),(0,p.useEffect)(()=>{let e=r.current;if(e){e.muted=!0,e.defaultMuted=!0;let t=e.play();t!==void 0&&t.catch(()=>{})}},[]),(0,p.useEffect)(()=>{let r=null,i=window.matchMedia(`(prefers-reduced-motion: reduce)`),a=i.matches,o=e=>{a=e.matches,s()};i.addEventListener&&i.addEventListener(`change`,o);let s=()=>{let r=window.scrollY||window.pageYOffset||0,i=document.getElementById(`intro-track`),o=r/(i?i.offsetHeight:window.innerHeight),s=Math.min(1,Math.max(0,o)),c=D(o,a);if(e.current&&(e.current.style.opacity=c.opacity.toFixed(3),e.current.style.filter=c.blur>.05?`blur(${c.blur.toFixed(1)}px) brightness(${c.brightness.toFixed(2)})`:`brightness(${c.brightness.toFixed(2)})`,e.current.style.transform=`scale(${c.scale.toFixed(4)}) translateZ(0)`,e.current.style.visibility=`visible`,e.current.style.pointerEvents=`none`),t.current&&(t.current.style.opacity=c.overlayOpacity.toFixed(2)),n.current){let e=Math.max(0,1-s*1.8),t=s*-60;n.current.style.opacity=e.toFixed(3),n.current.style.transform=`translateY(${t.toFixed(1)}px)`,n.current.style.visibility=e>.01?`visible`:`hidden`,n.current.style.pointerEvents=e>.1?`auto`:`none`}},c=()=>{r||=requestAnimationFrame(()=>{r=null,s()})};return window.addEventListener(`scroll`,c,{passive:!0}),window.addEventListener(`resize`,c,{passive:!0}),s(),()=>{r&&cancelAnimationFrame(r),window.removeEventListener(`scroll`,c),window.removeEventListener(`resize`,c),i.removeEventListener&&i.removeEventListener(`change`,o)}},[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{ref:e,className:`intro-video-bg`,"aria-hidden":`true`,children:[(0,v.jsxs)(`video`,{ref:r,className:`intro-video__element`,poster:`/intro-poster.jpg`,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,preload:`auto`,children:[(0,v.jsx)(`source`,{src:`/intro-video.mp4`,type:`video/mp4`}),(0,v.jsx)(`source`,{src:`/intro-video.mp4.mov`,type:`video/quicktime`})]}),(0,v.jsx)(`div`,{ref:t,className:`intro-overlay`})]}),(0,v.jsx)(`div`,{id:`intro-track`,className:`intro-screen`,children:(0,v.jsxs)(`div`,{ref:n,className:`intro-content`,children:[(0,v.jsx)(`h1`,{className:`intro-headline`,children:i.headline}),(0,v.jsxs)(`button`,{type:`button`,className:`intro-scroll-btn`,onClick:()=>{let e=document.getElementById(`about`);e?e.scrollIntoView({behavior:`smooth`}):window.scrollTo({top:window.innerHeight,behavior:`smooth`})},"aria-label":`Scroll to explore portfolio`,children:[(0,v.jsx)(`span`,{children:i.scrollButton}),(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`intro-arrow-icon`,children:(0,v.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]})]})})]})},k=()=>{let[e,t]=(0,p.useState)(!1),n=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let e=n.current;e&&(e.volume=.5)},[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`audio`,{ref:n,loop:!0,preload:`metadata`,onPlay:()=>t(!0),onPause:()=>t(!1),children:[(0,v.jsx)(`source`,{src:`/music/music.mp3`,type:`audio/mpeg`}),(0,v.jsx)(`source`,{src:`/music/background.mp3`,type:`audio/mpeg`}),(0,v.jsx)(`source`,{src:`/music/audio.mp3`,type:`audio/mpeg`}),(0,v.jsx)(`source`,{src:`/music/song.mp3`,type:`audio/mpeg`}),(0,v.jsx)(`source`,{src:`/music/music.m4a`,type:`audio/mp4`}),(0,v.jsx)(`source`,{src:`/music/music.wav`,type:`audio/wav`})]}),(0,v.jsxs)(`button`,{type:`button`,className:`music-player-btn`,onClick:r=>{r?.stopPropagation();let i=n.current;if(i)if(e)i.pause(),t(!1);else{i.volume=.5;let e=i.play();e!==void 0&&e.then(()=>{t(!0)}).catch(()=>{t(!1)})}},"aria-label":e?`Mute background music`:`Play background music`,title:e?`Mute Music`:`Play Music`,children:[(0,v.jsx)(`span`,{className:`music-tooltip`,children:e?`Mute Music`:`Play Music`}),e?(0,v.jsxs)(`div`,{className:`music-equalizer`,"aria-hidden":`true`,children:[(0,v.jsx)(`span`,{className:`music-bar`}),(0,v.jsx)(`span`,{className:`music-bar`}),(0,v.jsx)(`span`,{className:`music-bar`}),(0,v.jsx)(`span`,{className:`music-bar`})]}):(0,v.jsxs)(`svg`,{className:`music-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,v.jsx)(`polygon`,{points:`11 5 6 9 2 9 2 15 6 15 11 19 11 5`}),(0,v.jsx)(`line`,{x1:`23`,y1:`9`,x2:`17`,y2:`15`}),(0,v.jsx)(`line`,{x1:`17`,y1:`9`,x2:`23`,y2:`15`})]})]})]})},A=`modulepreload`,j=function(e){return`/`+e},M={},N=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=j(t,n),t=s(t),t in M)return;M[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:A,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},P={About:p.lazy(()=>N(()=>import(`./About-BpMv4LK4.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Skills:p.lazy(()=>N(()=>import(`./Skills-TpAtDCsT.js`),__vite__mapDeps([8,1,2,3,4,5,6,9]))),Education:p.lazy(()=>N(()=>import(`./Education-9pULlJPq.js`),__vite__mapDeps([10,1,2,3,4,5,6,11]))),Experience:p.lazy(()=>N(()=>import(`./Experience-DkEkxol9.js`),__vite__mapDeps([12,1,2,3,4,5,6,11]))),Projects:p.lazy(()=>N(()=>import(`./Projects-BZZyd7dK.js`),__vite__mapDeps([13,1,2,3,4,5,6,14]))),Achievements:p.lazy(()=>N(()=>import(`./Achievements-wVM8JtDP.js`),__vite__mapDeps([15,1,2,3,4,5,6,16]))),Contact:p.lazy(()=>N(()=>import(`./Contact-18GUYSnZ.js`),__vite__mapDeps([17,1,2,3,4,5,6,18])))};function F(){let[e,t]=(0,p.useState)(null);return(0,p.useEffect)(()=>{fetch(x.routes,{method:`GET`}).then(e=>e.json()).then(e=>t(e)).catch(e=>e)},[]),(0,p.useEffect)(()=>{`scrollRestoration`in window.history&&(window.history.scrollRestoration=`manual`),window.scrollTo(0,0),window.location.hash&&window.history.replaceState(null,``,window.location.pathname);let e=setTimeout(()=>{window.scrollTo(0,0)},50);return()=>clearTimeout(e)},[]),(0,v.jsxs)(`div`,{className:`MainApp`,children:[(0,v.jsx)(O,{}),(0,v.jsx)(T,{}),(0,v.jsx)(k,{}),(0,v.jsx)(`main`,{className:`main`,children:(0,v.jsx)(p.Suspense,{fallback:(0,v.jsx)(b,{}),children:e&&e.sections.map(e=>{let t=P[e.component];if(!t)return null;let n=e.path.replace(/^\//,``);return(0,v.jsx)(`section`,{id:n,className:`portfolio-section`,children:(0,v.jsx)(t,{header:e.headerTitle})},e.headerTitle)})})})]})}var I=f`
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
`,L={background:`#f4f4f6`,color:`#18181b`,textMuted:`#52525b`,accentColor:`#4f46e5`,accentColor2:`#7c3aed`,accentSoft:`rgba(79, 70, 229, 0.12)`,glow1:`rgba(79, 70, 229, 0.10)`,glow2:`rgba(124, 58, 237, 0.08)`,chronoTheme:{cardBgColor:`#ffffff`,cardForeColor:`#18181b`,titleColor:`white`},timelineLineColor:`#e4e4e7`,cardBackground:`#ffffff`,cardFooterBackground:`#fafafa`,cardBorderColor:`rgba(0, 0, 0, 0.08)`,navbarBackground:`rgba(244, 244, 246, 0.72)`,shadowSm:`0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)`,shadowMd:`0 8px 24px rgba(0, 0, 0, 0.10), 0 16px 48px rgba(0, 0, 0, 0.12)`,navbarTheme:{linkColor:`#52525b`,linkHoverColor:`#18181b`,linkActiveColor:`#18181b`},bsPrimaryVariant:`light`,bsSecondaryVariant:`dark`,socialIconBgColor:`#18181b`},R={background:`#09090b`,color:`#f4f4f5`,textMuted:`#a1a1aa`,accentColor:`#818cf8`,accentColor2:`#c084fc`,accentSoft:`rgba(129, 140, 248, 0.14)`,glow1:`rgba(99, 102, 241, 0.18)`,glow2:`rgba(168, 85, 247, 0.12)`,chronoTheme:{cardBgColor:`#141417`,cardForeColor:`#f4f4f5`,titleColor:`black`},timelineLineColor:`#27272a`,cardBackground:`#141417`,cardFooterBackground:`#1b1b1f`,cardBorderColor:`rgba(255, 255, 255, 0.08)`,navbarBackground:`rgba(9, 9, 11, 0.62)`,shadowSm:`0 1px 2px rgba(0, 0, 0, 0.40), 0 4px 16px rgba(0, 0, 0, 0.40)`,shadowMd:`0 8px 24px rgba(0, 0, 0, 0.55), 0 16px 48px rgba(0, 0, 0, 0.60)`,navbarTheme:{linkColor:`#a1a1aa`,linkHoverColor:`#fafafa`,linkActiveColor:`#fafafa`},bsPrimaryVariant:`dark`,bsSecondaryVariant:`light`,socialIconBgColor:`#f4f4f5`};function z(){let e=g(!0);return(0,v.jsx)(_.Provider,{value:{darkMode:e},children:(0,v.jsxs)(u,{theme:e.value?R:L,children:[(0,v.jsx)(I,{}),(0,v.jsx)(`div`,{className:`App`,children:(0,v.jsx)(i,{children:(0,v.jsx)(F,{})})})]})})}var B=document.getElementById(`root`);(0,m.createRoot)(B).render((0,v.jsx)(p.StrictMode,{children:(0,v.jsx)(z,{})}));export{b as n,x as t};