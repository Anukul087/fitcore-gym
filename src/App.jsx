import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import BMI from "./components/BMI";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Programs />
      <Trainers />
      <Pricing />
      <BMI />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;