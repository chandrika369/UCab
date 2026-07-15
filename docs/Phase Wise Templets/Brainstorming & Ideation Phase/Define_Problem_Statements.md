# Define Problem Statements
## Project: UCab – Cab Booking Application

---

## 1. Problem Statement

People who need cab services face difficulties in finding available cabs quickly, comparing fares transparently, and managing their bookings efficiently. There is no centralized digital platform that allows users to browse cabs, get fare estimates, and book rides instantly while giving administrators control over the fleet.

---

## 2. Point of View (POV) Statement

| Component | Description |
|-----------|-------------|
| **User** | A working professional or student who needs to travel daily |
| **Need** | A reliable, transparent, and easy-to-use cab booking platform |
| **Insight** | Because current solutions lack fare transparency, booking history, and role-based management |

**POV Statement:**
> A daily commuter needs a simple and transparent cab booking platform because manually finding and negotiating with cab drivers is time-consuming, unreliable, and lacks price transparency.

---

## 3. How Might We (HMW) Questions

| # | How Might We... |
|---|----------------|
| 1 | How might we help users find available cabs near them instantly? |
| 2 | How might we show users the exact fare before they confirm a booking? |
| 3 | How might we allow users to view and cancel their bookings easily? |
| 4 | How might we give admins full control over the cab fleet? |
| 5 | How might we ensure only authorized users access the platform? |
| 6 | How might we differentiate between user and admin roles seamlessly? |
| 7 | How might we make the booking process as simple as 3 clicks? |

---

## 4. Root Cause Analysis (5 Whys)

**Problem:** Users don't know the fare before booking a cab

| Why | Answer |
|-----|--------|
| Why 1 | Because fare is calculated only after the trip ends |
| Why 2 | Because there is no upfront fare estimation system |
| Why 3 | Because cab platforms don't expose price per km data |
| Why 4 | Because there is no structured database of cab pricing |
| Why 5 | Because there is no unified cab management platform |

**Root Cause:** Lack of a centralized, data-driven cab booking platform with transparent pricing

---

## 5. Problem Prioritization Matrix

| Problem | Impact (1-5) | Frequency (1-5) | Priority |
|---------|-------------|-----------------|----------|
| No fare transparency | 5 | 5 | High |
| No centralized cab listing | 5 | 5 | High |
| No booking history | 4 | 4 | High |
| No cancellation option | 3 | 3 | Medium |
| No role-based access | 4 | 3 | Medium |
| No admin cab management | 4 | 4 | High |

---

## 6. Defined Problem Statement for UCab

**Current Situation:**
Users struggle to find reliable cabs, have no visibility into pricing, and cannot manage their bookings digitally. Cab administrators have no digital tool to manage their fleet.

**Desired Situation:**
A full-stack MERN web application where users can browse cabs, see fare estimates, book rides, and manage bookings — while admins can manage the entire cab fleet and monitor platform activity.

**Gap:**
The gap is the absence of a unified, role-based, transparent cab booking platform built on modern web technologies.
