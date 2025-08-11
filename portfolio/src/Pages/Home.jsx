import Project from "../components/Project.jsx";
import Skill from "../components/Skill.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";

// Main component for the entire page
const Home = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
          body {
            font-family: 'Noto Sans', sans-serif;
          }
        `}
      </style>
      <Hero />
      <hr className='border border-gray-200' />
      <Project />
      <hr className='border border-gray-200' />
      <Skill />
      <hr className='border border-gray-200' />
      <Footer />
    </>
  );
};

export default Home;
