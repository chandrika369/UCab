# Data Flow Diagrams and User Stories
## Project: UCab – Cab Booking Application

---

## Data Flow Diagram – Level 0

```
User ──► UCab Application ◄── Admin
              │
              ▼
        MongoDB Database
```

---

## Data Flow Diagram – Level 1

```
User ──► Register/Login ──► User Collection
User ──► Browse Cabs ──► Cab Collection
User ──► Book Cab ──► Booking Collection
User ──► View/Cancel Bookings ──► Booking Collection
Admin ──► View Stats ──► All Collections
Admin ──► Manage Cabs ──► Cab Collection
Admin ──► View Users ──► User Collection
```

---

## User Stories

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
