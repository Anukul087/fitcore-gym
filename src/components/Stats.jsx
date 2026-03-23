const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Fitness Sessions / Week" },
  { value: "24/7", label: "Online Guidance Support" },
];

function Stats() {
  return (
    <section style={{ paddingTop: "0" }}>
      <div className="container">
        <div
          className="card"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {stats.map((item, index) => (
            <div key={index} style={{ textAlign: "center", padding: "10px" }}>
              <h2 style={{ color: "#ff5a1f", fontSize: "2.1rem", marginBottom: "8px" }}>{item.value}</h2>
              <p style={{ color: "#bcbcbc" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;