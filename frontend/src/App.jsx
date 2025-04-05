import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LawyerProfileSetup from './pages/LawyerProfile';
import ConsultationBooking from './pages/LawyerConsultaion';
import PaymentForm from './pages/PaymentForm';
import LawyersList from './pages/LawyersFeed';
import LawyerProfile from './pages/ViewLawyerProfile';
import LawyerDashboard from './pages/LawyerDashboard';

function App() {
  const isLoggedIn = false; // Replace with your actual auth logic

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lawyerProfile" element={<LawyerProfileSetup />} />
        <Route path="/lawyerConsultation" element={<ConsultationBooking />} />
        <Route path="/paymentMethod" element={<PaymentForm />} />
        {/* <Route path="/landingPage" element={<LandingPage />} /> */}
        <Route path="/lawyerFeed" element={<LawyersList />} />
        <Route path="/lawyer-profile" element={<LawyerProfile />} />
        <Route path="/lawyer-dashboard" element={<LawyerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
