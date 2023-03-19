import React from 'react';

const About = () => {

  const styles = {
    backgroundImage: 'url(https://i.ibb.co/yhG8yVm/Black-Modern-Vlogger-You-Tube-Banner-1.png)',
    backgroundSize: 'cover',


  };
  return (
    <div>

      <div class="hero" style={styles}
      >
        <div class="hero-content text-center text-white ">
          <div class="hero-overlay bg-opacity-70 p-8">
            <h1 className='text-center text-3xl font-bold text-primary mb-6'>About Me</h1>
            <p className=' lg:text-2xl font-bold lg:my-20'>I'm Rijon Ahmed, a junior web developer specializing in React.js. I have a deep understanding of HTML, JavaScript, React.js, CSS, Tailwind, Bootstrap, and Node.js. I'm passionate about coding and programming, and I'm excited to pursue a career in this field. I have created a variety of projects using React Js, including manufacturer websites, warehouse inventory websites, and ecommerce sites. I'm eager to continue developing my skills and creating innovative projects.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;