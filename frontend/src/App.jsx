
import './App.css'
import FeedbackForm from './pages/FeedbackForm'
import ConsultationBooking from './pages/LawyerConsultaion'
import LawyerProfileSetup from './pages/LawyerProfile'
import Login from './pages/Login'
import PaymentForm from './pages/PaymentForm'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router'
function App() {

  return (
    <>
    {/* <AppBar /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lawyerProfile" element={<LawyerProfileSetup />} />
        <Route path="/lawyerConsultation" element={<ConsultationBooking />} />
        <Route path="/paymentMethod" element={<PaymentForm />} />
     
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
