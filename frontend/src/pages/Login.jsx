import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FeedbackForm from './FeedbackForm';

const Login = () => {

    const navigate = useNavigate();
  // State variables for holding user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add login logic here (e.g., Firebase/Appwrite authentication)
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    // Add Google login logic here (e.g., Firebase/Appwrite OAuth)
  };


  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);


  return (
    <div className='login-page max-w-3xl mx-auto h-screen bg-primary flex flex-col justify-center items-center p-4'>
      {/* Login Container */}
      <div className='login-div w-full max-w-md bg-background rounded-lg shadow-lg border border-primary p-8'>
        {/* Heading */}
        <h1 className='text-3xl font-bold text-darker font-raleway text-center'>
          Welcome Back!
        </h1>

        <p className='text-darker text-sm font-raleway text-center mb-8'>You have been missed</p>

        {/* Login Form */}
        <form className='flex flex-col gap-6' onSubmit={handleLogin}>
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
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker'
              required
            />
          </div>

          {/* Login Button */}
          <button
            type='submit'
            className='w-full bg-secondary text-darker font-raleway font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all'
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className='flex items-center my-4'>
          <hr className='w-full border-darker' />
          <span className='mx-2 text-darker font-semibold'>OR</span>
          <hr className='w-full border-darker' />
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className='w-full flex items-center justify-center gap-3 bg-white text-primary font-semibold py-2 px-4 border border-darker rounded-lg shadow-md hover:bg-gray-100 transition-all'
        >
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' alt='Google Logo' className='w-5 h-5' />
          Login with Google
        </button>

        {/* Forgot Password Link */}
        <p className='text-center text-darker font-raleway mt-4'>
          <a href='#' className='text-secondary hover:underline'>
            Forgot your password?
          </a>
        </p>

        {/* Sign Up Link */}
        <p className='text-center text-darker mt-6'>
          Don't have an account?{' '}
          <Link to="/signup" className='text-secondary font-semibold hover:underline'>
            Sign up
          </Link>
        </p>
      <div className="flex justify-center items-center mt-4 bg-background">
      <button
        className="px-6 py-3 bg-secondary text-background rounded-lg hover:bg-darker hover:text-background transition"
        onClick={() => setIsFeedbackOpen(true)}
      >
        Give Feedback
      </button>
      <span className='text-darker ml-4'>(Testing Purpose)</span>
      {/* Feedback Popup */}
      <FeedbackForm isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </div>
      </div>

    </div>
  );
};

export default Login;
