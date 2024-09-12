import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
   const[isSignUpForm,setIsSignUpForm]=useState(true);

   const toggleSignUpForm=()=>{
      setIsSignUpForm(!isSignUpForm);
   }
  return (
     <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_large.jpg'
            alt='Background'/>
        </div>
        <form className='w-3/12 absolute z-20 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>
        <h1 className='font-bold text-3xl py-4'>{isSignUpForm? "Sign In" : "Sign Up"}</h1>
         {!isSignUpForm && <input type="text" placeholder='Full Name' className='my-2 p-4 w-full bg-gray-700 rounded-lg'/>}
         <input type="text" placeholder='Email or mobile number' className='my-2 p-4 w-full bg-gray-700 rounded-lg'/>
         <input type="text" placeholder='Password' className='my-2 p-4 w-full bg-gray-700 rounded-lg'/>
         <button className='my-4 p-2 w-full bg-red-700 rounded-lg'>{isSignUpForm? "Sign In" : "Sign Up"}</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignUpForm}>{isSignUpForm? "New to Netflix? Sign Up Now" : "Already a User? Sign In now"}</p>
        </form>
     </div>
     
  )
}

export default Login
