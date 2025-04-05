import { useLocation, useNavigate } from "react-router-dom";
import { FaCommentDots, FaStar, FaRegStar, FaClock, FaPhone, FaEnvelope, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LawyerProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const lawyer = state?.lawyer || {
    id: 1,
    name: "John Doe",
    specialty: "Criminal Defense",
    rating: 4.8,
    hours: "9am - 5pm",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    experience: "12 years",
    price: "$250/hr",
    languages: ["English", "Spanish"],
    about: "Highly experienced criminal defense attorney with a track record of successful cases. Specializes in DUI, drug offenses, and white-collar crimes.",
    reviews: [
      {
        client: "Michael Johnson",
        rating: 5,
        date: "2023-05-15",
        feedback: "John was incredibly professional and helped me navigate a difficult situation. His expertise made all the difference in my case."
      },
      {
        client: "Sarah Williams",
        rating: 4,
        date: "2023-03-22",
        feedback: "Knowledgeable and responsive. Would definitely recommend to others needing criminal defense."
      }
    ]
  };

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "lawyer", text: "Hello, how can I help you today?", time: "10:30 AM" },
    { sender: "user", text: "Hi, I have a question about my case.", time: "10:32 AM" }
  ]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { sender: "user", text: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setMessage("");
      // Simulate lawyer reply after 1 second
      setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: "lawyer", text: "Thanks for your message. I'll get back to you shortly.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      }, 1000);
    }
  };

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          i < fullStars ? (
            <FaStar key={i} className="text-yellow-400" />
          ) : i === fullStars && hasHalfStar ? (
            <div key={i} className="relative">
              <FaRegStar className="text-yellow-400" />
              <div className="absolute left-0 top-0 w-1/2 overflow-hidden">
                <FaStar className="text-yellow-400" />
              </div>
            </div>
          ) : (
            <FaRegStar key={i} className="text-yellow-400" />
          )
        ))}
        <span className="ml-2 text-gray-700 dark:text-gray-300">{rating.toFixed(1)}</span>
      </div>
    );
  };

  if (!lawyer) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6"
      >
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No lawyer data available</h2>
          <p className="text-gray-600 mb-6">The lawyer profile you're looking for couldn't be found.</p>
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
          >
            Back to Lawyers List
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 text-gray-800 py-10 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Profile Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
        >
          {/* Lawyer Image */}
          <div className="md:w-1/3 p-6 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <img
                src={lawyer.image}
                alt={lawyer.name}
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-indigo-100 shadow-md"
              />
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                {lawyer.experience} experience
              </div>
            </motion.div>

            <div className="mt-8 w-full space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleChatToggle}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md hover:bg-indigo-700 transition-colors"
              >
                <FaCommentDots /> Message Lawyer
              </motion.button>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Availability</h4>
                <div className="flex items-center text-gray-700">
                  <FaClock className="mr-2 text-indigo-600" />
                  <span>{lawyer.hours}</span>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <FaPhone className="mr-2 text-indigo-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaEnvelope className="mr-2 text-indigo-600" />
                    <span>{lawyer.name.split(" ").join(".").toLowerCase()}@lawfirm.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lawyer Details */}
          <div className="md:w-2/3 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{lawyer.name}</h1>
                <p className="text-xl text-indigo-600 mt-1">{lawyer.specialty}</p>
                <div className="mt-4">
                  <StarRating rating={lawyer.rating} />
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">{lawyer.price}</span>
                <p className="text-sm text-gray-500">per hour</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About</h3>
              <p className="text-gray-700 leading-relaxed">{lawyer.about}</p>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {lawyer.languages.map((lang, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Reviews</h3>
              
              {lawyer.reviews?.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  {lawyer.reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-gray-50 p-5 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{review.client}</h4>
                          <div className="flex items-center mt-1">
                            <StarRating rating={review.rating} />
                            <span className="ml-3 text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-700">{review.feedback}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center text-indigo-600 font-medium"
          >
            ← Back to all lawyers
          </motion.button>
        </motion.div>
      </div>

      {/* Chat Box */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-6 right-6 w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 flex flex-col z-50"
            style={{ height: "500px" }}
          >
            {/* Chat Header */}
            <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src={lawyer.image} 
                  alt={lawyer.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h4 className="font-semibold">{lawyer.name}</h4>
                  <p className="text-xs text-indigo-100">Online</p>
                </div>
              </div>
              <button
                onClick={handleChatToggle}
                className="text-white hover:text-indigo-200 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-3">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-3 bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white p-2 rounded-lg"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LawyerProfile;