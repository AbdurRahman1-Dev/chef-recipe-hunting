import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import '@smastrom/react-rating/style.css'

const Main = () => {
  return (
    <>
     <Navbar></Navbar> 
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  );
};

export default Main;