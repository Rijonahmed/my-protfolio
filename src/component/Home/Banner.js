import React from 'react';
import bannerImg from '../../Images/fortfolioRijon.png';


const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={bannerImg} class="max-w-xs lg:max-w-md mask mask-decagon shadow-3xl border-8 border-slate-500" alt='' />
          <div >
            <h1 class="text-5xl font-bold"> Hey, I am Rijon Ahmed</h1>
            <p class="py-6 font-bold">Junior web developer / React Expert</p>

            <a className='bg-orange-600 m-5 p-4 rounded-2xl text-white font-bold text-center' href="https://drive.google.com/file/d/1jP_MTWgPW32AM_teIBYb2djO5CuqTB47/view" target="_blank" rel="noopener noreferrer">Downlode Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;