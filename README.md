# UCab - Cab Booking Application

A full-stack cab booking web application built with the MERN stack (MongoDB, Express, React, Node.js).

---

## 🎥 Demo Video

> Click the link below to watch the full project demo:

### 👉 [Watch Demo Video](https://drive.google.com/file/d/1vDyR4jfC77aZJKfgsEeQ6LGq0B-k-8GT/view?usp=drive_link)

---

## Project Structure (MVC Architecture)

### Client
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

### Server
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

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | React.js + Vite             |
| Styling    | Bootstrap 5                 |
| Backend    | Node.js + Express.js        |
| Database   | MongoDB + Mongoose          |
| Auth       | JWT (JSON Web Tokens)       |
| HTTP       | Axios                       |

---

## Features

### User
- Register / Login (role-based)
- Browse available cabs with search and sort
- Live fare estimate before booking
- Book a cab instantly
- View and cancel bookings

### Admin
- Admin dashboard with live stats (Users, Cabs, Bookings)
- View all registered users
- View and manage full cab fleet
- Add new cabs

---

## API Endpoints

### Auth Routes `/api/auth`
| Method | Endpoint    | Description       |
|--------|-------------|-------------------|
| POST   | /register   | Register new user |
| POST   | /login      | Login user        |

### Cab Routes `/api/cabs`
| Method | Endpoint  | Description              |
|--------|-----------|--------------------------|
| GET    | /         | Get available cabs       |
| GET    | /all      | Get all cabs (admin)     |
| POST   | /         | Add new cab (admin)      |

### Booking Routes `/api/bookings`
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| POST   | /              | Book a cab            |
| GET    | /              | Get my bookings       |
| PATCH  | /:id/cancel    | Cancel a booking      |

### Admin Routes `/api/admin`
| Method | Endpoint  | Description               |
|--------|-----------|---------------------------|
| GET    | /stats    | Get platform stats        |
| GET    | /users    | Get all users             |

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/chandrika369/UCab.git
cd UCab
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Start the server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd client
npm install
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## Role-Based Access

```
Register → Select role (user / admin)
Login → Redirected based on role

Admin → /admin/dashboard  (Home, Users, Cabs, AddCab)
User  → /dashboard        (Home, Book Cab, My Booking)
```
