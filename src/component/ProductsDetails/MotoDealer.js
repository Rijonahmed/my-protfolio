import React from 'react';
import webFullIMG from '../../Images/moto-dealer/motodealer4.png'
import webLeftIMG from '../../Images/moto-dealer/motodealer5.png'
import webRightIMG from '../../Images/moto-dealer/motodealer3.png'

const MotoDealer = () => {
  return (
    <div className='mx-12'>
      <h1 className="text-3xl font-bold text-center mt-10">Moto Dealer (Warehouse inventory Website)</h1>

      <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-12'>

        <img src={webLeftIMG} alt="" />
        <img src={webFullIMG} alt="" />
        <img src={webRightIMG} alt="" />


      </section>
      <h3 className='text-center text-3xl font-bold'><a href="https://moto-dealer.web.app/" target="_blank" rel="noopener noreferrer" className='text-primary'>Live</a> | <a href="https://github.com/Rijonahmed/Moto-Dealer-client-site" target="_blank" rel="noopener noreferrer" className='text-primary'>Client</a> | <a href="https://github.com/Rijonahmed/Moto-Dealer-Server-Site" target="_blank" rel="noopener noreferrer" className='text-primary'>Server</a> </h3>
      <section>
        <h1 className='text-2xl font-bold '>Features :</h1>
        <ul>
          <li>● In this project we are doing warehouse inventory of moto dealer.</li>
          <li>● This project can be registered through log in sing out.</li>
          <li>● I have created inventory private route.</li>
          <li>● In this project, if we click a Deliver button, the quantity will be reduced by 1.</li>
          <li>● And in this project we have created add quantity.</li>
          <li>● I have api through mongodb database.</li>
          <li>● We created the Not Found 404 route.</li>

        </ul>
        <br />
        <p><span className='text-1xl font-bold'>Tools:</span> In this project we have used bootstrap and react-bootstrap framework, recharts, react-toastify. We did firebase authentication, used react router, used firebase hooks, toast</p>


      </section>

    </div>
  );
};

export default MotoDealer;