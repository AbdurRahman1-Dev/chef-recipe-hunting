import React, { useContext, useState } from 'react';
import { FaGoogle,FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";
import app from '../../utils/firebase.config';


const auth = getAuth(app);

const Register = () => {

  const {signUpWithEmail} = useContext(AuthContext);
  let [error, setError] = useState('')

  const emailSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo= form.photo.value;
    const password = form.password.value;

    if(password.length < 6) {
      setError('Your password must be at least 6 characters')
    }
  
    signUpWithEmail(email, password)
    .then((userCredential) => {
      // Signed in 
      const userInfo = userCredential.user;
      console.log(userInfo);
      setError('')
      form.reset()
      updateProfile(auth.currentUser, {
        displayName: `${name}`, photoURL: `${photo}`
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // setError(errorCode)
      // ..
    });

    
  }

  return (
    <div className='w-full my-14 mx-auto md:w-3/6 p-4  sm:p-6 md:p-8  '>
    <form onSubmit={emailSignUp} className="space-y-6 dark:bg-gray-800 dark:border-gray-700 p-3 md:p-5 rounded-lg" >
     <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up </h5>
     <div>
         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
         <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your name" required />
     </div> 
      <div>
         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
         <input type="text" name="photo" id="Photo URL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Photo URL" required />
     </div> 
     
     <div>
         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
         <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your E-mail" required />
     </div>
     <div>
         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
         <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
         <p className='text-red-600'>{error}</p>
     </div>
     <div className="flex items-start">
         <div className="flex items-start">
             <div className="flex items-center h-5">
                 <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
             </div>
             <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
         </div>
         <a href="#" className="ml-auto text-sm text-red-700 hover:underline dark:text-red-500">Lost Password?</a>
     </div>
     <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Create account</button>

     <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
         already have an account? <Link to='/login' className="text-red-700 hover:underline dark:text-red-500">Login</Link>
     </div>
 </form>
 </div>
  );
};

export default Register;