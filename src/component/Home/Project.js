import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div style={{
      backgroundImage: `url("https://www.thisiscolossal.com/wp-content/uploads/2016/05/tumblr_o515shCl8I1r4dhkuo1_500.gif")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    }} className=' py-10 '>

      <h1 className='text-3xl font-bold text-center text-white mb-10'>My Projects</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto'>
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/sWr5kgW/Screenshot-13-removebg-preview.png" alt="Bank Img" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Online Bank BD (Banking Website)

            </h2>
            <span className='font-bold'>Contributor</span>
            <p>In this project we are providing Banking service.</p>
            <div class="card-actions justify-end">

              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><Link to='/onlineBankBD'>Details</Link></button>
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><a href="https://online-money-bd.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>

            </div>
          </div>
        </div>
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/yy9QKY9/moto-Parts-1-removebg-preview.png" alt="moto parst img" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Moto Parts (Manufacturer Website)

            </h2>
            <p>In this project we are doing parts manufacturer of moto parts.</p>
            <div class="card-actions justify-end">
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><Link to='/motoParts'>Details</Link></button>
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><a href="https://moto-parts-62e64.web.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>

            </div>
          </div>
        </div>
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/mTKKrYw/Screenshot-16-removebg-preview.png" alt="moto dealer img" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Moto Dealer (Warehouse inventory Website)
            </h2>
            <p>In this project we are doing warehouse inventory of moto dealer.</p>
            <div class="card-actions justify-end">
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><Link to='/motoDealer'>Details</Link></button>
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><a href="https://moto-dealer.web.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>
            </div>
          </div>
        </div>
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/QJWpMMv/wedding-13-removebg-preview.png" alt="BEST Wedding img" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              BEST Wedding Photographer (Photographer service Website)
            </h2>
            <p>In this project we are providing photographer service.</p>
            <div class="card-actions justify-end">
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><Link to='/weddingPhotographer'>Details</Link></button>
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><a href="https://best-wedding-photographer.web.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>
            </div>
          </div>
        </div>
        {/* Project 5 */}
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/GCkZMQv/Screenshot-14-removebg-preview.png" alt="BEST Wedding img" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Choose Your Most Favourite Bike (Randomly Bike Website)
            </h2>
            <p>In this project we are providing Choose Your Most Favourite Bike.</p>
            <div class="card-actions justify-end">
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><a href="http://https://github.com/Rijonahmed/Choose-Favourite-Bike" target="_blank" rel="noopener noreferrer">GitHub</a></button>
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><a href="https://favourite-bike-choose-for-1.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>
            </div>
          </div>
        </div>
        {/* project 6 */}
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/mbHZXSw/Screenshot-removebg-preview.png" alt="BEST Wedding img" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Appointment Doctor in dentist (Appointment Website)
            </h2>
            <p>In this project we are providing doctor appointment.</p>
            <div class="card-actions justify-end">
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><a href="https://github.com/Rijonahmed/Doctor-portal-client" target="_blank" rel="noopener noreferrer">GitHub</a></button>
              <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white"><a href="https://doctor-portal-4cfc4.web.app/" target="_blank" rel="noopener noreferrer">Live Preview</a></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;