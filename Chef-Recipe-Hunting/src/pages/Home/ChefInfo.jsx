import React from 'react';
import { FaCalendarWeek,FaThumbsUp } from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefInfo = ({chefInfo}) => {

  let {chefName,chefPicture,likes,id,yearsOfExperience,recipeInfo, shortBio
  } = chefInfo;
  
  return (

    <div className="card bg-base-100 shadow-xl mt-4">
  <figure>
    <LazyLoad height={240} width={400} threshold={0.95}>
    <img className='w-full md:h-72 object-cover object-top' src={chefPicture} alt="chef" />
    </LazyLoad>
   </figure>

  <div className="card-body">
    <div className='flex gap-1 md:gap-6 items-center'>
    <h2 className="card-title text-2xl">
      {chefName}
      </h2>
      <div className="badge w-fit bg-gray-900 p-3"> <p className=''><FaThumbsUp className='inline-block text-white '/> {likes}</p></div>
    </div>
   
    <p className='text-base py-2'>{shortBio.slice(0,70)}... </p>
    <div className="md:flex gap-5 my-3">
     <div className="">
      <p><FaCalendarWeek className='inline-block text-red-600 text-xl'/> Experience: {yearsOfExperience}</p>
    </div>
       <p><MdRestaurantMenu className='inline-block text-red-600 text-xl'/> Recipes: {recipeInfo.length} </p>
    </div>
    <div>
      <Link to={`/Chefrecipes/${id}`}>
      <button className="bg-gray-900 w-full text-white rounded-md p-2.5 hover:bg-red-500 duration-200">View all Recipes</button>
   </Link>
      </div>
  </div>
</div>
  );
};

export default ChefInfo;