import { EDUCATION, EXPERIENCE } from '../../../Datasets/siteContent';
import './HomeExperience.scss';

export default function HomeExperience() {
  return (
    <>
      <section className="path section" id="experience" aria-labelledby="experience-title">
        <div className="wrap">
          <div className="path__head">
            <h2 id="experience-title">Experience</h2>
            <p>
              Two roles on the MERN stack. The dates overlap because the Bangalore internship and the Dubai job ran through the same year.
            </p>
          </div>
          <ol className="path__list">
            {EXPERIENCE.map((job) => (
              <li key={job.id} className="path-card">
                <img src={job.logo} alt="" />
                <div>
                  <p className="path-card__dates">{job.dates}</p>
                  <h3>{job.role}</h3>
                  <p className="path-card__org">
                    {job.org}
                    <span> · {job.place}</span>
                  </p>
                  <p>{job.summary}</p>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="path path--edu section" id="education" aria-labelledby="education-title">
        <div className="wrap">
          <div className="path__head">
            <h2 id="education-title">Education</h2>
            <p>Computer science from high school through a B.Tech at LBS College of Engineering.</p>
          </div>
          <ol className="edu__list">
            {EDUCATION.map((item) => (
              <li key={item.id}>
                <img src={item.logo} alt={item.logoAlt} />
                <div>
                  <p className="path-card__dates">{item.dates}</p>
                  <h3>{item.program}</h3>
                  <p>{item.school}</p>
                  <p className="path-card__org">{item.board}</p>
                  {item.note && <p className="edu__note">{item.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
