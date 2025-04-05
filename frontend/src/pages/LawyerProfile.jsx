import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserTie, FaBriefcase, FaClock, FaDollarSign, FaEnvelope, FaPhone } from 'react-icons/fa';

const LawyerProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    experience: '',
    fees: '',
    contact: '',
    bio: '',
    languages: ['English'],
    workingHours: '9am - 5pm'
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Submitting profile:", formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/lawyer-dashboard');
    } catch (error) {
      console.error("Error submitting profile:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: "Personal Information",
      fields: [
        {
          name: "name",
          label: "Full Name",
          icon: <FaUserTie className="text-indigo-600" />,
          type: "text",
          placeholder: "John Doe"
        },
        {
          name: "contact",
          label: "Contact Information",
          icon: <FaPhone className="text-indigo-600" />,
          type: "text",
          placeholder: "email@example.com or +1234567890"
        }
      ]
    },
    {
      title: "Professional Details",
      fields: [
        {
          name: "specialization",
          label: "Specialization",
          icon: <FaBriefcase className="text-indigo-600" />,
          type: "text",
          placeholder: "Criminal Law, Family Law, etc."
        },
        {
          name: "experience",
          label: "Years of Experience",
          icon: <FaClock className="text-indigo-600" />,
          type: "number",
          placeholder: "5"
        },
        {
          name: "fees",
          label: "Hourly Fees (in $)",
          icon: <FaDollarSign className="text-indigo-600" />,
          type: "number",
          placeholder: "200"
        }
      ]
    },
    {
      title: "Additional Information",
      fields: [
        {
          name: "bio",
          label: "Professional Bio",
          icon: <FaEnvelope className="text-indigo-600" />,
          type: "textarea",
          placeholder: "Tell clients about your experience and approach..."
        }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4 font-raleway"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="bg-gray-100 h-2">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-indigo-600"
          />
        </div>

        <div className="p-8">
          {/* Step Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {steps[currentStep - 1].title}
            </h1>
            <p className="text-gray-600">
              Step {currentStep} of {steps.length}
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={currentStep === steps.length ? handleProfileSubmit : handleNext}>
            <motion.div
              key={currentStep}
              initial={{ x: currentStep > 1 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: currentStep > 1 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {steps[currentStep - 1].fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label htmlFor={field.name} className="flex items-center gap-2 text-gray-700 font-medium">
                    {field.icon} {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none min-h-[120px]"
                      required={currentStep === steps.length}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              {currentStep > 1 ? (
                <motion.button
                  type="button"
                  onClick={handleBack}
                  whileHover={{ x: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 text-indigo-600 font-medium rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  Back
                </motion.button>
              ) : (
                <div></div> // Empty div to maintain space
              )}

              {currentStep < steps.length ? (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                  onClick={handleNext}
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="ml-auto px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    "Save Profile"
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LawyerProfileSetup;
