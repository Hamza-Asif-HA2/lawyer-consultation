import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaChartLine, 
  FaComments, 
  FaUserTie,
  FaBell,
  FaSearch,
  FaDollarSign,
  FaStar,
  FaRegStar
} from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

const LawyerDashboard = () => {
  const [activeTab, setActiveTab] = useState('cases');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New consultation request from John Smith', time: '10 min ago', read: false },
    { id: 2, text: 'Your appointment with Sarah Johnson is confirmed', time: '2 hours ago', read: true },
    { id: 3, text: 'Payment received for case #12345', time: '1 day ago', read: true }
  ]);

  const cases = [
    { id: 1, title: 'Divorce Settlement', client: 'Emily Johnson', status: 'active', lastUpdated: '2 days ago' },
    { id: 2, title: 'Business Contract', client: 'Tech Solutions Inc.', status: 'pending', lastUpdated: '1 week ago' },
    { id: 3, title: 'Criminal Defense', client: 'Michael Brown', status: 'closed', lastUpdated: '3 weeks ago' }
  ];

  const appointments = [
    { id: 1, client: 'Sarah Williams', date: 'Today, 2:00 PM', type: 'Consultation', status: 'confirmed' },
    { id: 2, client: 'Robert Chen', date: 'Tomorrow, 10:30 AM', type: 'Case Review', status: 'confirmed' },
    { id: 3, client: 'Lisa Rodriguez', date: 'Friday, 4:15 PM', type: 'Document Signing', status: 'pending' }
  ];

  const recentClients = [
    { id: 1, name: 'Emily Johnson', case: 'Divorce Settlement', rating: 4.8 },
    { id: 2, name: 'Michael Brown', case: 'Criminal Defense', rating: 5.0 },
    { id: 3, name: 'Sarah Williams', case: 'Business Incorporation', rating: 4.5 }
  ];

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
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 font-raleway"
    >
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <FaBriefcase className="text-indigo-600 text-2xl" />
            <h1 className="text-xl font-bold text-gray-900">LawConnect Pro</h1>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-500 hover:text-gray-700"
            >
              <FaBell className="text-xl" />
              {notifications.filter(n => !n.read).length > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </motion.button>
            
            <div className="flex items-center space-x-2">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-indigo-100"
              />
              <span className="font-medium">Jane Doe, Esq.</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Overview Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {/* Active Cases Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">Active Cases</p>
                <h3 className="text-3xl font-bold mt-2">12</h3>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <FaBriefcase className="text-indigo-600 text-xl" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">+2 from last month</p>
          </motion.div>

          {/* Upcoming Appointments Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">Today's Appointments</p>
                <h3 className="text-3xl font-bold mt-2">3</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaCalendarAlt className="text-blue-600 text-xl" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Next at 2:00 PM</p>
          </motion.div>

          {/* Revenue Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">Monthly Revenue</p>
                <h3 className="text-3xl font-bold mt-2">$8,450</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FaDollarSign className="text-green-600 text-xl" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">+12% from last month</p>
          </motion.div>

          {/* Client Rating Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">Average Rating</p>
                <div className="flex items-center mt-2">
                  <StarRating rating={4.7} />
                  <span className="ml-2 text-xl font-bold">4.7</span>
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <FaStar className="text-yellow-600 text-xl" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">From 24 reviews</p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('cases')}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center space-x-2 ${activeTab === 'cases' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    <FaBriefcase />
                    <span>My Cases</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('appointments')}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center space-x-2 ${activeTab === 'appointments' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    <FaCalendarAlt />
                    <span>Appointments</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('documents')}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center space-x-2 ${activeTab === 'documents' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    <HiOutlineDocumentText />
                    <span>Documents</span>
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'cases' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {cases.map((caseItem) => (
                      <motion.div
                        key={caseItem.id}
                        whileHover={{ x: 5 }}
                        className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">{caseItem.title}</h4>
                          <p className="text-sm text-gray-500">{caseItem.client}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            caseItem.status === 'active' ? 'bg-green-100 text-green-800' :
                            caseItem.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {caseItem.status}
                          </span>
                          <span className="text-sm text-gray-500">{caseItem.lastUpdated}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'appointments' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {appointments.map((appointment) => (
                      <motion.div
                        key={appointment.id}
                        whileHover={{ x: 5 }}
                        className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">{appointment.client}</h4>
                          <p className="text-sm text-gray-500">{appointment.type}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm font-medium text-gray-900">{appointment.date}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'documents' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-12"
                  >
                    <HiOutlineDocumentText className="mx-auto text-4xl text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">No recent documents</h3>
                    <p className="text-gray-500 mt-2">Upload or create new documents to get started</p>
                    <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Upload Document
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { id: 1, action: 'Added new document to "Divorce Settlement" case', time: '2 hours ago' },
                  { id: 2, action: 'Received payment from Emily Johnson', time: '1 day ago' },
                  { id: 3, action: 'Scheduled meeting with Tech Solutions Inc.', time: '2 days ago' }
                ].map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-indigo-100 p-2 rounded-full">
                        <FaComments className="text-indigo-600 text-sm" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-800">Mark all as read</button>
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    whileHover={{ x: 3 }}
                    className={`p-3 rounded-lg ${!notification.read ? 'bg-indigo-50' : 'bg-gray-50'}`}
                  >
                    <p className="text-sm text-gray-900">{notification.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Clients */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Clients</h2>
              <div className="space-y-4">
                {recentClients.map((client) => (
                  <motion.div
                    key={client.id}
                    whileHover={{ x: 3 }}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <FaUserTie className="text-indigo-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{client.name}</p>
                      <p className="text-xs text-gray-500 truncate">{client.case}</p>
                    </div>
                    <div>
                      <StarRating rating={client.rating} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="p-3 bg-indigo-50 rounded-lg flex flex-col items-center justify-center hover:bg-indigo-100 transition-colors"
                >
                  <FaBriefcase className="text-indigo-600 mb-2" />
                  <span className="text-sm font-medium">New Case</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="p-3 bg-blue-50 rounded-lg flex flex-col items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <FaCalendarAlt className="text-blue-600 mb-2" />
                  <span className="text-sm font-medium">Schedule</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="p-3 bg-green-50 rounded-lg flex flex-col items-center justify-center hover:bg-green-100 transition-colors"
                >
                  <FaDollarSign className="text-green-600 mb-2" />
                  <span className="text-sm font-medium">Invoice</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="p-3 bg-purple-50 rounded-lg flex flex-col items-center justify-center hover:bg-purple-100 transition-colors"
                >
                  <HiOutlineDocumentText className="text-purple-600 mb-2 text-xl" />
                  <span className="text-sm font-medium">Document</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LawyerDashboard;