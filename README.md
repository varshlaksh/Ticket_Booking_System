# 📅 Appointment/Slot Booking Backend API

A simple Node.js backend API for an appointment or slot booking system. It includes user authentication, slot management, and booking functionality.

## 🔧 Tech Stack

- **Backend Framework:** Node.js + Express
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Environment Management:** dotenv
- **HTTP Tooling:** CORS, Express.json

---

## 📁 Project Structure

├── config/
│ └── db.js # MongoDB connection setup
├── models/
│ ├── User.js # User schema
│ ├── Slot.js # Slot schema
│ └── Booking.js # Booking schema
├── routes/
│ ├── authRoutes.js # User Register/Login
│ ├── slotRoutes.js # CRUD for time slots
│ └── bookingRoutes.js # Booking appointments
├── .env # Environment variables
├── server.js # Server entry point
├── package.json
