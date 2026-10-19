import { PROFILE } from '../../../Datasets/siteContent';
import './HomeAbout.scss';

export default function HomeAbout() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <figure className="about__figure">
          <img src={PROFILE.portraitSquare} alt="Mohamed Sinan" />
        </figure>
        <div>
          <h2 id="about-title">About</h2>
          <p>
            I am a full-stack developer in Dubai. I work in the MERN stack, so a job usually covers the React screens, an Express API, and the MongoDB behind them.
          </p>
          <p>
            The work I come back to is booking tools, travel sites, and company sites that needed a rebuild. Qsports, SAM Luxury Tourism, and the Rabbit and Carrot site are the three I start with.
          </p>
        </div>
      </div>
    </section>
  );
}
