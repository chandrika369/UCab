# Project Report
# UCab – Cab Booking Application

---

## 1. INTRODUCTION

### 1.1 Project Overview

UCab is a full-stack cab booking web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform enables users to browse available cabs, get fare estimates, and book rides instantly. It provides a role-based system where regular users can manage their bookings and admins can manage the cab fleet and monitor platform activity.

### 1.2 Purpose

The purpose of UCab is to eliminate the inefficiencies in traditional cab booking by providing a centralized, transparent, and easy-to-use digital platform. Users can see all available cabs, know the fare before booking, and manage their rides in one place. Admins get a complete management panel to oversee the platform.

---

## 2. IDEATION PHASE

### 2.1 Problem Statement

People who need cab services face difficulty in finding available cabs quickly, comparing fares transparently, and managing bookings efficiently. Cab administrators have no digital tool to manage their fleet. There is no centralized platform that addresses all these needs together.

POV Statement:
A daily commuter needs a simple and transparent cab booking platform because manually finding and negotiating with cab drivers is time-consuming, unreliable, and lacks price transparency.

### 2.2 Empathy Map Canvas

User Persona: Working Professional / College Student

| Quadrant | Details |
|----------|---------|
| Says | "I don't know the fare before booking", "I want to see all cabs in one place" |
| Thinks | "Is this cab reliable?", "Am I being overcharged?" |
| Does | Searches multiple platforms, calls drivers, negotiates manually |
| Feels | Frustrated about unpredictable fares, anxious about safety |
| Pains | No fare transparency, no booking history, difficult cancellation |
| Gains | Instant booking, upfront pricing, booking history, secure platform |

### 2.3 Brainstorming

Ideas generated and prioritized for UCab v1.0:

| Feature | Priority |
|---------|----------|
| User registration and login with role selection | High |
| Browse available cabs with search and sort | High |
| Live fare estimate before booking | High |
| Book a cab instantly | High |
| View and cancel bookings | High |
| Admin dashboard with live stats | High |
| Admin add/view cabs and users | High |
| Real-time tracking | Future |
| Payment gateway | Future |
| Driver mobile app | Future |

---

## 3. REQUIREMENT ANALYSIS

### 3.1 Customer Journey Map

User Journey:
```
Visits Landing Page
→ Registers / Logs in
→ Browses available cabs
→ Enters pickup, drop, distance
→ Sees fare estimate
→ Books cab
→ Views booking in My Bookings
→ Cancels if needed
```

Admin Journey:
```
Logs in as Admin
→ Views dashboard stats
→ Adds new cabs to fleet
→ Views all users
→ Manages cab list
```

### 3.2 Solution Requirement

Functional Requirements:

| ID    | Requirement |
|-------|-------------|
| FR-01 | Users can register with name, email, phone, password and role |
| FR-02 | Users can login and receive a JWT token |
| FR-03 | Users can browse all available cabs |
| FR-04 | Users can search and sort cabs by price |
| FR-05 | System shows live fare estimate before booking |
| FR-06 | Users can book a cab with pickup, drop and distance |
| FR-07 | Users can view all their bookings |
| FR-08 | Users can cancel active bookings |
| FR-09 | Admin can view live platform stats |
| FR-10 | Admin can add, view and manage cabs |
| FR-11 | Admin can view all registered users |

Non-Functional Requirements:

| ID     | Requirement |
|--------|-------------|
| NFR-01 | API response within 2 seconds |
| NFR-02 | Passwords hashed with bcryptjs |
| NFR-03 | JWT tokens expire after 7 days |
| NFR-04 | Responsive UI on all screen sizes |
| NFR-05 | MVC architecture strictly followed |

### 3.3 Data Flow Diagram

Level 0:
```
User ──► UCab Application ◄── Admin
              │
              ▼
        MongoDB Database
```

Level 1:
```
User ──► Register/Login ──► User Collection
User ──► Browse Cabs ──► Cab Collection
User ──► Book Cab ──► Booking Collection
User ──► View/Cancel Bookings ──► Booking Collection
Admin ──► View Stats ──► All Collections
Admin ──► Manage Cabs ──► Cab Collection
Admin ──► View Users ──► User Collection
```

### 3.4 Technology Stack

| Layer     | Technology           |
|-----------|----------------------|
| Frontend  | React.js + Vite      |
| Styling   | Bootstrap 5          |
| Backend   | Node.js + Express.js |
| Database  | MongoDB + Mongoose   |
| Auth      | JWT + bcryptjs       |
| HTTP      | Axios                |

---

## 4. PROJECT DESIGN

### 4.1 Problem Solution Fit

| Problem | Solution |
|---------|----------|
| No single platform to view all cabs | UCab shows all available cabs on one page |
| Fare unknown until trip ends | Live fare estimate (distance × price per km) |
| No booking history | My Bookings page with complete trip history |
| No cancellation option | Cancel button on active bookings |
| No admin management tool | Admin panel with stats, users, cabs |
| Security concerns | JWT authentication with role-based access |

### 4.2 Proposed Solution

UCab is a MERN stack web application with:

