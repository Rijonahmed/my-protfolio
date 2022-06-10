import React from 'react';
import skillsIMG from '../../Images/pp4ll13f5onw4gqj8ggl.webp'

const MySkills = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-orange-500 mb-10'>My Skills</h1>

      <div class="mx-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div >
            <h2 className='font-bold'>Front-end <br /> <progress class="progress progress-success max-w-xs shadow-2xl" value="95" max="100"></progress></h2>
            <h2 className='font-bold'>ReactJS <br /> <progress class="progress progress-primary max-w-xs shadow-2xl" value="90" max="100"></progress></h2>
            <h2 className='font-bold'>JavaScript <br /> <progress class="progress progress-accent max-w-xs shadow-2xl" value="85" max="100"></progress></h2>
            <h2 className='font-bold'>Back-end <br /> <progress class="progress progress-error max-w-xs shadow-2xl" value="60" max="100"></progress></h2>

          </div>
          <img className='max-w-xs lg:max-w-md shadow-2xl rounded-md' src={skillsIMG} alt='skillsIMG' />
        </div>
      </div>



    </div>
  );
};

export default MySkills;