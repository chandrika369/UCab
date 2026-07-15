# Proposed Solution
## Project: UCab – Cab Booking Application

---

## 1. Executive Summary

UCab is a full-stack web application built on the MERN stack that provides a complete cab booking solution. The platform has two roles — **User** and **Admin** — each with their own dedicated interface and features. Users can browse cabs, get fare estimates, book rides, and manage bookings. Admins can manage the cab fleet, view users, and monitor platform statistics.

---

## 2. Proposed Solution Overview

| Component | Technology | Description |
|-----------|-----------|-------------|
| Frontend | React.js + Vite | Dynamic, component-based UI |
| Styling | Bootstrap 5 | Responsive design |
| Backend | Node.js + Express.js | RESTful API with MVC pattern |
| Database | MongoDB + Mongoose | NoSQL data storage |
| Authentication | JWT | Secure, stateless auth |
| API Client | Axios | Frontend-to-backend communication |

---

## 3. Solution Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (React.js)                     │
│                                                          │
│  Landing → Login/Register → Dashboard → Book/Bookings   │
│  Admin: Dashboard → Users → Cabs → AddCab               │
└────────────────────────┬────────────────────────────────┘
                         │ HTTP Requests (Axios)
                         │ Authorization: Bearer <JWT>
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  SERVER (Express.js)                     │
│                                                          │
│  /api/auth     → authController (register, login)        │
│  /api/cabs     → cabController (add, get, getAll)        │
│  /api/bookings → bookingController (book, get, cancel)   │
│  /api/admin    → adminController (stats, users)          │
│                                                          │
│  authMiddleware → JWT verification on protected routes   │
└────────────────────────┬────────────────────────────────┘
                         │ Mongoose ODM
                         ▼
┌─────────────────────────────────────────────────────────┐
│                MongoDB Atlas (Cloud)                     │
│                                                          │
│  Collections: users | cabs | bookings                   │
└─────────────────────────────────────────────────────────┘
```

---

## 4. User Flow

### User Flow
```
Visit Landing Page
       ↓
Click Login / Register
       ↓
Register (select role: user)
       ↓
Login → JWT stored in localStorage
       ↓
Redirected to /dashboard
       ↓
Click Book Cab → Enter pickup, drop, distance
       ↓
See fare estimate on each cab card
       ↓
Click Book Now → Booking saved to DB
       ↓
Go to My Bookings → View all bookings
       ↓
Cancel booking if needed
```

### Admin Flow
```
Register (select role: admin)
       ↓
Login → Redirected to /admin/dashboard
       ↓
See stats (Users, Cabs, Bookings)
       ↓
Click Users → View all registered users
       ↓
Click Cabs → View all cabs with details
       ↓
Click AddCab → Fill form → Add new cab
```

---

## 5. Database Schema Design

### User Schema
```json
{
  "name": "String (required)",
  "email": "String (required, unique)",
  "password": "String (required, hashed)",
  "phone": "String (required)",
  "role": "String (enum: user/admin, default: user)",
  "wallet": "Number (default: 0)"
}
```

### Cab Schema
```json
{
  "driverName": "String (required)",
  "cabNumber": "String (required, unique)",
  "cabType": "String (enum: Mini/Sedan/SUV)",
  "pricePerKm": "Number (required)",
  "available": "Boolean (default: true)",
  "currentLocation": "String (required)"
}
```

### Booking Schema
```json
{
  "user": "ObjectId (ref: User)",
  "cab": "ObjectId (ref: Cab)",
  "pickupLocation": "String (required)",
  "dropLocation": "String (required)",
  "distance": "Number (required)",
  "fare": "Number (required)",
  "status": "String (enum: Booked/Ongoing/Completed/Cancelled)"
}
```

---

## 6. API Design

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | No | Register user |
| POST | /api/auth/login | No | Login user |
| GET | /api/cabs | No | Get available cabs |
| GET | /api/cabs/all | Yes | Get all cabs |
| POST | /api/cabs | Yes | Add new cab |
| POST | /api/bookings | Yes | Book a cab |
| GET | /api/bookings | Yes | Get my bookings |
| PATCH | /api/bookings/:id/cancel | Yes | Cancel booking |
| GET | /api/admin/stats | Yes | Get stats |
| GET | /api/admin/users | Yes | Get all users |
