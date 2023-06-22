import React from 'react';

const Banner = ({image, chefName, shortBio}) => {
  return (
    <div className='bg-cover bg-center bg-no-repeat object-cover' style={{ 
      backgroundImage: `url(${image})` 
    }}>
        <div className='w-full h-full flex  justify-center items-center backdrop-brightness-50 py-10'>
      <div className='text-center lg:w-1/2 p-3'>
        <h1 className='text-white  text-3xl font-bold py-3'>{chefName}</h1>
          <p className='text-xl text-gray-200 '>{shortBio}</p>
       </div>
        </div>
    </div>
  );
};

export default Banner;