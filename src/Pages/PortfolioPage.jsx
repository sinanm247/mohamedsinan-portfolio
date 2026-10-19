import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../Components/Common/Seo/Seo';
import { PROJECTS, WORK_CATEGORIES, categoryLabel } from '../Datasets/siteContent';
import '../Components/HomePage/HomePortfolio/HomePortfolio.scss';
import './PortfolioPage.scss';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const [activeId, setActiveId] = useState(null);
  const titleId = useId();
  const visible = PROJECTS.filter((project) => filter === 'all' || project.category === filter);
  const active = PROJECTS.find((project) => project.id === activeId) ?? null;

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
    <>
      <Seo
        title="Portfolio | Mohamed Sinan"
        description="Selected websites and products by Mohamed Sinan, including React builds, WordPress sites, shops, and landing pages."
        path="/portfolio"
      />
      <main className="portfolio-page">
        <div className="wrap">
          <p className="portfolio-page__kicker">Portfolio</p>
          <div className="portfolio-page__head">
            <h1>All work</h1>
            <Link to="/#work" className="portfolio-page__back">
              Back home
            </Link>
          </div>

          <div className="portfolio-page__filters" role="toolbar" aria-label="Filter projects">
            {WORK_CATEGORIES.map((category) => {
              const count = category.id === 'all'
                ? PROJECTS.length
                : PROJECTS.filter((project) => project.category === category.id).length;
              if (count === 0) return null;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={filter === category.id}
                  onClick={() => setFilter(category.id)}
                >
                  {category.label}
                  <span>{String(count).padStart(2, '0')}</span>
                </button>
              );
            })}
          </div>

          <div className="portfolio-page__grid">
            {visible.map((project) => (
              <article key={project.id} className="portfolio-card">
                <button type="button" onClick={() => setActiveId(project.id)}>
                  <span className="portfolio-card__media">
                    {project.images?.[0] ? (
                      <img src={project.images[0]} alt="" />
                    ) : (
                      <span className="portfolio-card__play">Play recording</span>
                    )}
                  </span>
                  <span className="portfolio-card__meta">
                    <span>{project.title}</span>
                    <span>{categoryLabel(project.category)}</span>
                  </span>
                </button>
              </article>
            ))}
          </div>
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
      </main>
    </>
  );
}
