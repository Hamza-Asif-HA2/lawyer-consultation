import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  // State variables for holding user input
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client'); // Default to 'client'

  // Handle form submission
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("User Type:", userType);
    // Add signup logic here (e.g., Firebase/Appwrite authentication)
  };

  // Handle Google Signup
  const handleGoogleSignup = () => {
    console.log("Google Signup Clicked");
    // Add Google signup logic here (e.g., Firebase/Appwrite OAuth)
  };

  return (
    <div className='signup-page max-w-3xl mx-auto h-screen bg-primary flex flex-col justify-center items-center p-4'>
      {/* Signup Container */}
      <div className='signup-div w-full max-w-md bg-background rounded-lg shadow-lg border border-primary p-8'>
        {/* Heading */}
        <h1 className='text-2xl font-bold text-darker font-raleway text-center '>
          Create an Account
        </h1>
        <p className='text-darker text-sm font-raleway text-center mb-8'>We are pleased to have you join us!</p>

        {/* Signup Form */}
        <form className='flex flex-col gap-6' onSubmit={handleSignup}>
          {/* Name Input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='text-darker font-raleway font-medium'>
              Full Name
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker'
              required
            />
          </div>

          {/* Email Input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-darker font-raleway font-medium'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker'
              required
            />
          </div>

          {/* Password Input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='text-darker font-raleway font-medium'>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Create a password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker'
              required
            />
          </div>

          {/* User Type Dropdown */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='userType' className='text-darker font-raleway font-medium '>
              Select User Type
            </label>
            <select
              id='userType'
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker bg-primary'
            >
              <option value='client'>Client</option>
              <option value='lawyer'>Lawyer</option>
            </select>
          </div>

          {/* Signup Button */}
          <button
            type='submit'
            className='w-full bg-secondary text-darker font-raleway font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all'
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className='flex items-center my-4'>
          <hr className='w-full border-darker' />
          <span className='mx-2 text-darker font-semibold'>OR</span>
          <hr className='w-full border-darker' />
        </div>

        {/* Google Signup Button */}
        <button
          onClick={handleGoogleSignup}
          className='w-full flex items-center justify-center gap-3 bg-white text-primary font-semibold py-2 px-4 border border-darker rounded-lg shadow-md hover:bg-gray-100 transition-all'
        >
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' alt='Google Logo' className='w-5 h-5' />
          Sign Up with Google
        </button>

        {/* Already have an account? Login Link */}
        <p className='text-center text-darker mt-6'>
          Already have an account?{' '}
          <Link to="/" className='text-secondary font-semibold hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
