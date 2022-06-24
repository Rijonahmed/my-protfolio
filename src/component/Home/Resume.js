import React from 'react';

const Resume = () => {
  return (
    <div className='mx-12'>
      <h1 className='text-center font-bold text-3xl'>My Resume</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div> <h1 className='text-3xl font-bold'> Rijon Ahmed</h1>
          <p> Junior web Developer (React Developer)</p>
          <address>Purbachal-300ft-sector-02, Dhaka, Bangladesh.</address>
          <p><a className='text-primary font-bold' href="https://github.com/Rijonahmed" target="_blank" rel="noopener noreferrer">GitHub</a> | <a className='text-primary font-bold' href="https://www.linkedin.com/in/rijon-ahmed-7274ab240/" target="_blank" rel="noopener noreferrer">Linkedin</a> | <a className='text-primary font-bold' href="https://my-portfolio-ee291.web.app/" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
        </div>
        <div className='lg:text-right '>
          <p>Email : rijon036@gmail.com</p>
          <p>Phone : +8801959628428</p>
          <p className='my-4'> <a className='text-primary font-bold' href="https://drive.google.com/file/d/1jP_MTWgPW32AM_teIBYb2djO5CuqTB47/view" target="_blank" rel="noopener noreferrer">Downlode Resume</a></p>

        </div>
      </div>
      <hr />
      <h1 className='text-2xl font-bold'>SKILLS</h1>
      <h1><span className='text-1xl font-bold'>Expertise:</span> React.js, JavaScript, ES6, HTML5, CSS3, Tailwind, Bootstrap.</h1>
      <h1><span className='text-1xl font-bold'>Comfortable:</span> Node Js, MongoDB, Express.js.</h1>
      <h1><span className='text-1xl font-bold'>Tools:</span> VS Code, Github, Netlify, Heroku, Figma, Firebase, Chrome Dev Tool.</h1>
      <h1><span className='text-1xl font-bold'>Familiar:</span> Typescript, React Native.</h1>

      <hr />
      <h1 className='text-2xl font-bold'>PROJECTS</h1>
      <h3 className='text-1xl font-bold'>Moto Parts (Manufacturer Website)
        <a className='text-primary font-bold' href="https://moto-parts-62e64.web.app/" target="_blank" rel="noopener noreferrer"> Live </a>
        |
        <a className='text-primary font-bold' href="https://github.com/Rijonahmed/Moto-Parts-client-site" target="_blank" rel="noopener noreferrer"> Client </a>
        |
        <a className='text-primary font-bold' href="https://github.com/Rijonahmed/Moto-parts-server-site" target="_blank" rel="noopener noreferrer"> Server </a></h3>
      <h4 className='font-bold'>Features:</h4>
      <p> ● This project can be registered through log in sing out and this project we have created
        minimum order quantity.</p>
      <p> ● In this project, implement a Admin role.(admin email : nobita@gmail.com || password :
        123456)</p>
      <p> ● In this project we have used tailwind css and react-component daisy ui framework, recharts,
        react-toastify, react-rating-stars-component. We did firebase authentication, used react
        router, used firebase hooks, toast,react-query.</p>
      <br />

      <h3 className='text-1xl font-bold'>Moto Dealer (Warehouse inventory Website) <a className='text-primary font-bold' href="https://moto-dealer.web.app/" target="_blank" rel="noopener noreferrer"> Live </a>
        |
        <a className='text-primary font-bold' href="https://github.com/Rijonahmed/Moto-Dealer-client-site" target="_blank" rel="noopener noreferrer"> Client </a>
        |
        <a className='text-primary font-bold' href="https://github.com/Rijonahmed/Moto-Dealer-Server-Site" target="_blank" rel="noopener noreferrer"> Server </a></h3>
      <h4 className='font-bold'>Features:</h4>
      <p>● In this project we are doing warehouse inventory of moto dealer.</p>
      <p> ● In this project, if we click a Deliver button, the quantity will be reduced by 1.</p>
      <p>● In this project we have used bootstrap and react-bootstrap framework, recharts,
        react-toastify. We did firebase authentication, used react router, used firebase hooks, toast.</p>
      <br />

      <h3 className='text-1xl font-bold'>BEST Wedding Photographer (Photographer service Website) <a className='text-primary font-bold' href="https://best-wedding-photographer.web.app/" target="_blank" rel="noopener noreferrer">Live</a> | <a className='text-primary font-bold' href="https://github.com/Rijonahmed/Wedding-Photographer" target="_blank" rel="noopener noreferrer">Client</a></h3>
      <h4 className='font-bold'>Features:</h4>
      <p> ● In this project we are providing photographer service.</p>
      <p>● This project can be registered through log in sing out.</p>
      <p>● In this project we have used bootstrap and react-bootstrap framework.We do firebase
        authentication, use react router, use firebase hooks, toast.</p>
      <br />

    </div>
  );
};

export default Resume;