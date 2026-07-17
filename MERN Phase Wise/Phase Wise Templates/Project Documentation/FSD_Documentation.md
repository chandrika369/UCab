# Full Stack Development with MERN
# Project Documentation

---

## 1. Introduction

**Project Title:** UCab – Cab Booking Application

**Team Members:**

| Name       | Role                        |
|------------|-----------------------------|
| Chandrika  | Full Stack Developer (MERN) |

---

## 2. Project Overview

**Purpose:**

UCab is a full-stack web application that allows users to book cabs online in a fast, reliable, and affordable way. The platform provides a seamless cab booking experience for users and a powerful management panel for admins to oversee the fleet, users, and bookings.

**Features:**

- User Registration and Login with Role-Based Access (User / Admin)
- Landing page with hero section
- Browse all available cabs with search and sort by price
- Live fare estimate before confirming a booking (distance × price per km)
- Book a cab instantly by entering pickup, drop location and distance
- View all bookings and cancel active ones
- Admin Dashboard with live stats (Total Users, Cabs, Bookings)
- Admin can add new cabs to the fleet
- Admin can view all registered users and manage the complete cab list
- JWT based secure authentication
- Separate Navbar for User and Admin roles

---

## 3. Architecture

**Frontend:**

The frontend is built using React.js with Vite as the build tool. It uses React Router DOM for client-side routing and Bootstrap 5 for responsive UI styling. The app has separate pages for User and Admin roles with two different Navbar components rendered based on the logged-in user's role.

**Backend:**

The backend follows the MVC (Model-View-Controller) architecture built with Node.js and Express.js. It exposes a RESTful API consumed by the React frontend. Authentication is handled using JWT (JSON Web Tokens). The backend is organized into:

- Models – MongoDB schemas
- Controllers – Business logic
- Routes – API endpoint definitions
- Middleware – JWT authentication guard
- Config – Database connection

**Database:**

MongoDB is used as the database with Mongoose as the ODM library. Three main collections:

- Users – Stores name, email, hashed password, phone, role, wallet
- Cabs – Stores driver name, cab number, cab type, price per km, availability, location
- Bookings – Links a user to a cab with pickup, drop, distance, fare, and status

---

## 4. Setup Instructions

**Prerequisites:**

- Node.js (v18 or above)
- MongoDB Atlas account
- npm
- Git

**Installation:**

Step 1 – Clone the repository
```
git clone https://github.com/chandrika369/UCab.git
cd UCab
```

Step 2 – Setup Backend
```
cd server
npm install
```

Create a .env file inside the server/ folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Step 3 – Setup Frontend
```
cd client
npm install
```

---

## 5. Folder Structure

**Client:**
```
client/
├── src/
│   ├── components/
│   │   ├── AdminNavbar.jsx
│   │   └── UserNavbar.jsx
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminUsers.jsx
│   │   │   ├── AdminCabs.jsx
│   │   │   └── AdminAddCab.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── BookCab.jsx
│   │   └── MyBookings.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── package-lock.json
```

**Server:**
```
server/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── cabController.js
│   ├── bookingController.js
│   └── adminController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Cab.js
│   └── Booking.js
├── routes/
│   ├── authRoutes.js
│   ├── cabRoutes.js
│   ├── bookingRoutes.js
│   └── adminRoutes.js
├── server.js
├── package.json
└── package-lock.json
```

---

## 6. Running the Application

Start the Backend Server:
```
cd server
npm start
```
Server runs at: http://localhost:5000

Start the Frontend:
```
cd client
npm start
```
Frontend runs at: http://localhost:5173

---

## 7. API Documentation

### Auth Routes /api/auth

| Method | Endpoint  | Description       | Request Body                       |
|--------|-----------|-------------------|------------------------------------|
| POST   | /register | Register new user | name, email, phone, password, role |
| POST   | /login    | Login user        | email, password                    |

### Cab Routes /api/cabs

| Method | Endpoint | Description        | Auth |
|--------|----------|--------------------|------|
| GET    | /        | Get available cabs | No   |
| GET    | /all     | Get all cabs       | Yes  |
| POST   | /        | Add new cab        | Yes  |

### Booking Routes /api/bookings

| Method | Endpoint    | Description      | Auth |
|--------|-------------|------------------|------|
| POST   | /           | Book a cab       | Yes  |
| GET    | /           | Get my bookings  | Yes  |
| PATCH  | /:id/cancel | Cancel a booking | Yes  |

### Admin Routes /api/admin

| Method | Endpoint | Description        | Auth |
|--------|----------|--------------------|------|
| GET    | /stats   | Get platform stats | Yes  |
| GET    | /users   | Get all users      | Yes  |

---

## 8. Authentication

Authentication is implemented using JWT (JSON Web Tokens).

- User registers with name, email, phone, password and role
- Password is hashed using bcryptjs before storing in MongoDB
- On login, credentials are verified and a JWT token is generated with 7-day expiry
- Token is stored in localStorage on the client side
- For protected routes, token is sent in Authorization header as Bearer token
- authMiddleware.js verifies the token on every protected request
- After login, user is redirected based on role:
  - admin → /admin/dashboard
  - user → /dashboard

---

## 9. User Interface

| Page            | Route            | Access |
|-----------------|------------------|--------|
| Landing Page    | /                | Public |
| Login           | /login           | Public |
| Register        | /register        | Public |
| User Dashboard  | /dashboard       | User   |
| Book Cab        | /book            | User   |
| My Bookings     | /mybookings      | User   |
| Admin Dashboard | /admin/dashboard | Admin  |
| Admin Users     | /admin/users     | Admin  |
| Admin Cabs      | /admin/cabs      | Admin  |
| Admin Add Cab   | /admin/addcab    | Admin  |

---

## 10. Testing

Manual testing was performed for all features:

| Feature            | Result |
|--------------------|--------|
| User Registration  | Pass   |
| User Login         | Pass   |
| Role Redirect      | Pass   |
| Book Cab           | Pass   |
| Fare Estimate      | Pass   |
| My Bookings        | Pass   |
| Cancel Booking     | Pass   |
| Add Cab (Admin)    | Pass   |
| View Users (Admin) | Pass   |
| JWT Protection     | Pass   |

---

## 11. Screenshots or Demo

Demo Video:
https://drive.google.com/file/d/1vDyR4jfC77aZJKfgsEeQ6LGq0B-k-8GT/view?usp=drive_link

GitHub Repository:
https://github.com/chandrika369/UCab

---

## 12. Known Issues

- Cab availability status does not automatically update when a booking is made
- No route guards on frontend
- Image upload for cabs is a placeholder, not connected to backend storage

---

## 13. Future Enhancements

- Real-time cab tracking using Socket.io
- Google Maps API for actual distance calculation
- Payment gateway integration (Razorpay / Stripe)
- Push notifications for booking confirmation
- Driver mobile app
- Rating and review system for drivers
- Email confirmation on successful booking
- OTP-based login
