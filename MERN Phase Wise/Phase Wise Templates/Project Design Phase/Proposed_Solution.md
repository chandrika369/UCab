# Proposed Solution
## Project: UCab – Cab Booking Application

---

## Solution Overview

UCab is a full-stack MERN web application with two roles — User and Admin.

| Component | Technology |
|-----------|-----------|
| Frontend | React.js + Vite + Bootstrap 5 |
| Backend | Node.js + Express.js (MVC) |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |

---

## User Flow

```
Visit Landing Page
→ Register (select role: user)
→ Login → JWT stored
→ Browse available cabs
→ Enter pickup, drop, distance
→ See fare estimate
→ Book cab
→ View / Cancel bookings
```

---

## Admin Flow

```
Register (select role: admin)
→ Login → Admin Dashboard
→ View stats (Users, Cabs, Bookings)
→ Add new cabs
→ View all users and cabs
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/cabs | Get available cabs |
| GET | /api/cabs/all | Get all cabs |
| POST | /api/cabs | Add new cab |
| POST | /api/bookings | Book a cab |
| GET | /api/bookings | Get my bookings |
| PATCH | /api/bookings/:id/cancel | Cancel booking |
| GET | /api/admin/stats | Get stats |
| GET | /api/admin/users | Get all users |
