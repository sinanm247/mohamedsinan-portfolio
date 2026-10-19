import { SKILL_GROUPS } from '../../../Datasets/siteContent';
import './HomeSkills.scss';

export default function HomeSkills() {
  return (
    <section className="skills section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <h2 id="skills-title">Skills</h2>
        <ul>
          {SKILL_GROUPS.map((group) => (
            <li key={group.id}>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
