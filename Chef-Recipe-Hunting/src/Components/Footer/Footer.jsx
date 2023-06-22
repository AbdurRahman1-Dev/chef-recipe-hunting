import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter,FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">ChefHub</h3>
            <p>Browse our extensive collection of recipes that includes thousands of recipes for cookies, cakes, breads, rolls and main dishes.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p>123 Main Street</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@chefwebsite.com</p>
          </div>
          <div className="">
            <div className="flex space-x-4 items-center">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6 text-red-500" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6 text-red-500" />
              </a> 
            </div>

        <div className="">
            <label className="label">
                <span className="label-text text-white py-2">Subscribe To Our New Recipe</span>
            </label>
            <label className="input-group w-full">
                <input type="text" placeholder="Enter Your E-mail" className="input input-bordered border-white bg-transparent w-4/6" />
                <span className='text-black p-2 ' >
                    <FaTelegramPlane className='text-2xl text-red-500'></FaTelegramPlane>
                </span>
            </label>
            </div>

          </div>
        </div>
      </div>
    </footer>
</> 
  )
};



export default Footer;
