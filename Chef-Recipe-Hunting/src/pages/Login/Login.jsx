import React, { useContext, useState } from 'react';
import { FaGoogle,FaGithub} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {
  const { signInWithGoogle, signInWithGithub, signInWithEmail } = useContext(AuthContext);

  
  const [error, setError] = useState('')
  
  // redirect after login
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

// google authentication part start--------- 
  const googleSignIn =() => {
    signInWithGoogle()
  }
 // google authentication part end---------
   

 // github authentication part start---------
   const githubSignIn = () => {
    signInWithGithub()
   }
 // github authentication part end---------


// email password authentication part start---------
  const emailSignIn = (event) => {
    event.preventDefault();
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    signInWithEmail(email, password)
    .then((userCredential) => {
      // Signed in 
      const users = userCredential.user;
      setError('')
      form.reset()
      navigate(from, { replace: true })
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      setError(errorCode)
    });
  }
// email password authentication part end---------

  return (
    <div className='w-full my-14 mx-auto md:w-3/6 p-4  sm:p-6 md:p-8  '>
       <form onSubmit={emailSignIn} className="space-y-6 dark:bg-gray-800 dark:border-gray-700 p-3 md:p-5 rounded-lg" >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in</h5>
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
        <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Login to your account</button>

        <button   onClick={googleSignIn} 
                   type="button"
                    className="bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer w-full"
                    // onClick={renderProps.onClick}
                    // disabled={renderProps.disabled}
                  >
                    <FaGoogle className="mr-2" /> Sign in with your Google
              
                  </button>

         <button  onClick={githubSignIn}
                   type="button"
                    className="bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer w-full"
                    // onClick={renderProps.onClick}
                    // disabled={renderProps.disabled}
                  >
                    <FaGithub className="mr-2 " /> Sign in with your GitHub
                 
                  </button>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to="/signup" className="text-red-700 hover:underline dark:text-red-500">Create account</Link>
        </div>
    </form>
    </div>
  );
};

export default Login;