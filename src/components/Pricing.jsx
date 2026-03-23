import { useState } from "react";
import Modal from "./Modal";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    features: ["Gym Access", "Locker Facility", "Initial Assessment"],
  },
  {
    name: "Pro",
    price: "₹1,999",
    features: ["All Starter Features", "Group Classes", "Diet Consultation"],
  },
  {
    name: "Elite",
    price: "₹2,999",
    features: ["All Pro Features", "Personal Trainer", "Progress Tracking"],
  },
];

function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanSelect = (planName, planPrice) => {
    setSelectedPlan(planName);

    // Store temporary selected plan for contact form autofill
    const tempPlan = {
      planName,
      planPrice,
    };

    localStorage.setItem("pendingSelectedPlan", JSON.stringify(tempPlan));

    // Optional analytics: still store raw plan clicks separately
    const existingPlans = JSON.parse(localStorage.getItem("selectedPlans")) || [];
    const newPlan = {
      id: Date.now(),
      planName,
      planPrice,
      selectedAt: new Date().toLocaleString(),
    };
    localStorage.setItem("selectedPlans", JSON.stringify([...existingPlans, newPlan]));

    setIsModalOpen(true);

    // Scroll to contact section after short delay
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <section id="pricing">
      <div className="container">
        <h2 className="section-title">
          Membership <span className="highlight">Plans</span>
        </h2>
        <p className="section-subtitle">
          Flexible pricing designed to fit different goals, budgets, and commitment levels.
        </p>

        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}
        >
          {plans.map((plan, index) => (
            <div
              className="card"
              key={index}
              style={{
                position: "relative",
                border: plan.name === "Pro" ? "1px solid rgba(255,90,31,0.35)" : "",
              }}
            >
              {plan.name === "Pro" && (
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "rgba(255,90,31,0.12)",
                    border: "1px solid rgba(255,90,31,0.25)",
                    color: "#ff5a1f",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                  }}
                >
                  Popular
                </span>
              )}

              <h3>{plan.name}</h3>
              <h2 style={{ color: "#ff5a1f", margin: "16px 0" }}>{plan.price}/month</h2>

              <ul style={{ marginBottom: "24px" }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: "12px", color: "#b8b8b8" }}>
                    ✔ {feature}
                  </li>
                ))}
              </ul>

              <button
                className="btn"
                style={{ width: "100%" }}
                onClick={() => handlePlanSelect(plan.name, plan.price)}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        title="Plan Selected Successfully"
        message={`Your ${selectedPlan} membership plan has been selected. Please complete the inquiry form below so our team can contact you.`}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default Pricing;