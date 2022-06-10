import React from 'react';
import webFullIMG from '../../Images/moto-parts/motoparts1.png'
import webLeftIMG from '../../Images/moto-parts/motoparts2.png'
import webRightIMG from '../../Images/moto-parts/motoparts4.png'

const MotoParts = () => {
  return (
    <div className='mx-12'>
      <h1 className="text-3xl font-bold text-center mt-10">Moto Parts (Manufacturer Website)</h1>

      <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-12'>

        <img src={webLeftIMG} alt="" />
        <img src={webFullIMG} alt="" />
        <img src={webRightIMG} alt="" />


      </section>
      <h3 className='text-center text-3xl font-bold'><a href="https://moto-parts-62e64.web.app/" target="_blank" rel="noopener noreferrer" className='text-primary'>Live</a> | <a href="https://github.com/Rijonahmed/Moto-Parts-client-site" target="_blank" rel="noopener noreferrer" className='text-primary'>Client</a> | <a href="https://github.com/Rijonahmed/Moto-parts-server-site" target="_blank" rel="noopener noreferrer" className='text-primary'>Server</a> </h3>
      <section>
        <h1 className='text-2xl font-bold '>Features :</h1>
        <ul>
          <li>● In this project we are doing parts manufacturer of moto parts.</li>
          <li>● This project can be registered through log in sing out.</li>
          <li>● I have created Dashboard private route.</li>
          <li>● In this project, implement a nested route.</li>
          <li>● In this project, implement a Admin role</li>
          <li>● And in this project we have created minimum order quantity.</li>
          <li>● I have api through mongodb database.</li>
          <li>● We created the Not Found 404 route.</li>

        </ul>
        <br />
        <p><span className='text-1xl font-bold'>Tools:</span> In this project we have used tailwindcss and react-component daisyui framework, recharts, react-toastify, react-rating-stars-component. We did firebase authentication, used react router, used firebase hooks, toast,react-query,</p>


      </section>

    </div>
  );
};

export default MotoParts;