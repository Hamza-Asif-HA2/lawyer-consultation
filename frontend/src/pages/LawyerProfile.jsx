import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LawyerProfileSetup = () => {
  const navigate = useNavigate();
  // State variables for holding lawyer profile inputs
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [fees, setFees] = useState('');
  const [contact, setContact] = useState('');

  // Handle form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Lawyer Name:", name);
    console.log("Specialization:", specialization);
    console.log("Experience:", experience);
    console.log("Fees:", fees);
    console.log("Contact:", contact);
    // Add your logic to save profile (e.g., API call to save data)
  };

  return (
    <div className='lawyer-profile-page max-w-3xl mx-auto h-screen bg-primary flex flex-col justify-center items-center p-4 font-raleway'>
      {/* Lawyer Profile Container */}
      <div className='profile-container w-full max-w-md bg-background rounded-lg shadow-lg border border-primary p-8 '>
        {/* Heading */}
        <h1 className='text-3xl font-bold text-darker font-raleway text-center mb-6 '>
          Lawyer Profile Setup
        </h1>

        {/* Profile Form */}
        <form className='flex flex-col gap-6' onSubmit={handleProfileSubmit}>
          {/* Name Input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='text-darker font-raleway font-medium'>
              Full Name
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter your full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='text-darker w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all'
              required
            />
          </div>

          {/* Specialization Input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='specialization' className='text-darker font-raleway font-medium'>
              Specialization
            </label>
            <input
              id='specialization'
              type='text'
              placeholder='Enter your specialization'
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker'
              required
            />
          </div>

          {/* Experience Input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='experience' className='text-darker font-raleway font-medium'>
              Years of Experience
            </label>
            <input
              id='experience'
              type='number'
              placeholder='Enter years of experience'
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker'
              required
            />
          </div>

          {/* Fees Input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='fees' className='text-darker font-raleway font-medium'>
              Hourly Fees (in $)
            </label>
            <input
              id='fees'
              type='number'
              placeholder='Enter your hourly fees'
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker'
              required
            />
          </div>

          {/* Contact Info Input */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='contact' className='text-darker font-raleway font-medium'>
              Contact Information
            </label>
            <input
              id='contact'
              type='text'
              placeholder='Enter your contact info (email/phone)'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className='w-full px-4 py-2 border border-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-darker'
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-secondary text-darker font-raleway font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all'
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default LawyerProfileSetup;
