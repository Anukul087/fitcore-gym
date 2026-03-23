# FitCore Gym – React Fitness Membership Platform

FitCore Gym is a modern React-based fitness membership and inquiry platform built as part of **Future Interns Task 3**. It is designed as a premium gym landing page with interactive features, localStorage-based persistence, and a protected admin dashboard for internal management.

---

## 🚀 Live Project Overview

FitCore Gym provides a clean and premium user experience for a fitness/gym business. The platform allows users to:

- Explore fitness programs
- View trainers and pricing plans
- Calculate BMI
- Select a membership plan
- Submit an inquiry form
- Automatically link selected plan with inquiry
- Store inquiry data locally
- Access a protected admin dashboard for reviewing submissions

---

## ✨ Features

### 🎨 User Interface
- Responsive premium gym landing page
- Sticky navigation bar with mobile menu
- Hero section with CTA
- Programs section
- Trainers showcase
- Membership pricing cards
- BMI calculator
- Testimonials section
- Contact / inquiry form
- Success modals for user actions

### ⚙️ Interactive Functionality
- Membership plan selection
- Selected plan auto-filled into inquiry form
- Smooth scroll from pricing section to inquiry section
- Inquiry form submission with validation
- Success popup on inquiry submit
- Success popup on plan selection

### 💾 Data Handling
- localStorage-based persistence for inquiries
- localStorage-based tracking for selected plans
- Temporary selected plan storage before inquiry submission

### 🔐 Admin Features
- Protected admin login page
- Demo-level password-based route protection
- Admin dashboard to view submitted inquiries
- View selected plans
- Delete individual records
- Clear all records
- Logout support with session persistence

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- CSS3

### Libraries / Tools
- React Router DOM
- Lucide React Icons
- LocalStorage API
- VS Code
- Git & GitHub
- Vercel

---

## 📂 Project Structure

```bash
fitcore-gym/
│── public/
│── src/
│   │── components/
│   │   │── Navbar.jsx
│   │   │── Hero.jsx
│   │   │── Features.jsx
│   │   │── Stats.jsx
│   │   │── Programs.jsx
│   │   │── Trainers.jsx
│   │   │── Pricing.jsx
│   │   │── BMI.jsx
│   │   │── Testimonials.jsx
│   │   │── Contact.jsx
│   │   │── Modal.jsx
│   │   │── AdminDashboard.jsx
│   │   │── Footer.jsx
│   │── App.jsx
│   │── main.jsx
│   │── index.css
│── package.json
│── README.md
│── vercel.json
