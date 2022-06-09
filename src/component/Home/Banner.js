import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../Images/fortfolioRijon.png';

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={bannerImg} class="max-w-sm rounded-full shadow-2xl" alt='' />
          <div>
            <h1 class="text-5xl font-bold">Rijon Ahmed</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link class="btn btn-primary">Downlode Resume</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;