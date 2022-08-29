import React from 'react';
import About from './About';
import Banner from './Banner';
import ContactUS from './ContactUS';
import Education from './Education';
import MySkills from './MySkills';
import Project from './Project';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <MySkills></MySkills>

      <Project></Project>
      <Education></Education>
      <hr />


      <ContactUS></ContactUS>

    </div>
  );
};

export default Home;