# Solution Architecture
## Project: UCab – Cab Booking Application

---

## 3-Tier Architecture

| Tier | Technology |
|------|-----------|
| Presentation (Frontend) | React.js + Bootstrap |
| Application (Backend) | Node.js + Express.js |
| Data (Database) | MongoDB Atlas |

---

## Architecture Diagram

```
React.js (Frontend)
        │
        │ HTTP REST API (Axios)
        │ Authorization: Bearer JWT
        ▼
Express.js (Backend - MVC)
├── Routes
├── Controllers
├── Middleware (JWT verification)
└── Models
        │
        │ Mongoose ODM
        ▼
MongoDB Atlas
├── users
├── cabs
└── bookings
```

---

## MVC Flow

```
Request
  → Routes (define endpoint)
  → Middleware (verify JWT)
  → Controllers (business logic)
  → Models (MongoDB query)
  → Response
```

---

## Role-Based Access

```
Login
  → role === admin → /admin/dashboard
      Admin Navbar: Home | Users | Cabs | AddCab | Logout

  → role === user → /dashboard
      User Navbar: Home | Book Cab | My Booking | Logout
```
