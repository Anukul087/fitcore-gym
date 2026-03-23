import { useState, useEffect } from "react";
import Modal from "./Modal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    selectedPlan: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const pendingPlan = JSON.parse(localStorage.getItem("pendingSelectedPlan"));

    if (pendingPlan) {
      setFormData((prev) => ({
        ...prev,
        selectedPlan: `${pendingPlan.planName} (${pendingPlan.planPrice}/month)`,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.goal ||
      !formData.selectedPlan
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const existingInquiries = JSON.parse(localStorage.getItem("inquiries")) || [];

    const newInquiry = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toLocaleString(),
    };

    localStorage.setItem("inquiries", JSON.stringify([...existingInquiries, newInquiry]));

    // Clear pending selected plan after successful inquiry
    localStorage.removeItem("pendingSelectedPlan");

    setIsModalOpen(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      goal: "",
      selectedPlan: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          Start Your <span className="highlight">Fitness Journey</span>
        </h2>
        <p className="section-subtitle">
          Fill out the form below and our team will connect with you for membership guidance and personalized assistance.
        </p>

        <div className="card" style={{ maxWidth: "760px", margin: "auto" }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
            >
              <option value="" disabled>Select Fitness Goal</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="General Fitness">General Fitness</option>
              <option value="Personal Training">Personal Training</option>
            </select>

            <select
              name="selectedPlan"
              value={formData.selectedPlan}
              onChange={handleChange}
            >
              <option value="" disabled>Select Membership Plan</option>
              <option value="Starter (₹999/month)">Starter (₹999/month)</option>
              <option value="Pro (₹1,999/month)">Pro (₹1,999/month)</option>
              <option value="Elite (₹2,999/month)">Elite (₹2,999/month)</option>
            </select>

            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about your goal"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="btn"
              style={{ marginTop: "18px", width: "100%" }}
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        title="Inquiry Submitted Successfully"
        message="Your response has been recorded successfully! Our team will contact you soon."
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default Contact;