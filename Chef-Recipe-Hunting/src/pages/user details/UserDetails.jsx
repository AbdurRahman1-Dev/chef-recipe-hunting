import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const UserDetails = () => {
  const {user} = useContext(AuthContext);
  const {displayName, email,emailVerified, photoURL} = user
  console.log(user);
  return (
    <section className='h-screen flex justify-center items-center'>
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
    <img src={photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
    <div className="space-y-4 text-center divide-y divide-gray-700">
      <div className="my-2 space-y-1">
        <h2 className="text-xl font-semibold sm:text-2xl">{displayName}</h2>
        <p className="px-5 text-xs sm:text-base dark:text-gray-400">{email}</p>
      </div>
     
    </div>
  </div>
    </section>
  );
};

export default UserDetails;