# Project Planning Template
## Project: UCab – Cab Booking Application

---

## 1. Project Information

| Field | Details |
|-------|---------|
| Project Name | UCab – Cab Booking Application |
| Technology Stack | MERN (MongoDB, Express.js, React.js, Node.js) |
| Internship | Smartbridge Full Stack Development 2026 |
| Developer | Chandrika |
| Start Date | June 2026 |
| End Date | July 2026 |

---

## 2. Project Objectives

- Build a full-stack cab booking web application using MERN stack
- Implement role-based access control (User and Admin)
- Provide transparent fare estimation before booking
- Follow MVC architecture strictly on the backend
- Deploy a working application with clean, modular code

---

## 3. Project Scope

### In Scope
- User registration and login with role selection
- Landing page, Login page, Register page
- User dashboard, Book Cab, My Bookings pages
- Admin dashboard, Users, Cabs, Add Cab pages
- JWT-based authentication and route protection
- REST API with Express.js following MVC pattern
- MongoDB database with Mongoose schemas

### Out of Scope
- Mobile application
- Real-time cab tracking
- Payment gateway
- Email notifications
- Driver-side application

---

## 4. Work Breakdown Structure (WBS)

### Phase 1: Brainstorming & Ideation
- [ ] Define problem statement
- [ ] Create empathy map
- [ ] Brainstorm and prioritize features

### Phase 2: Requirement Analysis
- [ ] Define functional and non-functional requirements
- [ ] Create user stories
- [ ] Finalize technology stack
- [ ] Design data flow diagrams

### Phase 3: Project Design
- [ ] Design database schema
- [ ] Plan API endpoints
- [ ] Design UI wireframes
- [ ] Define solution architecture

### Phase 4: Development – Backend
- [ ] Initialize Node.js + Express project
- [ ] Set up MongoDB connection
- [ ] Create User, Cab, Booking models
- [ ] Build auth controller (register, login)
- [ ] Build cab controller (add, get, getAll)
- [ ] Build booking controller (book, getMyBookings, cancel)
- [ ] Build admin controller (stats, users)
- [ ] Set up JWT middleware
- [ ] Define all routes

### Phase 5: Development – Frontend
- [ ] Initialize React + Vite project
- [ ] Set up React Router
- [ ] Create Landing, Login, Register pages
- [ ] Create UserNavbar and AdminNavbar components
- [ ] Create User Dashboard, BookCab, MyBookings pages
- [ ] Create Admin Dashboard, Users, Cabs, AddCab pages
- [ ] Connect all pages to backend API via axios

### Phase 6: Testing
- [ ] Test all API endpoints with Postman
- [ ] Manual testing of all user flows
- [ ] Test role-based redirection
- [ ] Test booking and cancellation flow

### Phase 7: Documentation & Deployment
- [ ] Write FSD documentation
- [ ] Complete phase-wise documentation
- [ ] Push code to GitHub
- [ ] Record demo video

---

## 5. Project Timeline (Gantt Chart)

| Task | Week 1 | Week 2 | Week 3 | Week 4 |
|------|--------|--------|--------|--------|
| Brainstorming & Ideation | ✅ | | | |
| Requirement Analysis | ✅ | | | |
| Project Design | | ✅ | | |
| Backend Development | | ✅ | ✅ | |
| Frontend Development | | | ✅ | ✅ |
| Testing | | | | ✅ |
| Documentation | | | | ✅ |

---

## 6. Resource Planning

| Resource | Details |
|----------|---------|
| Developer | 1 (Chandrika) |
| Tools | VS Code, Postman, MongoDB Atlas, GitHub |
| Technologies | React, Node.js, Express, MongoDB, JWT, Bootstrap |
| Infrastructure | Local development + MongoDB Atlas (cloud) |

---

## 7. Risk Management

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| MongoDB connection issues | Medium | High | Use MongoDB Atlas with connection retry |
| JWT token expiry issues | Low | Medium | Set 7-day expiry, handle errors gracefully |
| CORS errors | Medium | High | Configure CORS with allowed origins |
| Scope creep | Medium | Medium | Stick to defined scope for v1 |
| Time overrun | Low | Medium | Follow weekly milestones strictly |

---

## 8. Deliverables

| Deliverable | Status |
|-------------|--------|
| Working MERN application | ✅ Completed |
| GitHub repository with MVC structure | ✅ Completed |
| FSD Documentation | ✅ Completed |
| Phase-wise documentation | ✅ Completed |
| Demo video | ✅ Completed |
