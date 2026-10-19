import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../../Datasets/navigation';
import { PROFILE } from '../../../Datasets/siteContent';
import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div>
          <p className="site-footer__name">{PROFILE.name}</p>
          <p className="site-footer__role">{PROFILE.role}</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__copy">© {year} {PROFILE.name}</p>
      </div>
    </footer>
  );
}
