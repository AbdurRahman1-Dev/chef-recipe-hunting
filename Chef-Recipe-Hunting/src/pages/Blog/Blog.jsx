import React, { useState } from 'react';
import Banner from '../../shared/Banner';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Blog = () => {

  // pdf download function
  const downloadPdf = () => {
    const capture = document.querySelector('.pdf')
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWith = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG',  0, 0, componentWith, componentHeight)
      doc.save('recipt.pdf')
    })

  }

  return (
    <section>
      <Banner chefName={"Blog's"} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCeUHURzP-9_ywf05kWdkPDnULvGnuTaV7dJ7eEqP8T6bTJhTkU6OZMXLgbXWI5KH8Q8&usqp=CAU'}></Banner>
  

    <div className="max-w-md mx-auto rounded-xl shadow-md  sm:max-w-xl md:max-w-2xl mt-5 pdf">
    <div className="p-6 sm:p-8 ">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Differences between uncontrolled and controlled components.</h2>
      <p className="text-gray-700 text-base">We can manage React from in two ways. controlled components and uncontrolled components: 
      <br />
      <strong>1. controlled components: </strong>  controlled components are form inputs whose values are managed and controlled by the parent component.Controlled components are usually more flexible and easier to validate and control
      <br />
      <strong>2. Uncontrolled components: </strong> 
      uncontrolled components manage their own state internally, uncontrolled components are simpler and quicker to set up, but can be harder to validate and control.
      </p>
    </div>  
    
      <div className="p-6 sm:p-8  ">
      <h2 className="text-xl font-bold text-gray-800 mb-2">How to validate React props using PropTypes</h2>
      <p className="text-gray-700 text-base pb-2">We can validate the props of a component using the PropTypes library. </p>
  
        <p><strong>1.</strong> To validate a prop that is expected to be an object with specific properties, we can use the shape validator.</p>

        <p className='py-2'><strong>2.</strong>  To validate a prop that is expected to be an array with specific types of values, we can use the arrayOf validator.</p>
      
       <p><strong>3.</strong>  To validate a prop that is expected to be one of several specific values, we can use the oneOf validator.</p>

    </div> 
    
      <div className="p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Difference between nodejs and express.js</h2>
      <p className="text-gray-700 text-base">
      Node.js and Express.js are two popular JavaScript-based technologies used for server-side web development
      </p>

      <p className='py-3'><strong>Node.js</strong>Node.js is a cross-platform runtime environment that allows us to execute JavaScript code on the server-side.It uses an event-driven, non-blocking I/O model that makes it highly efficient and scalable for building network applications</p>
      
      <p><strong>Express.js</strong>Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications and APIs. It provides a set of abstractions and conventions for handling HTTP requests and responses, routing, middleware, and templating.</p>

    </div> 
    
      <div className="p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-2">What is a custom hook, and why will you create a custom hook?</h2>
      <p className="text-gray-700 text-base">
      A custom hook is a reusable function in React that contains some stateful or side-effectful logic, and can be shared across multiple components.
      </p>
    <strong className='my-3'>   Here are some reasons why you might want to create a custom hook:</strong>

      <p className='py-3'><strong>Reusability:</strong>We can Use the same code in every component</p>
      
      <p className='py-2'><strong>Separation of Concerns:</strong>Custom hooks allow you to separate concerns and responsibilities between different parts of your application, making it easier to reason about and test.</p>

      <p className='py-2'><strong>Abstraction:</strong>Custom hooks can help you abstract away implementation details and reduce the complexity of your components, making them more readable and easier to reason about.</p>

    <p className='py-2'><strong>Composition:</strong>Custom hooks can be composed together to create more complex behavior and functionality, allowing you to build up your application from smaller building blocks.</p>

    </div>
    <div className='text-center py-5' onClick={downloadPdf}>
    <button className="bg-red-500 text-white  items-center justify-center rounded-md p-2.5 hover:bg-red-700">Download PDF</button>
    </div>
    </div>
  </section>
  );
};

export default Blog;