import { PROFILE } from '../../../Datasets/siteContent';
import './HomeContact.scss';

export default function HomeContact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="contact__kicker">Dubai, United Arab Emirates</p>
        <h2 id="contact-title">If you have a site or a product to build, write to me.</h2>
        <a className="contact__email" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
        <ul>
          <li>
            <span>Phone</span>
            <a href={PROFILE.phoneHref}>{PROFILE.phone}</a>
          </li>
          <li>
            <span>WhatsApp</span>
            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
              {PROFILE.phone}
            </a>
          </li>
          <li>
            <span>Email</span>
            <a href={`mailto:${PROFILE.email}`}>Send a note</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
