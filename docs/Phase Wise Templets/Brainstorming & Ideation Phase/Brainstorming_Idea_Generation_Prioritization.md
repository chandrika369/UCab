# Brainstorming – Idea Generation & Prioritization
## Project: UCab – Cab Booking Application

---

## 1. Brainstorming Session Overview

| Field | Details |
|-------|---------|
| Project | UCab – Cab Booking Application |
| Technology | MERN Stack (MongoDB, Express.js, React.js, Node.js) |
| Goal | Generate and prioritize ideas to solve the cab booking problem |

---

## 2. Raw Ideas Generated (Brain Dump)

| # | Idea |
|---|------|
| 1 | Build a platform where users can see all available cabs in one place |
| 2 | Show fare estimate before booking (distance × price per km) |
| 3 | Allow users to filter cabs by type (Mini, Sedan, SUV) |
| 4 | Sort cabs by price per km |
| 5 | Separate dashboards for User and Admin |
| 6 | Admin can add, edit, and delete cabs |
| 7 | Users can view and cancel their bookings |
| 8 | JWT-based secure authentication |
| 9 | Role-based routing (user/admin) |
| 10 | Search cabs by driver name or cab type |
| 11 | Show availability status on each cab card |
| 12 | Admin can view all registered users |
| 13 | Admin dashboard with stats (Users, Cabs, Bookings) |
| 14 | Real-time cab tracking (future) |
| 15 | Payment gateway integration (future) |
| 16 | Driver mobile app (future) |
| 17 | Rating and review system (future) |
| 18 | OTP-based login (future) |

---

## 3. Idea Categorization

### Must Have (Core Features)
- User registration and login with role selection
- Browse available cabs with search and sort
- Live fare estimate before booking
- Book a cab with pickup, drop and distance
- View and cancel bookings
- Admin dashboard with stats
- Admin cab management (add, view)
- JWT authentication and role-based access

### Should Have (Important)
- Filter by cab type
- Sort by price
- Booking status tracking (Booked / Ongoing / Completed / Cancelled)
- Admin user management

### Could Have (Nice to Have)
- Edit and delete cabs
- Booking history with date filters
- Email confirmation on booking

### Won't Have (Future Scope)
- Real-time tracking
- Payment gateway
- Driver app
- Rating system
- OTP login

---

## 4. Idea Prioritization (Impact vs Effort Matrix)

| Idea | Impact (H/M/L) | Effort (H/M/L) | Priority |
|------|---------------|----------------|----------|
| User Login / Register | High | Low | Do First |
| Browse Available Cabs | High | Low | Do First |
| Fare Estimate | High | Low | Do First |
| Book Cab | High | Medium | Do First |
| My Bookings & Cancel | High | Medium | Do First |
| Admin Dashboard Stats | High | Medium | Do First |
| Admin Add Cab | High | Low | Do First |
| Admin View Users | Medium | Low | Do Next |
| Search & Sort Cabs | Medium | Low | Do Next |
| Edit / Delete Cabs | Medium | Medium | Do Later |
| Real-time Tracking | High | High | Future |
| Payment Gateway | High | High | Future |

---

## 5. Final Selected Ideas for UCab v1.0

Based on prioritization, the following features were selected for the first version:

1. Role-based registration and login (User / Admin)
2. Landing page with hero section
3. User dashboard with quick actions
4. Browse available cabs with search, filter and sort
5. Live fare estimate on booking page
6. Book a cab instantly
7. View all bookings with status
8. Cancel active bookings
9. Admin dashboard with live stats
10. Admin can add new cabs
11. Admin can view all users and cabs
12. JWT authentication with protected routes
