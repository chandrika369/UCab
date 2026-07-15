# User Acceptance Testing (UAT)
## Project: UCab – Cab Booking Application

---

## 1. UAT Overview

| Field | Details |
|-------|---------|
| Project | UCab – Cab Booking Application |
| Technology | MERN Stack |
| Tester | Chandrika |
| Test Environment | localhost:5173 (Frontend), localhost:5000 (Backend) |
| Database | MongoDB Atlas |

---

## 2. Test Environment Setup

| Component | URL |
|-----------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000/api |
| Database | MongoDB Atlas Cloud |

---

## 3. Test Cases – Authentication

| TC ID | Test Case | Steps | Expected Result | Actual Result | Status |
|-------|-----------|-------|-----------------|---------------|--------|
| TC-01 | Register as User | 1. Go to /register 2. Fill all fields 3. Select role: user 4. Click Signup | User registered, redirected to login | User registered successfully | ✅ Pass |
| TC-02 | Register as Admin | 1. Go to /register 2. Fill all fields 3. Select role: admin 4. Click Signup | Admin registered successfully | Admin registered successfully | ✅ Pass |
| TC-03 | Register with duplicate email | Fill form with existing email | Error: "User already exists" | Error shown correctly | ✅ Pass |
| TC-04 | Login as User | Enter valid user credentials | JWT stored, redirected to /dashboard | Redirected to /dashboard | ✅ Pass |
| TC-05 | Login as Admin | Enter valid admin credentials | JWT stored, redirected to /admin/dashboard | Redirected to /admin/dashboard | ✅ Pass |
| TC-06 | Login with wrong password | Enter wrong password | Error: "Invalid Password" | Error shown correctly | ✅ Pass |
| TC-07 | Login with wrong email | Enter non-existing email | Error: "User not found" | Error shown correctly | ✅ Pass |
| TC-08 | Logout | Click Logout button | Token removed, redirected to /login | Redirected to /login | ✅ Pass |

---

## 4. Test Cases – User Features

| TC ID | Test Case | Steps | Expected Result | Actual Result | Status |
|-------|-----------|-------|-----------------|---------------|--------|
| TC-09 | View available cabs | Go to /book | All available cabs displayed as cards | Cabs displayed correctly | ✅ Pass |
| TC-10 | Search cab by name | Type in "Search by car name" field | Filtered results shown | Filtered correctly | ✅ Pass |
| TC-11 | Search cab by type | Type in "Search by car type" field | Filtered results shown | Filtered correctly | ✅ Pass |
| TC-12 | Sort cabs by price | Click Sort Price button | Cabs sorted Low to High | Sorted correctly | ✅ Pass |
| TC-13 | Sort toggle | Click Sort Price again | Cabs sorted High to Low | Toggled correctly | ✅ Pass |
| TC-14 | Fare estimate | Enter distance in input | Estimated fare shown on each card | Fare calculated correctly | ✅ Pass |
| TC-15 | Book cab without details | Click Book Cab without filling details | Alert: fill required fields | Alert shown | ✅ Pass |
| TC-16 | Book cab successfully | Fill pickup, drop, distance → click Book | Booking created, success message shown | Booking saved in DB | ✅ Pass |
| TC-17 | View my bookings | Go to /mybookings | All user bookings in table format | Bookings displayed | ✅ Pass |
| TC-18 | Cancel booking | Click cancel on active booking | Booking status changes to Cancelled | Status updated | ✅ Pass |
| TC-19 | Cancel completed booking | Try to cancel completed booking | Error: Cannot cancel completed booking | Error shown | ✅ Pass |

---

## 5. Test Cases – Admin Features

| TC ID | Test Case | Steps | Expected Result | Actual Result | Status |
|-------|-----------|-------|-----------------|---------------|--------|
| TC-20 | Admin dashboard stats | Go to /admin/dashboard | Live counts of Users, Cabs, Bookings | Correct counts shown | ✅ Pass |
| TC-21 | View all users | Go to /admin/users | All registered users in table | Users displayed | ✅ Pass |
| TC-22 | View all cabs | Go to /admin/cabs | All cabs (available + unavailable) | All cabs displayed | ✅ Pass |
| TC-23 | Add new cab | Fill add cab form → submit | New cab added to database | Cab appears in list | ✅ Pass |
| TC-24 | Add cab with missing fields | Submit incomplete form | Required field validation triggered | Validation shown | ✅ Pass |

---

## 6. Test Cases – Security

| TC ID | Test Case | Steps | Expected Result | Actual Result | Status |
|-------|-----------|-------|-----------------|---------------|--------|
| TC-25 | Access protected route without token | Call /api/bookings without Authorization header | 401: No Token Provided | 401 returned | ✅ Pass |
| TC-26 | Access protected route with invalid token | Send invalid JWT token | 401: Invalid Token | 401 returned | ✅ Pass |
| TC-27 | Cancel another user's booking | Send cancel request for another user's booking | 403: Not Authorised | 403 returned | ✅ Pass |

---

## 7. Test Summary

| Category | Total Tests | Passed | Failed |
|----------|------------|--------|--------|
| Authentication | 8 | 8 | 0 |
| User Features | 11 | 11 | 0 |
| Admin Features | 5 | 5 | 0 |
| Security | 3 | 3 | 0 |
| **Total** | **27** | **27** | **0** |

---

## 8. UAT Sign-off

| Field | Details |
|-------|---------|
| Tested By | Chandrika |
| Test Date | July 2026 |
| Result | All 27 test cases passed |
| Status | ✅ Accepted |
| Notes | Application is ready for evaluation |
