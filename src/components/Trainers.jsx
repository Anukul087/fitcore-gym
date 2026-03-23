const trainers = [
  {
    name: "Aarav Mehta",
    role: "Head Strength Coach",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Riya Sharma",
    role: "Cardio & Endurance Specialist",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Kabir Verma",
    role: "Transformation Expert",
    img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=600&q=80"
  },
];

function Trainers() {
  return (
    <section id="trainers">
      <div className="container">
        <h2 className="section-title">Train With The <span className="highlight">Best Coaches</span></h2>
        <p className="section-subtitle">
          Our certified professionals guide every member with precision, safety, and motivation.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {trainers.map((trainer, index) => (
            <div className="card" key={index} style={{ textAlign: "center" }}>
              <img
                src={trainer.img}
                alt={trainer.name}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "18px",
                  marginBottom: "18px",
                }}
              />
              <h3>{trainer.name}</h3>
              <p style={{ color: "#ff5a1f", marginTop: "8px" }}>{trainer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;