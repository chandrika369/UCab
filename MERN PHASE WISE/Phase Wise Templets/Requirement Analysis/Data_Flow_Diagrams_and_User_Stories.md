# Data Flow Diagrams and User Stories
## Project: UCab – Cab Booking Application

---

## 1. Data Flow Diagram – Level 0 (Context Diagram)

```
                    ┌─────────────────────────────┐
                    │                             │
   User ──────────► │      UCab Application       │ ◄────── Admin
        ◄────────── │                             │ ──────►
                    └─────────────────────────────┘
                                  │
                                  ▼
                          ┌───────────────┐
                          │   MongoDB     │
                          │   Database    │
                          └───────────────┘
```

**External Entities:**
- **User** – Registers, logs in, books cabs, views/cancels bookings
- **Admin** – Manages cabs, views users, monitors stats

---

## 2. Data Flow Diagram – Level 1

```
User
 │
 ├──► [1.0 Register/Login] ──► User Collection (MongoDB)
 │         │
 │         └──► JWT Token ──► User
 │
 ├──► [2.0 Browse Cabs] ──► Cab Collection (MongoDB)
 │         │
 │         └──► Available Cabs List ──► User
 │
 ├──► [3.0 Book Cab] ──► Booking Collection (MongoDB)
 │         │            Cab Collection (update availability)
 │         └──► Booking Confirmation ──► User
 │
 └──► [4.0 View/Cancel Bookings] ──► Booking Collection (MongoDB)
           │
           └──► Booking List / Cancel Status ──► User

Admin
 │
 ├──► [5.0 View Stats] ──► User, Cab, Booking Collections
 │         └──► Stats (counts) ──► Admin
 │
 ├──► [6.0 Manage Cabs] ──► Cab Collection (MongoDB)
 │         └──► Cab List / Add Confirmation ──► Admin
 │
 └──► [7.0 View Users] ──► User Collection (MongoDB)
           └──► Users List ──► Admin
```

---

## 3. Data Flow Diagram – Level 2 (Booking Process)

```
User Input
(cabId, pickup, drop, distance)
        │
        ▼
[Validate Input]
        │
        ▼
[Find Cab by ID] ──► Cab Collection
        │
        ▼
[Calculate Fare = distance × pricePerKm]
        │
        ▼
[Create Booking Record] ──► Booking Collection
        │
        ▼
[Return Booking Confirmation] ──► User
```

---

## 4. Entity Relationship Diagram (ERD)

```
┌─────────────┐         ┌─────────────────┐         ┌─────────────┐
│    USER     │         │    BOOKING      │         │    CAB      │
│─────────────│         │─────────────────│         │─────────────│
│ _id (PK)   │◄────────│ user (FK)       │────────►│ _id (PK)   │
│ name        │  1   M  │ cab (FK)        │  M   1  │ driverName  │
│ email       │         │ pickupLocation  │         │ cabNumber   │
│ password    │         │ dropLocation    │         │ cabType     │
│ phone       │         │ distance        │         │ pricePerKm  │
│ role        │         │ fare            │         │ available   │
│ wallet      │         │ status          │         │ currentLoc  │
└─────────────┘         └─────────────────┘         └─────────────┘
```

---

## 5. Detailed User Stories

### Epic 1: Authentication

**US-01: User Registration**
- **As a** new visitor
- **I want to** register with my name, email, phone, password and role
- **So that** I can access the UCab platform
- **Acceptance Criteria:**
  - Registration form accepts all required fields
  - Role can be selected (User / Admin)
  - Duplicate email shows error message
  - Success message shown on registration

**US-02: User Login**
- **As a** registered user
- **I want to** log in with my email and password
- **So that** I can access my dashboard
- **Acceptance Criteria:**
  - Login with valid credentials succeeds
  - JWT token stored in localStorage
  - Admin redirected to `/admin/dashboard`
  - User redirected to `/dashboard`
  - Invalid credentials show error message

---

### Epic 2: Cab Browsing

**US-03: View Available Cabs**
- **As a** logged-in user
- **I want to** see all available cabs
- **So that** I can choose the right cab for my trip
- **Acceptance Criteria:**
  - All cabs with `available: true` displayed
  - Each card shows driver name, cab type, number, price, location
  - Page loads within 2 seconds

**US-04: Search and Sort Cabs**
- **As a** user
- **I want to** search by name/type and sort by price
- **So that** I can find the most affordable option quickly
- **Acceptance Criteria:**
  - Search by driver name filters results in real-time
  - Search by cab type filters correctly
  - Sort toggle switches between Low to High and High to Low

---

### Epic 3: Booking

**US-05: Fare Estimate**
- **As a** user
- **I want to** see the estimated fare before booking
- **So that** I know the cost upfront
- **Acceptance Criteria:**
  - Fare estimate appears on card when distance is entered
  - Fare = distance × pricePerKm
  - Updates dynamically as distance changes

**US-06: Book a Cab**
- **As a** user
- **I want to** book a cab by entering trip details
- **So that** I can travel to my destination
- **Acceptance Criteria:**
  - Pickup, drop and distance are required
  - Booking saved to database on confirmation
  - Success message shown after booking

---

### Epic 4: Booking Management

**US-07: View My Bookings**
- **As a** user
- **I want to** view all my past and current bookings
- **So that** I can track my rides
- **Acceptance Criteria:**
  - All bookings shown in a table with full details
  - Booking date, trip, driver, car, amount and status displayed
  - Latest bookings shown first

**US-08: Cancel Booking**
- **As a** user
- **I want to** cancel an active booking
- **So that** I can change my travel plans
- **Acceptance Criteria:**
  - Cancel button shown only for Booked/Ongoing status
  - Confirmation dialog before cancelling
  - Status changes to Cancelled after confirmation

---

### Epic 5: Admin Management

**US-09: Admin Dashboard**
- **As an** admin
- **I want to** see total users, cabs and bookings on my dashboard
- **So that** I can monitor platform activity
- **Acceptance Criteria:**
  - Live counts fetched from database
  - Stats displayed in prominent cards

**US-10: Add New Cab**
- **As an** admin
- **I want to** add new cabs to the fleet
- **So that** more users can book rides
- **Acceptance Criteria:**
  - Form accepts driver name, cab number, type, price, location
  - Cab saved to database on submit
  - Redirected to cab list after adding

**US-11: View All Users**
- **As an** admin
- **I want to** see all registered users
- **So that** I can manage the user base
- **Acceptance Criteria:**
  - All users displayed in a table
  - Shows ID, name, email and operations

**US-12: View All Cabs**
- **As an** admin
- **I want to** see all cabs (available and unavailable)
- **So that** I can manage the complete fleet
- **Acceptance Criteria:**
  - All cabs shown with full details
  - Availability status clearly visible
