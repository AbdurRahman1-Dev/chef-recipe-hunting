import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
        </div>
        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Story</h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum augue eu felis convallis, eget fringilla quam mollis. Sed volutpat nisl vitae tortor eleifend, et aliquam sapien lobortis.
              </p>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Chef</h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum augue eu felis convallis, eget fringilla quam mollis. Sed volutpat nisl vitae tortor eleifend, et aliquam sapien lobortis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
