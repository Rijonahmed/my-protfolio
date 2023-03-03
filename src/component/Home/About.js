import React from 'react';

const About = () => {

  const styles = {
    backgroundImage: 'url(https://i.ibb.co/yhG8yVm/Black-Modern-Vlogger-You-Tube-Banner-1.png)',
    backgroundSize: 'cover',
    backdropFilter: 'blur(8px)'

  };
  return (
    <div>

      <div class="hero" style={styles}
      >
        <div class="hero-content text-center text-white">
          <div class="max-w-md ">
            <h1 className='text-center text-3xl font-bold text-primary mb-6'>About Me</h1>
            <p className='text-center text-2xl font-bold'>I’m Rijon Ahmed , I live in Dhaka, Bangladesh. I am junior Web Developer (React.js).I like coding and programming, I enjoy doing this.For my future career, I have chosen the coding and programming sector. I make various projects through React Js.i have developed many website.The web sites are Manufacturer Website, Warehouse inventory Website, ecommerce sites and so on..</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;