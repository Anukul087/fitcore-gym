const testimonials = [
  {
    name: "Rahul Sharma",
    review: "FitCore completely changed my discipline. The coaches are knowledgeable and the atmosphere keeps me consistent every week.",
  },
  {
    name: "Sneha Kapoor",
    review: "I reduced 8 kg in 3 months with their fat loss program. The structure, guidance, and accountability were excellent.",
  },
  {
    name: "Arjun Verma",
    review: "From equipment quality to trainer support, everything feels premium and professionally managed.",
  },
];

function Testimonials() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Success Stories From <span className="highlight">Our Members</span></h2>
        <p className="section-subtitle">
          Trusted by fitness enthusiasts who wanted real, measurable, and sustainable results.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {testimonials.map((item, index) => (
            <div className="card" key={index}>
              <p style={{ color: "#b8b8b8", lineHeight: "1.8", marginBottom: "18px" }}>
                “{item.review}”
              </p>
              <h4 style={{ color: "#ff5a1f" }}>— {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;