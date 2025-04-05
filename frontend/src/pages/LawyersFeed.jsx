import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiOutlineArrowRight } from "react-icons/hi";
import { FaStar, FaRegStar, FaClock } from "react-icons/fa";

// Sample Data (15 lawyers across 4 categories)
const lawyersByCategory = {
  "Criminal Law": [
    {
      id: 1,
      name: "John Doe",
      specialty: "Criminal Defense",
      rating: 4.8,
      hours: "9am - 5pm",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      experience: "12 years",
      price: "$250/hr",
      languages: ["English", "Spanish"]
    },
    {
      id: 2,
      name: "Alex Turner",
      specialty: "White-Collar Crime",
      rating: 4.5,
      hours: "10am - 6pm",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      experience: "8 years",
      price: "$200/hr",
      languages: ["English", "French"]
    },
    {
      id: 3,
      name: "Olivia Ford",
      specialty: "Violent Crimes",
      rating: 4.9,
      hours: "8am - 4pm",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      experience: "15 years",
      price: "$300/hr",
      languages: ["English"]
    },
  ],
  "Family Law": [
    {
      id: 4,
      name: "Sarah Khan",
      specialty: "Divorce & Custody",
      rating: 4.9,
      hours: "8am - 4pm",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      experience: "10 years",
      price: "$225/hr",
      languages: ["English", "Urdu"]
    },
    {
      id: 5,
      name: "Emily Watson",
      specialty: "Adoption & Guardianship",
      rating: 4.7,
      hours: "10am - 5pm",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
      experience: "7 years",
      price: "$180/hr",
      languages: ["English", "German"]
    },
    {
      id: 6,
      name: "Mike Hall",
      specialty: "Marriage Laws",
      rating: 4.6,
      hours: "9am - 4pm",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      experience: "9 years",
      price: "$190/hr",
      languages: ["English"]
    },
  ],
  "Corporate Law": [
    {
      id: 7,
      name: "Jane Smith",
      specialty: "Business Contracts",
      rating: 4.5,
      hours: "11am - 7pm",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      experience: "11 years",
      price: "$350/hr",
      languages: ["English", "Mandarin"]
    },
    {
      id: 8,
      name: "David Lee",
      specialty: "Mergers & Acquisitions",
      rating: 4.4,
      hours: "9am - 5pm",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      experience: "6 years",
      price: "$275/hr",
      languages: ["English", "Korean"]
    },
    {
      id: 9,
      name: "Thomas Wayne",
      specialty: "International Law",
      rating: 4.7,
      hours: "12pm - 8pm",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      experience: "14 years",
      price: "$400/hr",
      languages: ["English", "French", "Spanish"]
    },
  ],
  "Civil Rights": [
    {
      id: 10,
      name: "Angela Brown",
      specialty: "Discrimination & Equality",
      rating: 5.0,
      hours: "10am - 6pm",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      experience: "18 years",
      price: "$280/hr",
      languages: ["English"]
    },
    {
      id: 11,
      name: "Carlos Diaz",
      specialty: "Police Misconduct",
      rating: 4.6,
      hours: "9am - 3pm",
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      experience: "10 years",
      price: "$220/hr",
      languages: ["English", "Spanish"]
    },
    {
      id: 12,
      name: "Lisa Green",
      specialty: "LGBTQ+ Rights",
      rating: 4.8,
      hours: "11am - 6pm",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      experience: "8 years",
      price: "$240/hr",
      languages: ["English", "ASL"]
    },
    {
      id: 13,
      name: "Mohammed Ali",
      specialty: "Religious Freedom",
      rating: 4.9,
      hours: "9am - 6pm",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
      experience: "13 years",
      price: "$260/hr",
      languages: ["English", "Arabic"]
    },
  ],
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        i < Math.floor(rating) ? (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400 text-sm" />
        )
      ))}
      <span className="ml-2 text-sm font-medium text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const LawyersList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const filteredLawyersByCategory = Object.entries(lawyersByCategory).reduce(
    (acc, [category, lawyers]) => {
      const filtered = lawyers.filter(
        (lawyer) =>
          lawyer.name.toLowerCase().includes(search.toLowerCase()) ||
          lawyer.specialty.toLowerCase().includes(search.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
      return acc;
    },
    {}
  );

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const categoryItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 py-12 text-gray-800 font-raleway">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-800">Find the Right Lawyer for Your Needs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with top-rated legal professionals in various specialties
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 relative max-w-2xl mx-auto"
        >
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search by name, specialty, or language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            />
          </div>
        </motion.div>

        {/* Categories and Lawyers */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {Object.entries(filteredLawyersByCategory).map(([category, lawyers]) => (
            <motion.div 
              key={category}
              variants={categoryItem}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-700 border-b pb-2 border-indigo-100">
                {category}
              </h3>
              
              <motion.div
                variants={container}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {lawyers.map((lawyer) => (
                  <motion.div
                    key={lawyer.id}
                    variants={item}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        src={lawyer.image}
                        alt={lawyer.name}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h4 className="text-white font-semibold text-lg">{lawyer.name}</h4>
                        <p className="text-indigo-200 text-sm">{lawyer.specialty}</p>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="mb-3">
                        <StarRating rating={lawyer.rating} />
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <FaClock className="mr-2 text-indigo-500" />
                        <span>{lawyer.hours}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {lawyer.languages.map((lang, i) => (
                          <span key={i} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                            {lang}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {lawyer.price}
                        </span>
                        <motion.button
                          onClick={() => navigate("/lawyer-profile", { state: { lawyer } })}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-indigo-700 transition-colors"
                        >
                          View Profile <HiOutlineArrowRight className="text-sm" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {Object.keys(filteredLawyersByCategory).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" 
                  alt="No results" 
                  className="w-32 h-32 mx-auto mb-6 opacity-70"
                />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No lawyers found</h3>
                <p className="text-gray-500 mb-6">
                  {search ? 
                    "Try adjusting your search or filter to find what you're looking for." :
                    "We couldn't find any lawyers matching your criteria."
                  }
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSearch("")}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Clear Search
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LawyersList;