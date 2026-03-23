const programs = [
  {
    title: "Strength & Hypertrophy",
    desc: "A structured resistance training plan focused on building lean muscle and progressive strength.",
  },
  {
    title: "Fat Loss Transformation",
    desc: "High-efficiency cardio, circuit training, and nutrition-based guidance for sustainable fat reduction.",
  },
  {
    title: "Functional Fitness",
    desc: "Enhance mobility, flexibility, coordination, and full-body athletic performance.",
  },
  {
    title: "1-on-1 Personal Coaching",
    desc: "Customized plans, technique correction, progress tracking, and direct trainer accountability.",
  },
];

function Programs() {
  return (
    <section id="programs">
      <div className="container">
        <h2 className="section-title">Signature <span className="highlight">Programs</span></h2>
        <p className="section-subtitle">
          Our result-oriented programs are designed for beginners, intermediate learners, and advanced athletes.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {programs.map((program, index) => (
            <div className="card" key={index}>
              <h3 style={{ marginBottom: "14px", color: "#ff5a1f" }}>{program.title}</h3>
              <p style={{ color: "#b8b8b8", lineHeight: "1.7" }}>{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;