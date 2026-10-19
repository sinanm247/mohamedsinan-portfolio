import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS, PROJECTS, SEE_ALL_IMAGE, categoryLabel } from '../../../Datasets/siteContent';
import './HomePortfolio.scss';

const STICKY_TOPS = [72, 88, 104, 120, 136, 152];

export default function HomePortfolio() {
  const sectionRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const titleId = useId();
  const year = new Date().getFullYear();
  const visible = FEATURED_PROJECTS;
  const active = PROJECTS.find((project) => project.id === activeId) ?? null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.matchMedia('(max-width: 768px)');
    if (reduced) return undefined;

    const onScroll = () => {
      if (narrow.matches) return;
      const items = [...section.querySelectorAll('.home-portfolio__item')];
      const vh = window.innerHeight;
      const scrollIntoSection = Math.max(0, window.scrollY - section.offsetTop);
      const sectionProgress = Math.min(1, scrollIntoSection / section.offsetHeight);

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const myTop = STICKY_TOPS[Math.min(index, STICKY_TOPS.length - 1)];
        if (rect.top > myTop) {
          item.style.transform = '';
          return;
        }

        let scale = 1;
        items.slice(index + 1).forEach((next, offset) => {
          const nextIndex = index + 1 + offset;
          const nextTop = STICKY_TOPS[Math.min(nextIndex, STICKY_TOPS.length - 1)];
          const nextRect = next.getBoundingClientRect();
          const progress = Math.min(1, Math.max(0, (vh - nextRect.top) / (vh - nextTop)));
          scale -= progress * 0.035;
        });

        const depthFromFront = items.length - 1 - index;
        scale -= sectionProgress * depthFromFront * 0.012;
        item.style.transform = `scale(${Math.max(0.82, scale).toFixed(3)})`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setActiveId(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="home-portfolio"
      aria-labelledby="portfolio-heading"
    >
      <div className="home-portfolio__strip">
        <span className="home-portfolio__strip-index">
          <span className="home-portfolio__strip-dot" aria-hidden="true" />
          (02)
        </span>
        <span className="home-portfolio__strip-label">(Portfolio)</span>
        <span className="home-portfolio__strip-copy">© {year}</span>
      </div>

      <div className="home-portfolio__body">
        <aside className="home-portfolio__sidebar" aria-label="Portfolio summary">
          <div className="home-portfolio__display" aria-hidden="true">
            <span>WRK.</span>
            <span>26'</span>
          </div>
          <p className="home-portfolio__description">
            Six projects from the full set. The rest are on the portfolio page.
          </p>
          <Link to="/portfolio" className="home-portfolio__cta">
            <span>View all work</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </aside>

        <div className="home-portfolio__list" id="portfolio-heading">
          {visible.map((project, index) => (
            <article
              key={project.id}
              className="home-portfolio__item"
              style={{
                top: `${STICKY_TOPS[Math.min(index, STICKY_TOPS.length - 1)]}px`,
                zIndex: index + 1,
              }}
            >
              <button type="button" className="portfolio-item" onClick={() => setActiveId(project.id)}>
                <span className="portfolio-item__media-wrap">
                  {project.images?.[0] ? (
                    <img
                      className="portfolio-item__media"
                      src={project.images[0]}
                      alt=""
                      width="1920"
                      height="1080"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  ) : (
                    <span className="portfolio-item__play">Play recording</span>
                  )}
                </span>
                <span className="portfolio-item__meta">
                  <span className="portfolio-item__index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="portfolio-item__info">
                    <span className="portfolio-item__service">{project.title}</span>
                    <span className="portfolio-item__client">
                      {categoryLabel(project.category)}
                    </span>
                  </span>
                  <span className="portfolio-item__year">© {year}</span>
                </span>
              </button>
            </article>
          ))}
        </div>

        <aside className="home-portfolio__see-all">
          <Link to="/portfolio" className="home-portfolio__see-all-link">
            <span className="home-portfolio__see-all-thumb">
              <img src={SEE_ALL_IMAGE} alt="" />
            </span>
            <span className="home-portfolio__see-all-label">
              <span>See all</span>
              <strong>({String(PROJECTS.length).padStart(2, '0')})</strong>
            </span>
          </Link>
        </aside>
      </div>

      {active && (
        <div className="project-layer" onClick={() => setActiveId(null)}>
          <article
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="project-dialog__close" onClick={() => setActiveId(null)}>
              Close
            </button>
            <p className="project-dialog__cat">{categoryLabel(active.category)}</p>
            <h3 id={titleId}>{active.title}</h3>
            <p>{active.summary}</p>
            {active.points?.length > 0 && (
              <ul>
                {active.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {active.stack?.length > 0 && (
              <p className="project-dialog__stack">{active.stack.join(' · ')}</p>
            )}
            <div className="project-dialog__media">
              {active.images?.map((src) => (
                <img key={src} src={src} alt={`${active.title} screenshot`} />
              ))}
              {active.video && <video src={active.video} controls playsInline preload="metadata" />}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
