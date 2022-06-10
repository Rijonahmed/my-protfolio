import React from 'react';
import Banner from './Banner';
import ContactUS from './ContactUS';
import MySkills from './MySkills';
import Project from './Project';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MySkills></MySkills>

      <Project></Project>
      <hr />

      <ContactUS></ContactUS>

    </div>
  );
};

export default Home;