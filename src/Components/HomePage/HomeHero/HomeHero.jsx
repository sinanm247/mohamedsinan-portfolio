import { useEffect, useRef } from 'react';
import { PROFILE } from '../../../Datasets/siteContent';
import './HomeHero.scss';

const TAGS = ['React', 'Node.js', 'MongoDB'];

export default function HomeHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const onScroll = () => {
      const progress = Math.min(window.scrollY / section.offsetHeight, 1);
      section.style.setProperty('--scroll-progress', progress.toFixed(3));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="home-hero" id="top" aria-labelledby="home-hero-title">
      <div className="home-hero__shade" aria-hidden="true" />

      <div className="home-hero__stage">
        <div className="home-hero__mid">
          <p className="home-hero__eyebrow">
            <span className="home-hero__eyebrow-dot" aria-hidden="true" />
            {PROFILE.role}
          </p>
          <h1 id="home-hero-title" className="home-hero__heading">
            Mohamed
            <br />
            Sinan
          </h1>
          <p className="home-hero__sub">{PROFILE.lead}</p>
          <a className="home-hero__cta" href={`mailto:${PROFILE.email}`}>
            <span>Email me</span>
            <span className="home-hero__cta-line" aria-hidden="true" />
            <span className="home-hero__cta-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="home-hero__figure">
          <p className="home-hero__wordmark" aria-hidden="true">SINAN</p>
          <img
            className="home-hero__portrait"
            src={PROFILE.portraitTall}
            alt="Mohamed Sinan"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="home-hero__bottom">
        <ul className="home-hero__tags" aria-label="Core stack">
          {TAGS.map((tag, index) => (
            <li key={tag}>
              {index === 0 && <em>01/</em>}
              {tag}
            </li>
          ))}
        </ul>
        <div className="home-hero__footer-strip">
          <span>© {new Date().getFullYear()}</span>
          <span className="home-hero__ticks" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} />
            ))}
          </span>
          <span>{PROFILE.location}</span>
        </div>
      </div>
    </section>
  );
}
