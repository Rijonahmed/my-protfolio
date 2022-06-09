import React from 'react';
import motoPartsIMG from '../../Images/moto-parts.jpg'
import motoDealerIMG from '../../Images/motoDealer.jpg'
import weddingIMG from '../../Images/New Project.jpg'

const Project = () => {
  return (
    <div className='mx-12 mt-10 mb-10'>
      <h1 className='text-3xl font-bold text-center text-orange-500 mb-10'>My Projects</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src={motoPartsIMG} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Moto Parts (Manufacturer Website)

            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-sm btn-outline btn-error"><a href="https://moto-parts-62e64.web.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>

            </div>
          </div>
        </div>
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src={motoDealerIMG} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Moto Dealer (Warehouse inventory Website)
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-sm btn-outline btn-error"><a href="https://moto-dealer.web.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>
            </div>
          </div>
        </div>
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src={weddingIMG} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              BEST Wedding Photographer (Photographer service Website)
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-sm btn-outline btn-error"><a href="https://best-wedding-photographer.web.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;