# Solution Requirements
## Project: UCab – Cab Booking Application

---

## 1. Project Summary

UCab is a MERN stack cab booking web application that provides role-based access for Users and Admins. Users can browse, book, and manage cab rides while Admins manage the fleet and monitor platform activity.

---

## 2. Functional Requirements

### 2.1 Authentication & Authorization

| ID | Requirement |
|----|-------------|
| FR-01 | The system shall allow users to register with name, email, phone, password and role |
| FR-02 | The system shall hash passwords before storing in the database |
| FR-03 | The system shall allow users to log in with email and password |
| FR-04 | The system shall generate a JWT token on successful login |
| FR-05 | The system shall redirect users based on their role after login |
| FR-06 | The system shall protect private routes using JWT middleware |

### 2.2 User Features

| ID | Requirement |
|----|-------------|
| FR-07 | The system shall display all available cabs to the user |
| FR-08 | The system shall allow users to search cabs by name and type |
| FR-09 | The system shall allow users to sort cabs by price per km |
| FR-10 | The system shall show a live fare estimate (distance × price per km) |
| FR-11 | The system shall allow users to book a cab with pickup, drop and distance |
| FR-12 | The system shall display all bookings of the logged-in user |
| FR-13 | The system shall allow users to cancel active bookings |

### 2.3 Admin Features

| ID | Requirement |
|----|-------------|
| FR-14 | The system shall display a dashboard with total Users, Cabs, and Bookings |
| FR-15 | The system shall allow admin to view all registered users |
| FR-16 | The system shall allow admin to view all cabs (available and unavailable) |
| FR-17 | The system shall allow admin to add new cabs to the fleet |

---

## 3. Non-Functional Requirements

| ID | Requirement | Type |
|----|-------------|------|
| NFR-01 | The system shall respond to API requests within 2 seconds | Performance |
| NFR-02 | Passwords shall be hashed using bcryptjs with salt rounds of 10 | Security |
| NFR-03 | JWT tokens shall expire after 7 days | Security |
| NFR-04 | The UI shall be responsive on all screen sizes | Usability |
| NFR-05 | The application shall be available 99% of the time | Availability |
| NFR-06 | The codebase shall follow MVC architecture | Maintainability |
| NFR-07 | All environment variables shall be stored in .env files | Security |

---

## 4. User Stories

| ID | As a... | I want to... | So that... |
|----|---------|-------------|------------|
| US-01 | New User | Register with my details and role | I can access the platform |
| US-02 | User | Log in securely | I can access my account |
| US-03 | User | See all available cabs | I can choose the best one |
| US-04 | User | Search and sort cabs | I can find affordable options |
| US-05 | User | See fare estimate before booking | I know the cost upfront |
| US-06 | User | Book a cab easily | I can travel quickly |
| US-07 | User | View my booking history | I can track my rides |
| US-08 | User | Cancel a booking | I can change my travel plans |
| US-09 | Admin | See platform stats | I can monitor app activity |
| US-10 | Admin | Add new cabs | I can grow the fleet |
| US-11 | Admin | View all users | I can manage the user base |
| US-12 | Admin | View all cabs | I can manage the fleet |

---

## 5. System Constraints

| Constraint | Description |
|------------|-------------|
| Platform | Web browser only (no mobile app in v1) |
| Database | MongoDB Atlas (cloud) |
| Auth | JWT only, no OAuth in v1 |
| File Upload | No actual image storage in v1 |
| Payment | No payment gateway in v1 |

---

## 6. Acceptance Criteria

| Feature | Acceptance Criteria |
|---------|-------------------|
| Registration | User can register and gets success message |
| Login | User receives JWT token and is redirected correctly |
| Browse Cabs | All available cabs displayed with details |
| Fare Estimate | Estimated fare shown when distance is entered |
| Book Cab | Booking created and stored in database |
| My Bookings | All user bookings displayed in correct format |
| Cancel Booking | Booking status changes to Cancelled |
| Admin Stats | Correct counts of users, cabs, bookings shown |
| Add Cab | New cab appears in cab list after adding |
