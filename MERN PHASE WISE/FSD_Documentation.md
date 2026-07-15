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
- User can browse all available cabs with search and sort by price
- Live fare estimate before confirming a booking
- User can book a cab instantly by entering pickup, drop location and distance
- User can view all their bookings and cancel active ones
- Admin Dashboard with live stats (Total Users, Cabs, Bookings)
- Admin can add new cabs to the fleet
- Admin can view all registered users
- Admin can view and manage the complete cab list
- JWT based secure authentication
- Separate Navbar for User and Admin roles

---

## 3. Architecture

**Frontend:**

The frontend is built using **React.js** with **Vite** as the build tool. It uses **React Router DOM** for client-side routing and **Bootstrap 5** for responsive UI styling. The app is structured with separate pages for User and Admin roles, with two different Navbar components rendered conditionally based on the logged-in user's role.

**Backend:**

The backend follows the **MVC (Model-View-Controller)** architecture built with **Node.js** and **Express.js**. It exposes a RESTful API consumed by the React frontend. Authentication is handled using **JWT (JSON Web Tokens)**. The backend is organized into:
- **Models** – MongoDB schemas
- **Controllers** – Business logic
- **Routes** – API endpoint definitions
- **Middleware** – JWT authentication guard
- **Config** – Database connection

**Database:**

**MongoDB** is used as the database with **Mongoose** as the ODM (Object Data Modelling) library. There are three main collections:

- **Users** – Stores user details including name, email, hashed password, phone, role, and wallet
- **Cabs** – Stores cab details including driver name, cab number, cab type, price per km, availability, and current location
- **Bookings** – Stores booking details linking a user to a cab with pickup location, drop location, distance, fare, and status

---

## 4. Setup Instructions

**Prerequisites:**

- Node.js (v18 or above)
- MongoDB (Atlas or Local)
- npm (comes with Node.js)
- Git

**Installation:**

**Step 1 – Clone the repository**
```bash
git clone https://github.com/chandrika369/UCab.git
cd UCab
```

**Step 2 – Setup Backend**
```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

**Step 3 – Setup Frontend**
```bash
cd client
npm install
```

---

## 5. Folder Structure

**Client:**
```
client/
├── public/
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

**Start the Backend Server:**
```bash
cd server
npm run dev
```
Server runs at: `http://localhost:5000`

**Start the Frontend:**
```bash
cd client
npm run dev
```
Frontend runs at: `http://localhost:5173`

---

## 7. API Documentation

### Auth Routes – `/api/auth`

| Method | Endpoint    | Description        | Request Body                              |
|--------|-------------|--------------------|-------------------------------------------|
| POST   | /register   | Register new user  | `{ name, email, phone, password, role }` |
| POST   | /login      | Login user         | `{ email, password }`                    |

**Example Response – Login:**
```json
{
  "message": "Login Successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "64abc...",
    "name": "Chandrika",
    "email": "chandrika@gmail.com",
    "role": "user"
  }
}
```

---

### Cab Routes – `/api/cabs`

| Method | Endpoint | Description               | Auth Required |
|--------|----------|---------------------------|---------------|
| GET    | /        | Get all available cabs    | No            |
| GET    | /all     | Get all cabs (admin)      | Yes           |
| POST   | /        | Add new cab               | Yes           |

**Example Response – Get Cabs:**
```json
[
  {
    "_id": "64xyz...",
    "driverName": "Rahul Mehta",
    "cabNumber": "MH12AB1234",
    "cabType": "Sedan",
    "pricePerKm": 12,
    "available": true,
    "currentLocation": "Mumbai Central"
  }
]
```

---

### Booking Routes – `/api/bookings`

| Method | Endpoint        | Description         | Auth Required |
|--------|-----------------|---------------------|---------------|
| POST   | /               | Book a cab          | Yes           |
| GET    | /               | Get my bookings     | Yes           |
| PATCH  | /:id/cancel     | Cancel a booking    | Yes           |

