import React from 'react';
import webFullIMG from '../../Images/wedding/wedding-photo.jpg'
import webLeftIMG from '../../Images/wedding/best-wedding-photographer-1.png'
import webRightIMG from '../../Images/wedding/best-wedding-photographer-2.png'

const WeddingPhotographer = () => {
  return (
    <div className='mx-12'>
      <h1 className="text-3xl font-bold text-center mt-10">Moto Dealer (Warehouse inventory Website)</h1>

      <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-12'>

        <img src={webLeftIMG} alt="" />
        <img src={webFullIMG} alt="" />
        <img src={webRightIMG} alt="" />


      </section>
      <h3 className='text-center text-3xl font-bold'><a href="https://best-wedding-photographer.web.app/" target="_blank" rel="noopener noreferrer" className='text-primary'>Live</a> | <a href="https://github.com/Rijonahmed/Wedding-Photographer" target="_blank" rel="noopener noreferrer" className='text-primary'>Client</a></h3>
      <section className='mb-10'>
        <h1 className='text-2xl font-bold '>Features :</h1>
        <ul>
          <li>● In this project we are providing photographer service.</li>
          <li>● This project can be registered through log in sing out.</li>
          <li>● In this project we have done slider work.</li>
          <li>● In this project we have created a separate private route for check out.</li>
          <li>● We created the Not Found 404 route.</li>

        </ul>
        <br />
        <p><span className='text-1xl font-bold'>Tools:</span> In this project we have used bootstrap and react-bootstrap framework.We do firebase authentication, use react router, use firebase hooks, toast.</p>


      </section>

    </div>
  );
};

export default WeddingPhotographer;