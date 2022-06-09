import React from 'react';
import bannerImg from '../../Images/fortfolioRijon.png';

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={bannerImg} class="max-w-sm mask mask-decagon shadow-3xl" alt='' />
          <div >
            <h1 class="text-5xl font-bold">Rijon Ahmed</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <a className='bg-orange-600 m-5 p-4 rounded-2xl text-white font-bold text-center' href="https://drive.google.com/file/d/1jP_MTWgPW32AM_teIBYb2djO5CuqTB47/view" target="_blank" rel="noopener noreferrer">Downlode Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;