- Landing Page – Hero section introducing the platform
- Auth System – Register/Login with role selection (User/Admin)
- User Side – Browse cabs, fare estimate, book, view, cancel
- Admin Side – Dashboard stats, manage cabs, view users
- Security – JWT tokens, bcrypt password hashing, protected routes

### 4.3 Solution Architecture

```
React.js (Frontend)
        │
        │ HTTP REST API (Axios)
        │ Authorization: Bearer JWT
        ▼
Express.js (Backend - MVC)
├── Routes
├── Controllers
├── Middleware (JWT)
└── Models
        │
        │ Mongoose ODM
        ▼
MongoDB Atlas (Database)
├── users
├── cabs
└── bookings
```

---

## 5. PROJECT PLANNING & SCHEDULING

### 5.1 Project Planning

| Phase | Tasks | Timeline |
|-------|-------|----------|
| Week 1 | Brainstorming, Requirement Analysis, Design | Week 1 |
| Week 2 | Backend Development (MVC, API, Auth) | Week 2 |
| Week 3 | Frontend Development (Pages, Components) | Week 3 |
| Week 4 | Testing, Documentation, GitHub Push | Week 4 |

Milestones:
- Backend API fully working and Postman tested
- Frontend connected to backend
- Role-based login working
- All test cases passed
- GitHub repo with MVC structure ready
- Documentation completed

---

## 6. FUNCTIONAL AND PERFORMANCE TESTING

### 6.1 Performance Testing

| Test Case | Description | Result |
|-----------|-------------|--------|
| TC-01 | Register as User | Pass |
| TC-02 | Register as Admin | Pass |
| TC-03 | Login as User – redirected to /dashboard | Pass |
| TC-04 | Login as Admin – redirected to /admin/dashboard | Pass |
| TC-05 | Browse available cabs | Pass |
| TC-06 | Search cab by name | Pass |
| TC-07 | Sort cabs by price | Pass |
| TC-08 | Live fare estimate on distance input | Pass |
| TC-09 | Book cab with valid details | Pass |
| TC-10 | Book cab without required fields | Pass |
| TC-11 | View My Bookings | Pass |
| TC-12 | Cancel active booking | Pass |
| TC-13 | Admin dashboard stats | Pass |
| TC-14 | Admin add new cab | Pass |
| TC-15 | Admin view all users | Pass |
| TC-16 | Access protected route without token – 401 | Pass |
| TC-17 | Cancel another user's booking – 403 | Pass |

All 17 test cases passed successfully.

---

## 7. RESULTS

### 7.1 Output Screenshots

| Page | Description |
|------|-------------|
| Landing Page | Hero section with Explore Services button |
| Login Page | Email/password login with role-based redirect |
| Register Page | Form with role selection (User/Admin) |
| User Dashboard | Quick actions – Book Cab and My Bookings |
| Book Cab Page | Available cabs with search, sort, fare estimate |
| My Bookings Page | Table with booking details, status, cancel button |
| Admin Dashboard | Stats cards – Users, Cabs, Bookings counts |
| Admin Users Page | Table of all registered users |
| Admin Cabs Page | All cabs with driver details |
| Admin Add Cab Page | Form to add new cab to fleet |

Demo Video: https://drive.google.com/file/d/1vDyR4jfC77aZJKfgsEeQ6LGq0B-k-8GT/view?usp=drive_link

---

## 8. ADVANTAGES & DISADVANTAGES

Advantages:
- Centralized platform for all cab booking needs
- Transparent fare calculation before booking
- Role-based access ensures security
- Clean MVC architecture makes code maintainable
- Responsive design works on all screen sizes
- JWT authentication is stateless and scalable
- MongoDB is flexible for evolving data needs

Disadvantages:
- No real-time cab tracking
- No payment gateway integrated
- Cab availability not auto-updated on booking
- No mobile application
- No email notifications for bookings

---

## 9. CONCLUSION

UCab successfully demonstrates a full-stack MERN web application with role-based access, secure authentication, and a complete cab booking workflow. The project follows MVC architecture strictly on the backend and component-based architecture on the frontend. All core features including browsing cabs, fare estimation, booking, and admin management have been implemented and tested successfully.

---

## 10. FUTURE SCOPE

- Real-time cab tracking using Socket.io
- Google Maps API for actual distance and route calculation
- Payment gateway integration (Razorpay / Stripe)
- Push notifications for booking confirmation and updates
- Driver mobile application for ride management
- Rating and review system for drivers
- Automatic cab availability update on booking
- Email/SMS confirmation on booking
- OTP-based login for added security
- Analytics dashboard for admin with charts

---

## 11. APPENDIX

### Source Code

GitHub Repository: https://github.com/chandrika369/UCab

### Dataset Link

Not applicable – data is user-generated and stored in MongoDB Atlas.

### GitHub & Project Demo Link

GitHub: https://github.com/chandrika369/UCab

Demo Video: https://drive.google.com/file/d/1vDyR4jfC77aZJKfgsEeQ6LGq0B-k-8GT/view?usp=drive_link
