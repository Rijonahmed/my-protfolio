import React from 'react';

const Education = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row gap-2 justify-between items-center py-10 px-2'>

        <div data-aos="fade-down" data-aos-duration="1000" className="text-left">
          <h3 className="text-3xl lg:text-5xl font-serif font-bold pb-4 lg:pb-8"><span className='text-primary'>Educational </span>
            Background</h3>
          <p className='font-bold text-1xl'>• SSC batch-2017 from Amirjan High School in Dumni, Khilkhet, Dhaka.</p>
          <p className='font-bold text-1xl py-2'> • HSC batch-2019 from Amirjan College in Dumni, Khilkhet, Dhaka. </p>
          <p className='font-bold text-1xl'>• Now i am studing in Honor's 4th year from Uttara Town Colege in Uttara, Abdullapur, Dhaka.</p>

        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <img className='object-cover' src="https://i.ibb.co/kGYD4NB/education-removebg-preview.png" alt="education img" />
        </div>


      </div>

    </div>
  );
};

export default Education;