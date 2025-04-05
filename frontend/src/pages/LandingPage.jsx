import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiUserAdd, HiSearch, HiChatAlt2, HiOutlineArrowRight } from "react-icons/hi";
import { FaUserTie, FaQuoteLeft, FaFacebook, FaTwitter, FaLinkedin, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // Update the navigation links to use scroll behavior
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  const cardVariants = {
    offscreen: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
    },
    onscreen: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-raleway min-h-screen">
      {/* Navbar */}
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="flex justify-between items-center p-4 md:p-6 bg-white shadow-sm sticky top-0 z-50"
      >
        <Link to="/landingPage">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <img 
              src="https://cdn.pixabay.com/photo/2017/01/31/18/38/balance-2027328_1280.png" 
              alt="Logo" 
              className="w-8 h-8"
            />
            <h1 className="text-xl md:text-2xl font-bold text-indigo-700">LawConnect</h1>
          </motion.div>
        </Link>
        
 
     {/* Desktop Menu */}
<ul className="hidden md:flex gap-6 items-center">
  <motion.li whileHover={{ y: -2 }}>
    <Link 
      to="#" 
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('how-it-works');
      }}
      className="hover:text-indigo-600 transition-colors font-medium"
    >
      How It Works
    </Link>
  </motion.li>
  <motion.li whileHover={{ y: -2 }}>
    <Link 
      to="#" 
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('lawyers');
      }}
      className="hover:text-indigo-600 transition-colors font-medium"
    >
      Find Lawyers
    </Link>
  </motion.li>
  <motion.li whileHover={{ y: -2 }}>
    <Link 
      to="#" 
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('testimonials');
      }}
      className="hover:text-indigo-600 transition-colors font-medium"
    >
      Testimonials
    </Link>
  </motion.li>
  <motion.li whileHover={{ y: -2 }}>
    <Link 
      to="#" 
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('contact');
      }}
      className="hover:text-indigo-600 transition-colors font-medium"
    >
      Contact
    </Link>
  </motion.li>
  <motion.li>
    <Link to="/signup">
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
      >
        Sign Up <HiOutlineArrowRight />
      </motion.button>
    </Link>
  </motion.li>
