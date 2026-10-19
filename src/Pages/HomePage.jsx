import Seo from '../Components/Common/Seo/Seo';
import HomeHero from '../Components/HomePage/HomeHero/HomeHero';
import HomePortfolio from '../Components/HomePage/HomePortfolio/HomePortfolio';
import HomeAbout from '../Components/HomePage/HomeAbout/HomeAbout';
import HomeExperience from '../Components/HomePage/HomeExperience/HomeExperience';
import HomeSkills from '../Components/HomePage/HomeSkills/HomeSkills';
import HomeContact from '../Components/HomePage/HomeContact/HomeContact';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Mohamed Sinan | Full-stack web developer"
        description="Portfolio of Mohamed Sinan, a full-stack web developer in Dubai. React and Node.js builds, WordPress sites, shops, and landing pages."
        path="/"
      />
      <main>
        <HomeHero />
        <HomePortfolio />
        <HomeAbout />
        <HomeExperience />
        <HomeSkills />
        <HomeContact />
      </main>
    </>
  );
}