**Example Response – Book Cab:**
```json
{
  "message": "Cab booked successfully",
  "booking": {
    "_id": "64def...",
    "pickupLocation": "Andheri",
    "dropLocation": "Dadar",
    "distance": 10,
    "fare": 120,
    "status": "Booked"
  }
}
```

---

### Admin Routes – `/api/admin`

| Method | Endpoint  | Description              | Auth Required |
|--------|-----------|--------------------------|---------------|
| GET    | /stats    | Get platform stats       | Yes           |
| GET    | /users    | Get all users            | Yes           |

**Example Response – Stats:**
```json
{
  "users": 5,
  "cabs": 8,
  "bookings": 12
}
```

---

## 8. Authentication

Authentication is implemented using **JWT (JSON Web Tokens)**.

**Flow:**
1. User registers with name, email, phone, password and role
2. Password is hashed using **bcryptjs** before storing in MongoDB
3. On login, credentials are verified and a **JWT token** is generated with 7-day expiry
4. The token is stored in **localStorage** on the client side
5. For all protected routes, the token is sent in the `Authorization` header as `Bearer <token>`
6. The **authMiddleware.js** verifies the token on every protected request
7. After login, the user object (including role) is stored in localStorage and used to redirect:
   - `role === "admin"` → `/admin/dashboard`
   - `role === "user"` → `/dashboard`

---

## 9. User Interface

**Pages:**

| Page               | Route                  | Access |
|--------------------|------------------------|--------|
| Landing Page       | `/`                    | Public |
| Login              | `/login`               | Public |
| Register           | `/register`            | Public |
| User Dashboard     | `/dashboard`           | User   |
| Book Cab           | `/book`                | User   |
| My Bookings        | `/mybookings`          | User   |
| Admin Dashboard    | `/admin/dashboard`     | Admin  |
| Admin Users        | `/admin/users`         | Admin  |
| Admin Cabs         | `/admin/cabs`          | Admin  |
| Admin Add Cab      | `/admin/addcab`        | Admin  |

**UI Highlights:**
- Blue themed navbar with role-based links
- Live fare estimate on Book Cab page
- Search by car name and type with sort by price
- My Bookings in table format with status and cancel option
- Admin stats cards showing live counts

---

## 10. Testing

**Manual Testing** was performed for all features:

| Feature               | Test Case                                      | Result |
|-----------------------|------------------------------------------------|--------|
| User Registration     | Register with valid details                    | Pass   |
| User Login            | Login with correct credentials                 | Pass   |
| Role Redirect         | Admin redirected to admin dashboard            | Pass   |
| Book Cab              | Book with pickup, drop and distance filled     | Pass   |
| Fare Estimate         | Fare calculated as distance × pricePerKm       | Pass   |
| My Bookings           | View all bookings for logged-in user           | Pass   |
| Cancel Booking        | Cancel active booking                          | Pass   |
| Add Cab (Admin)       | Admin adds new cab successfully                | Pass   |
| View Users (Admin)    | Admin views all registered users               | Pass   |
| JWT Protection        | Protected routes reject invalid token          | Pass   |

---

## 11. Screenshots or Demo

**Demo Video:**
[Watch Full Demo](https://drive.google.com/file/d/1vDyR4jfC77aZJKfgsEeQ6LGq0B-k-8GT/view?usp=drive_link)

**GitHub Repository:**
[https://github.com/chandrika369/UCab](https://github.com/chandrika369/UCab)

---

## 12. Known Issues

- The cab `available` status does not automatically update to `false` when a cab is booked — this requires a future backend update
- No route guards implemented on frontend (users can manually navigate to admin routes via URL)
- Image upload for cabs is a UI placeholder — actual file upload not yet connected to backend

---

## 13. Future Enhancements

- Add real-time cab tracking using Socket.io
- Implement Google Maps API for actual distance calculation
- Add payment gateway integration (Razorpay / Stripe)
- Push notifications for booking confirmation
- Driver mobile app for accepting/rejecting rides
- Rating and review system for drivers
- Automatic cab availability update when booking status changes
- Email confirmation on successful booking
- OTP-based login for added security

