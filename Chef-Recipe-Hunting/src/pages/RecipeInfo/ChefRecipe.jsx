import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'


const ChefRecipe = ({info}) => {
  const {cookingMethod,rating,recipeImage,recipeName,id,ingredients} = info;

  let [bookMark, setBookMark] = useState(true);
  // const [ratings, setRating] = useState(3);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mb-16">
  <figure><img className='w-full md:h-60 object-cover' src={recipeImage} alt="Shoes" /></figure>
  <div className="card-body p-4">
    <h2 className="card-title">
     {recipeName}
      <div className="badge badge-error">{cookingMethod}</div>
      <button onClick={()=> {
         toast.success(' The Recipe is your favorite!');
         setBookMark(false)
      }
         } className="hover:text-red-500 text-white absolute top-3 right-3 text-3xl ">
      <Toaster />
       {bookMark && <FaHeart></FaHeart>}
      </button>

    </h2>

    <p className='font-semibold'>Rating</p>
    <div className='flex items-center justify-between'>
    <Rating style={{ maxWidth: 100 }}
      value={Math.round(rating)}
      readOnly/>
    <div className="badge badge-warning p-3">{rating}</div>
    </div>

    <p className='font-semibold'>Ingredients:</p>
    <div className="card-actions">
    {
          ingredients.map((items, index) => <div key={index} className="badge badge-accent">{items}</div>)
         }
    </div>

  </div>
</div>
    </div>
  );
};

export default ChefRecipe;