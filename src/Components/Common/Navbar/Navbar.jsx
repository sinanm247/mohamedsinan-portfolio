import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../../Datasets/navigation';
import { PROFILE } from '../../../Datasets/siteContent';
import './Navbar.scss';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="navbar__inner wrap">
        <Link className="navbar__brand" to="/" onClick={close}>
          Mohamed Sinan
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav id="site-menu" className="navbar__nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} onClick={close}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="navbar__mail" href={`mailto:${PROFILE.email}`}>
            Email
          </a>
        </nav>
      </div>

      {open && (
        <nav className="navbar__panel" aria-label="Mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} onClick={close}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="navbar__mail" href={`mailto:${PROFILE.email}`} onClick={close}>
            Email
          </a>
        </nav>
      )}
    </header>
  );
}
