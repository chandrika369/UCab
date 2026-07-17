# User Acceptance Testing (UAT)
## Project: UCab – Cab Booking Application

---

## Test Cases – Authentication

| TC ID | Test Case | Expected Result | Status |
|-------|-----------|-----------------|--------|
| TC-01 | Register as User | User registered successfully | Pass |
| TC-02 | Register as Admin | Admin registered successfully | Pass |
| TC-03 | Register with duplicate email | Error: User already exists | Pass |
| TC-04 | Login as User | Redirected to /dashboard | Pass |
| TC-05 | Login as Admin | Redirected to /admin/dashboard | Pass |
| TC-06 | Login with wrong password | Error: Invalid Password | Pass |
| TC-07 | Logout | Redirected to /login | Pass |

---

## Test Cases – User Features

| TC ID | Test Case | Expected Result | Status |
|-------|-----------|-----------------|--------|
| TC-08 | View available cabs | All available cabs displayed | Pass |
| TC-09 | Search cab by name | Filtered results shown | Pass |
| TC-10 | Sort cabs by price | Cabs sorted correctly | Pass |
| TC-11 | Fare estimate | Estimated fare shown on card | Pass |
| TC-12 | Book cab without details | Alert shown | Pass |
| TC-13 | Book cab successfully | Booking saved in DB | Pass |
| TC-14 | View my bookings | All bookings displayed | Pass |
| TC-15 | Cancel active booking | Status changed to Cancelled | Pass |

---

## Test Cases – Admin Features

| TC ID | Test Case | Expected Result | Status |
|-------|-----------|-----------------|--------|
| TC-16 | Admin dashboard stats | Correct counts shown | Pass |
| TC-17 | View all users | All users displayed | Pass |
| TC-18 | View all cabs | All cabs displayed | Pass |
| TC-19 | Add new cab | Cab added to database | Pass |

---

## Test Cases – Security

| TC ID | Test Case | Expected Result | Status |
|-------|-----------|-----------------|--------|
| TC-20 | Access protected route without token | 401: No Token Provided | Pass |
| TC-21 | Invalid JWT token | 401: Invalid Token | Pass |
| TC-22 | Cancel another user's booking | 403: Not Authorised | Pass |

---

## Summary

| Category | Total | Passed |
|----------|-------|--------|
| Authentication | 7 | 7 |
| User Features | 8 | 8 |
| Admin Features | 4 | 4 |
| Security | 3 | 3 |
| Total | 22 | 22 |