</ul>

        {/* Mobile Menu Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-indigo-600 text-2xl" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white shadow-lg overflow-hidden w-full"
    >
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-2 py-4"
      >
        {[
          { name: "How It Works", id: "how-it-works" },
          { name: "Find Lawyers", id: "lawyers" },
          { name: "Testimonials", id: "testimonials" },
          { name: "Contact", id: "contact" },
        ].map((item, index) => (
          <motion.li 
            key={index}
            variants={fadeIn}
            className="w-full text-center"
          >
            <Link 
              to="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
                setMenuOpen(false);
              }}
              className="block py-3 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
        <motion.li variants={fadeIn} className="mt-2">
          <Link to="/signup">
            <button 
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto shadow-md"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up <HiOutlineArrowRight />
            </button>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  )}
</AnimatePresence>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white opacity-90 z-0"></div>
        <header className="grid md:grid-cols-2 items-center py-12 md:py-20 px-6 max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Connecting You With <span className="text-indigo-600">Top Legal</span> Professionals
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find the perfect lawyer for your needs with our easy-to-use platform. Get matched with experienced attorneys in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/lawyerFeed">
                <motion.button 
                  whileHover={{ y: -2, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg"
                >
                  <HiSearch className="text-xl" /> Find a Lawyer
                </motion.button>
              </Link>
              <Link to="/lawyerProfile">
                <motion.button 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium flex items-center gap-2 shadow-md"
                >
                  <HiUserAdd className="text-xl" /> Join as Lawyer
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Trusted by 5,000+ clients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 md:mt-0 relative"
          >
            <img
              src="https://images.pexels.com/photos/5668483/pexels-photo-5668483.jpeg" 
              alt="Legal consultation"
              className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <HiChatAlt2 className="text-indigo-600 text-2xl" />
                </div>
                <div>
                  <p className="font-semibold">Free Consultation</p>
                  <p className="text-sm text-gray-600">30 minutes with any lawyer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </header>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        id="how-it-works" 
        className="py-16 px-6 text-center bg-gradient-to-b from-white to-indigo-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Simple Steps to Legal Solutions</h3>
          <p className="text-gray-600 mb-12">Getting legal help has never been easier</p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto"
        >
          {[
            { 
              step: "1. Create Account", 
              desc: "Sign up in minutes as a client or lawyer.", 
              icon: <HiUserAdd className="text-4xl mx-auto text-indigo-600" />,
              bg: "bg-indigo-50"
            },
            { 
              step: "2. Find Your Match", 
              desc: "Search our network of qualified attorneys.", 
              icon: <HiSearch className="text-4xl mx-auto text-indigo-600" />,
              bg: "bg-indigo-100"
            },
            { 
              step: "3. Get Legal Help", 
              desc: "Schedule consultations and resolve your issues.", 
              icon: <HiChatAlt2 className="text-4xl mx-auto text-indigo-600" />,
              bg: "bg-indigo-50"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className={`${item.bg} p-8 rounded-xl shadow-md hover:shadow-lg transition-all`}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="mb-6"
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-semibold mb-3">{item.step}</h4>
              <p className="text-gray-600">{item.desc}</p>
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-6 text-indigo-600 font-medium flex items-center justify-center gap-2"
              >
                Learn more <HiOutlineArrowRight />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Featured Lawyers */}
      <motion.section 
        id="lawyers" 
        className="py-16 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Trusted Legal Professionals</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highly qualified attorneys specializing in various fields of law
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { 
              id: "1",
              name: "John Doe", 
              specialty: "Criminal Defense", 
              photo: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg",
              rating: 4.9,
              experience: "12 years"
            },
            { 
              id: "2",
              name: "Jane Smith", 
              specialty: "Corporate Law", 
              photo: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg",
              rating: 4.8,
              experience: "15 years"
            },
            { 
              id: "3",
              name: "Emily Johnson", 
              specialty: "Family Law", 
              photo: "https://images.pexels.com/photos/3760919/pexels-photo-3760919.jpeg",
              rating: 4.7,
              experience: "10 years"
            }
          ].map((lawyer) => (
            <motion.div 
              key={lawyer.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-xl shadow-lg text-center transition-all"
            >
              <div className="relative mx-auto w-32 h-32 mb-6">
                <img 
                  src={lawyer.photo} 
                  alt={lawyer.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-indigo-100"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                  {lawyer.experience}
                </div>
              </div>
              <h4 className="text-xl font-semibold flex items-center justify-center gap-2">
                <FaUserTie className="text-indigo-600" /> {lawyer.name}
              </h4>
              <p className="mt-2 text-sm text-gray-600">{lawyer.specialty}</p>
              
              <div className="mt-4 flex justify-center items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar 
                    key={star} 
                    className={`text-sm ${star <= Math.floor(lawyer.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{lawyer.rating}</span>
              </div>
              
              <Link to={`/lawyer-profile/${lawyer.id}`}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  View Profile
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/lawyerFeed">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium flex items-center gap-2 mx-auto shadow-md hover:bg-indigo-50 transition-all"
            >
              Browse All Lawyers <HiOutlineArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        id="testimonials" 
        className="py-16 px-6 bg-indigo-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">What Our Clients Say</h3>
          <p className="text-indigo-100">
            Don't just take our word for it - hear from people who found legal solutions through LawConnect
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              quote: "LawConnect helped me find the perfect attorney for my business needs. The process was seamless and I saved hours of research time.",
              author: "Michael Brown",
              role: "Small Business Owner",
              rating: 5
            },
            {
              quote: "As a single parent going through a difficult divorce, I found compassionate and competent legal representation through this platform.",
              author: "Sarah Wilson",
              role: "Client",
              rating: 5
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white text-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar 
                    key={star} 
                    className={`text-yellow-400 ${star <= testimonial.rating ? 'opacity-100' : 'opacity-30'}`}
                  />
                ))}
              </div>
              <FaQuoteLeft className="text-indigo-300 text-2xl mb-4" />
              <p className="text-lg italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Find Your Legal Solution?</h3>
          <p className="text-indigo-100 mb-8">
            Join thousands of satisfied clients who found the right legal representation through LawConnect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lawyerFeed">
              <motion.button 
                whileHover={{ y: -2, boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold flex items-center gap-2 shadow-lg"
              >
                Find a Lawyer <HiOutlineArrowRight />
              </motion.button>
            </Link>
            <Link to="/signup">
              <motion.button 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium flex items-center gap-2"
              >
                Sign Up Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          >
            <div>
              <h4 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                <img 
                  src="https://cdn.pixabay.com/photo/2017/01/31/18/38/balance-2027328_1280.png" 
                  alt="Logo" 
                  className="w-6 h-6"
                />
                LawConnect
              </h4>
              <p className="text-sm">
                Connecting clients with top legal professionals since 2020.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-medium mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="#how-it-works" className="hover:text-white transition-colors text-sm">How It Works</Link></li>
                <li><Link to="#lawyers" className="hover:text-white transition-colors text-sm">Find Lawyers</Link></li>
                <li><Link to="#testimonials" className="hover:text-white transition-colors text-sm">Testimonials</Link></li>
                <li><Link to="#contact" className="hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-medium mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors text-sm">Cookie Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-medium mb-4">Connect With Us</h5>
              <div className="flex gap-4 mb-4">
                <motion.a 
                  href="#" 
                  whileHover={{ y: -3 }}
                  className="bg-gray-700 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -3 }}
                  className="bg-gray-700 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -3 }}
                  className="bg-gray-700 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
              <p className="text-sm">contact@lawconnect.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </motion.div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} LawConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;