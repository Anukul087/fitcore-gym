import { Dumbbell, HeartPulse, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: <Dumbbell size={34} color="#ff5a1f" />,
    title: "Advanced Equipment",
    desc: "Train with premium strength, cardio, and functional machines built for performance.",
  },
  {
    icon: <HeartPulse size={34} color="#ff5a1f" />,
    title: "Health & Endurance",
    desc: "Improve stamina, heart health, mobility, and energy with structured fitness routines.",
  },
  {
    icon: <Trophy size={34} color="#ff5a1f" />,
    title: "Goal-Driven Plans",
    desc: "Whether fat loss or muscle gain, our plans are tailored for measurable progress.",
  },
  {
    icon: <Users size={34} color="#ff5a1f" />,
    title: "Certified Coaches",
    desc: "Work with experienced trainers who ensure proper form, consistency, and motivation.",
  },
];

function Features() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Why Members Choose <span className="highlight">FitCore</span></h2>
        <p className="section-subtitle">
          We combine expert guidance, a premium training environment, and performance-focused programs
          to help you achieve sustainable transformation.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {features.map((feature, index) => (
            <div className="card glow" key={index}>
              <div style={{ marginBottom: "18px" }}>{feature.icon}</div>
              <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>{feature.title}</h3>
              <p style={{ color: "#b8b8b8", lineHeight: "1.7" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;