# Project Report – UCab Cab Booking Application

---

## 1. INTRODUCTION

### 1.1 Project Overview
UCab is a full-stack cab booking web application built using the MERN stack. It provides role-based access for Users and Admins. Users can browse, book, and manage cab rides. Admins manage the fleet and monitor platform activity.

### 1.2 Purpose
To eliminate inefficiencies in traditional cab booking by providing a centralized, transparent, and easy-to-use digital platform where users know the fare before booking.

---

## 2. IDEATION PHASE

### 2.1 Problem Statement
People face difficulty finding available cabs, comparing fares, and managing bookings. Admins have no digital tool to manage their fleet. No centralized platform addresses all these needs.

### 2.2 Empathy Map Canvas
| Quadrant | Details |
|----------|---------|
| Says | "I don't know the fare before booking" |
| Thinks | "Am I being overcharged?" |
| Does | Searches multiple platforms, calls drivers manually |
| Feels | Frustrated about unpredictable fares |
| Pains | No fare transparency, no booking history |
| Gains | Instant booking, upfront pricing, secure platform |

### 2.3 Brainstorming
Selected features for UCab v1.0: role-based login, browse cabs, fare estimate, book cab, view/cancel bookings, admin dashboard, add/view cabs, view users, JWT authentication.

---

## 3. REQUIREMENT ANALYSIS

### 3.1 Customer Journey Map
User: Landing → Register/Login → Browse Cabs → Enter Details → Fare Estimate → Book → My Bookings → Cancel

Admin: Login → Dashboard Stats → Add Cabs → View Users → Manage Fleet

### 3.2 Solution Requirement
| ID | Requirement |
|----|-------------|
| FR-01 | Register with role selection |
| FR-02 | Login with JWT token |
| FR-03 | Browse available cabs |
| FR-04 | Search and sort cabs |
| FR-05 | Live fare estimate |
| FR-06 | Book a cab |
| FR-07 | View bookings |
| FR-08 | Cancel bookings |
| FR-09 | Admin dashboard stats |
| FR-10 | Admin manage cabs |
| FR-11 | Admin view users |

### 3.3 Data Flow Diagram
```
User → Register/Login → User Collection
User → Browse/Book Cabs → Cab/Booking Collections
Admin → View Stats/Manage → All Collections
```

### 3.4 Technology Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React.js + Vite + Bootstrap 5 |
| Backend | Node.js + Express.js (MVC) |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |

---

## 4. PROJECT DESIGN

### 4.1 Problem Solution Fit
| Problem | Solution |
|---------|----------|
| No platform to view all cabs | Centralized cab listing |
| Unknown fare before booking | Live fare estimate |
| No booking history | My Bookings page |
| No cancellation | Cancel button on active bookings |
| No admin tool | Admin dashboard and management panel |

### 4.2 Proposed Solution
UCab – MERN app with Landing Page, Auth System (User/Admin), User booking flow, Admin management panel, JWT security.

### 4.3 Solution Architecture
```
React.js → Axios (REST API) → Express.js (MVC) → MongoDB Atlas
```

---

## 5. PROJECT PLANNING & SCHEDULING

### 5.1 Project Planning
| Week | Tasks |
|------|-------|
| Week 1 | Brainstorming, Requirement Analysis, Design |
| Week 2 | Backend Development |
| Week 3 | Frontend Development |
| Week 4 | Testing, Documentation, GitHub |

---

## 6. FUNCTIONAL AND PERFORMANCE TESTING

### 6.1 Performance Testing
| TC | Test Case | Result |
|----|-----------|--------|
| TC-01 | Register as User | Pass |
| TC-02 | Register as Admin | Pass |
| TC-03 | Login – role redirect | Pass |
| TC-04 | Browse cabs | Pass |
| TC-05 | Fare estimate | Pass |
| TC-06 | Book cab | Pass |
| TC-07 | View bookings | Pass |
| TC-08 | Cancel booking | Pass |
| TC-09 | Admin stats | Pass |
| TC-10 | Add cab | Pass |
| TC-11 | View users | Pass |
| TC-12 | JWT protection | Pass |

All 12 test cases passed.

---

## 7. RESULTS

### 7.1 Output Screenshots
| Page | Description |
|------|-------------|
| Landing Page | Hero section |
| Login/Register | Role-based auth |
| Book Cab | Cabs with fare estimate |
| My Bookings | Trip history with cancel |
| Admin Dashboard | Stats cards |
| Admin Cabs | Fleet management |

Demo Video: https://drive.google.com/file/d/1vDyR4jfC77aZJKfgsEeQ6LGq0B-k-8GT/view?usp=drive_link

---

## 8. ADVANTAGES & DISADVANTAGES

**Advantages:**
- Centralized platform with transparent fare
- Role-based access and JWT security
- Clean MVC architecture
- Responsive Bootstrap UI
- MongoDB flexible schema

**Disadvantages:**
- No real-time tracking
- No payment gateway
- No mobile app
- No email notifications

---

## 9. CONCLUSION

UCab successfully demonstrates a full-stack MERN application with role-based access, secure JWT authentication, and complete cab booking workflow following strict MVC architecture.

---

## 10. FUTURE SCOPE

- Real-time tracking with Socket.io
- Google Maps API integration
- Payment gateway (Razorpay/Stripe)
- Driver mobile app
- Rating and review system
- OTP-based login
- Email/SMS notifications

---

## 11. APPENDIX

**GitHub:** https://github.com/chandrika369/UCab

**Demo Video:** https://drive.google.com/file/d/1vDyR4jfC77aZJKfgsEeQ6LGq0B-k-8GT/view?usp=drive_link
