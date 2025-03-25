# Lawyer Consulation Website (Project)

## File Structure
```
lawyer-consultation/
│── backend/
│   ├── models/             # Database models (MongoDB schemas)
│   │   ├── User.js
│   │   ├── LawyerProfile.js
│   │   ├── Appointment.js
│   │   ├── Payment.js
│   │   ├── Feedback.js
│   │
│   ├── routes/             # API routes for the backend
│   │   ├── authRoutes.js
│   │   ├── lawyerRoutes.js
│   │   ├── appointmentRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── feedbackRoutes.js
│   │
│   ├── controllers/        # Controllers (handling request logic)
│   │   ├── authController.js
│   │   ├── lawyerController.js
│   │   ├── appointmentController.js
│   │   ├── paymentController.js
│   │   ├── feedbackController.js
│   │
│   ├── middleware/         # Middleware (authentication, error handling)
│   │   ├── authMiddleware.js
│   │
│   ├── config/             # Configuration files (database, env setup)
│   │   ├── db.js           # MongoDB connection setup
│   │
│   ├── server.js          # Main Express server file
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   ├── README.md          # Documentation
│
│── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components (Forms, Buttons, etc.)
│   │   │   ├── Navbar.js
│   │   │   ├── LawyerCard.js
│   │   │   ├── Rating.js
│   │
│   │   ├── pages/           # Main pages (views)
│   │   │   ├── Home.js
│   │   │   ├── Register.js
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   ├── LawyerProfile.js
│   │   │   ├── BookAppointment.js
│   │   │   ├── Payment.js
│   │   │   ├── Feedback.js
│   │
│   │   ├── api/             # API requests (axios calls)
│   │   │   ├── authApi.js
│   │   │   ├── lawyerApi.js
│   │   │   ├── appointmentApi.js
│   │   │   ├── paymentApi.js
│   │
│   │   ├── redux/           # Redux state management
│   │   │   ├── store.js
│   │   │   ├── userSlice.js
│   │   │   ├── lawyerSlice.js
│   │
│   │   ├── App.js          # Main React app file
│   │   ├── index.js        # React entry point
│   │   ├── styles/         # Global styles (CSS, Tailwind)
│   │
│   ├── public/             # Static assets (images, icons)
│   │   ├── logo.png
│   │
│   ├── .env               # Frontend environment variables
│   ├── package.json       # Frontend dependencies
│   ├── README.md          # Documentation
│
│── README.md              # Project overview
│── .gitignore             # Files to ignore in Git
```


## Backend Setup

### Step 01:
Make a new directory named as "backend". Navigate to backend directory and initialize the Node.js project:

```shell
mkdir backend
cd backend
npm init -y
```
The -y flag auto-generates a package.json file.

### Step 02:
Install Dependencies:

```shell
npm install express mongoose dotenv cors bcryptjs jsonwebtoken multer stripe socket.io
```

Dependencies Guide:

```
express → Backend framework

mongoose → To connect with MongoDB

dotenv → To manage environment variables (like API keys)

cors → To allow frontend-backend communication

bcryptjs → For password encryption

jsonwebtoken → For authentication (JWT)

multer → For file uploads (like document sharing)

stripe → For payment processing

socket.io → For real-time video consultation
```

