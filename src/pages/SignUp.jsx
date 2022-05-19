import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        try {

        }catch(error) {
            console.log(error)
        }
    }



  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/b4a6bcfa-efda-4700-b43d-86ddd4f63ba4/US-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-4 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit}className="w-full flex flex-col py-4">
                  
                  <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-600 rounded' 
                  type='email' 
                  placeholder='email' 
                  autoComplete='email'/>
                  
                  <input className='p-3 my-2 bg-gray-600 rounded' 
                  onChange={(e) => setPassword(e.target.value)}
                  type='password' 
                  placeholder='Password' 
                  autoComplete='current-password' 
                  />

                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                <div className="flex justify-between items-center">
                    <p><input type='checkbox' />Remember Me</p>
                    <p>Need Help?</p>
                </div>
                <p className="py-8">
                    <span className="text-gray-600">
                        Already subscribed to Netflix?
                    </span>{' '}
                <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
