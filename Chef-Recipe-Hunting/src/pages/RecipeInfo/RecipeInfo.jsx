import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../assets/images/pizza.jpg'
import ChefRecipe from './ChefRecipe';
import { FaCalendarWeek,FaThumbsUp } from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import Banner from '../../shared/Banner';

const RecipeInfo = () => {
  const chefs = useLoaderData()
  let {chefName,chefPicture,likes,id,yearsOfExperience,recipeInfo,shortBio
  } = chefs

  return (
    <div>

{/* banner section */}

   <Banner image={image} chefName={chefName} shortBio={shortBio}></Banner>

{/* chef recipe information */}
 
 <div className='px-4 mx-auto lg:max-w-7xl md:px-8 '>
  <div className="card card-side bg-base-100 flex flex-col md:flex-row mt-20 mb-10 border">
  <figure><img className='md:w-96 h-60 md:h-96 object-cover object-top' src={chefPicture} alt="Movie"/></figure>
  <div className="card-body md:w-1/2">
    <h2 className="card-title text-2xl">{chefName}</h2>
    <p><span className='font-semibold'>Description: </span>{shortBio}</p>

  
      <p><FaCalendarWeek className='inline-block text-red-600 text-xl'/> Experience: {yearsOfExperience}</p>
        <p className=''><FaThumbsUp className='inline-block text-red-600 text-xl'/> Likes: {likes}</p>
        <p><MdRestaurantMenu className='inline-block text-red-600 text-xl'/> Recipes: {recipeInfo.length} </p>

    <div className="card-actions ">
    <button className="bg-red-500 w-full text-white rounded-md p-2.5 hover:bg-red-700">Book Now</button>
    </div>
   </div>
  </div>
  <div className='my-20'>
      <h1 className='text-3xl font-bold my-3'>Recipes: {recipeInfo.length} </h1>
     <hr />
    </div>
  <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {
      recipeInfo.map(info => {
        return <ChefRecipe key={info.id} info={info}></ChefRecipe>
      })
    }
  </div>

</div>


</div>
  );
};

export default RecipeInfo;