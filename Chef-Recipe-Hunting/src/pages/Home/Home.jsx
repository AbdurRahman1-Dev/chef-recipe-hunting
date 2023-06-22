import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import ChefInfo from './ChefInfo';
import cereal from '../../assets/images/cereal.png'
import broccoli from '../../assets/images/broccoli.png'
import potatoes from '../../assets/images/potatoes.png'
import letter from '../../assets/images/letter.png'

const Home = () => {
  const chefsInfo = useLoaderData();
  return (
    <div className='md:-mt-20'>
    <div className='banner'>
        <div className='px-4 mx-auto lg:max-w-7xl md:px-8 flex justify-start items-center h-full '>
      <div className=' lg:w-1/2'>
        <h1 className='text-white  text-3xl lg:text-7xl font-bold'>Yummy food! <br /> from best Chefs</h1>
          <p className='text-xl text-gray-200 my-5'>Browse our extensive collection of recipes that includes thousands of recipes for cookies, cakes, breads, rolls and main dishes.</p>
          <button className="bg-red-500 text-white  items-center justify-center rounded-md p-2.5 hover:bg-red-700">Get Your Food!</button>
       </div>
        </div>
    </div>


    {/* displaying all chef info */}

    <div className='text-center my-20'>
      <h1 className='text-5xl font-bold'>Our Chefs </h1>
      <p className='text-xl pt-4 text-gray-900'>Get access to thousands of recipes from famous chefs. </p>
      <hr className='border-red-500 w-16 mx-auto border-y-2 mt-3' />
    </div>

    <div className='px-4 mx-auto lg:max-w-7xl md:px-8 lg:grid lg:grid-cols-3 gap-5'>

      {
        chefsInfo.slice(0,6).reverse().map(chefInfo => {
          return <ChefInfo key={chefInfo.id} chefInfo={chefInfo}></ChefInfo>
        })
      }
    </div>

    

    {/* image galarray */}
    <section className=' bg-gray-900 py-10 my-20'>

    <div className='text-center py-10'>
      <h1 className='text-5xl font-bold text-gray-200'>Gallery</h1>
      <p className='text-xl pt-4 text-white'>Get access to thousands of recipes from famous chefs. </p>
      <hr className='border-red-500 w-16 mx-auto border-y-2 mt-3' />
    </div>

    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 mx-auto lg:max-w-7xl md:px-8 my-5'>
      <div className=''>
        <img className='object-cover w-full h-60 hover:opacity-70 duration-200' src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div> 
       <div>
        <img className='object-cover w-full h-60 duration-200 hover:opacity-70 '  src="https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div>
        <img className='object-cover w-full h-60 duration-200 hover:opacity-70 '  src="https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div>
        <img className='object-cover w-full h-60 duration-200 hover:opacity-70 '  src="https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>  
      <div>
        <img className='object-cover w-full h-60 duration-200 hover:opacity-70 '  src="https://images.pexels.com/photos/1397514/pexels-photo-1397514.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div> 
       <div>
        <img className='object-cover w-full h-60 duration-200 hover:opacity-70 '  src="https://images.pexels.com/photos/3772534/pexels-photo-3772534.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
     </section>


{/* service section */}

<div className='text-center py-20 bg-slate-100'>
      <h1 className='text-5xl font-bold'>Our Best Services</h1>
      <p className='text-xl pt-4 text-gray-900'>Get access to thousands of recipes from famous chefs. </p>
    <hr className='border-red-500 w-16 mx-auto mt-2 border-y-2' />

    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 px-4 mx-auto lg:max-w-7xl md:px-8 mt-24'>
    <div className='text-center flex flex-col items-center gap-3'>
      <img src={cereal} className='w-48 animate-bounce bg-red-100 p-8 rounded-full text-center ' alt="" />
      <h3 className='text-3xl font-bold'>Delicious Bakery Recipes</h3>
      <p className='text-base font-semibold'>The most popular and very profitable bakery items are cupcakes and muffins. The finest cupcake and muffin </p>
    </div>
    <div className='text-center flex flex-col items-center gap-3 my-24 md:my-0'>
      <img className='w-48 animate-bounce bg-red-100 p-8 rounded-full text-center ' src={broccoli} alt="" />
      <h3 className='text-3xl font-bold'>Vegetarian Recipes</h3>
      <p className='text-base font-semibold'>A vegetarian diet should include a diverse mix of fruits, vegetables, grains, healthy fats, and proteins. To replace the protein provided by meat in your diet, .</p>
    </div>
    <div className='text-center flex flex-col items-center gap-3'>
      <img  className='w-48 animate-bounce bg-red-100 p-8 rounded-full text-center ' src={potatoes} alt="" />
      <h3 className='text-3xl font-bold'>Quick and Easy Recipes</h3>
      <p  className='text-base font-semibold'>With an adult supervising, a lot of kids start using the oven and stove at around age 12. By the time they are 14, most kids can use both the oven or stove on </p>
    </div>
    </div>
    </div>



{/* new Letter section */}

    <div className='bg-cover bg-center mt-20' style={{ 
      backgroundImage: `url(${letter})` 
    }}>
        <div className='w-full h-full flex  justify-start items-center backdrop-brightness-50 py-14'>
      <div className='text-center lg:w-1/2 p-3'>
        <h1 className='text-white  text-3xl font-bold py-3'>Subscribe To Our Newletter</h1>
          <p className='text-xl text-gray-200 '>Subscribe now and receive weekly newsletter with recipes, new courses, interesting posts, popular recipes and much more!</p>
      
              <div className="mt-10 items-center mx-auto  space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500
                      bg-transparent " placeholder="Enter your email" type="email" id="email" required="" />
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center bg-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Home;