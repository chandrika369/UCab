# Solution Architecture
## Project: UCab – Cab Booking Application

---

## 1. Architecture Overview

UCab follows a **3-Tier Architecture**:

| Tier | Layer | Technology |
|------|-------|-----------|
| Tier 1 | Presentation Layer (Frontend) | React.js + Bootstrap |
| Tier 2 | Application Layer (Backend) | Node.js + Express.js |
| Tier 3 | Data Layer (Database) | MongoDB Atlas |

The backend follows **MVC (Model-View-Controller)** pattern strictly.

---

## 2. High Level Architecture Diagram

```
┌───────────────────────────────────────────────────────────────┐
│                     PRESENTATION TIER                         │
│                      React.js + Vite                          │
│                                                               │
│   Pages: Landing, Login, Register                            │
│   User: Dashboard, BookCab, MyBookings                       │
│   Admin: Dashboard, Users, Cabs, AddCab                      │
│   Components: UserNavbar, AdminNavbar                        │
│   Services: api.js (Axios instance)                          │
└───────────────────────────┬───────────────────────────────────┘
                            │
                    HTTP REST API
                    (JSON over HTTPS)
                    Auth: Bearer JWT
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                    APPLICATION TIER                           │
│                   Node.js + Express.js                        │
│                                                               │
│   Routes:       authRoutes, cabRoutes,                       │
│                 bookingRoutes, adminRoutes                    │
│                                                               │
│   Controllers:  authController, cabController,               │
│                 bookingController, adminController            │
│                                                               │
│   Middleware:   authMiddleware (JWT verification)             │
│                                                               │
│   Config:       db.js (MongoDB connection)                   │
└───────────────────────────┬───────────────────────────────────┘
                            │
                       Mongoose ODM
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                       DATA TIER                               │
│                    MongoDB Atlas                              │
│                                                               │
│   Collections: users | cabs | bookings                      │
│   Models:      User.js | Cab.js | Booking.js                │
└───────────────────────────────────────────────────────────────┘
```

---

## 3. MVC Architecture (Backend)

```
Request
   │
   ▼
Routes (routes/)
   │  Defines endpoint + calls middleware + controller
   ▼
Middleware (middleware/)
   │  authMiddleware.js verifies JWT token
   ▼
Controllers (controllers/)
   │  Business logic — processes request, calls Model
   ▼
Models (models/)
   │  Mongoose schema — interacts with MongoDB
   ▼
MongoDB Atlas
   │
   ▼
Response sent back to client
```

---

## 4. Authentication Architecture

```
Client                        Server                      Database
  │                              │                            │
  │── POST /api/auth/login ──►   │                            │
  │   { email, password }        │── findOne({ email }) ──►  │
  │                              │◄── user document ─────────│
  │                              │                            │
  │                              │── bcrypt.compare() ───────│
  │                              │                            │
  │                              │── jwt.sign({ id, role })  │
  │◄── { token, user } ─────────│                            │
  │                              │                            │
  │ (Store token in localStorage)│                            │
  │                              │                            │
  │── GET /api/bookings ──────► │                            │
  │   Authorization: Bearer token│                            │
  │                              │── jwt.verify(token) ──    │
  │                              │── attach req.user ────    │
  │                              │── find bookings ──────►  │
  │◄── bookings array ──────────│◄── data ──────────────────│
```

---

## 5. Role-Based Access Control

```
Login Response
     │
     ▼
user.role === "admin"?
     │
  YES│                    NO│
     ▼                      ▼
/admin/dashboard        /dashboard

Admin Navbar:           User Navbar:
- Home                  - Home
- Users                 - Book Cab
- Cabs                  - My Booking
- AddCab                - Logout
- Logout
```

---

## 6. Technology Stack Summary

| Component | Technology | Version |
|-----------|-----------|---------|
| Frontend | React.js | 18.x |
| Build Tool | Vite | 5.x |
| Routing | React Router DOM | 6.x |
| CSS Framework | Bootstrap | 5.3.x |
| HTTP Client | Axios | 1.x |
| Runtime | Node.js | 18.x |
| Framework | Express.js | 4.x |
| Database | MongoDB | 7.x |
| ODM | Mongoose | 8.x |
| Auth | JWT (jsonwebtoken) | 9.x |
| Encryption | bcryptjs | 2.x |
| Env Config | dotenv | 16.x |
