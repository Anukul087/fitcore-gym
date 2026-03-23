function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.content}>
        <span className="badge">Elite Fitness Experience</span>
        <h1 style={styles.title}>
          Build Strength. Burn Fat. <span className="highlight">Own Your Transformation.</span>
        </h1>
        <p style={styles.desc}>
          FitCore Gym empowers you with expert coaching, high-performance equipment,
          structured training plans, and a motivating environment designed for real results.
        </p>

        <div style={styles.buttons}>
          <a href="#pricing" className="btn">Start Membership</a>
          <a href="#programs" className="btn-outline">View Programs</a>
        </div>

        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <h3>5K+</h3>
            <p>Active Members</p>
          </div>
          <div style={styles.statBox}>
            <h3>25+</h3>
            <p>Expert Trainers</p>
          </div>
          <div style={styles.statBox}>
            <h3>12+</h3>
            <p>Training Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
  },
  content: {
    maxWidth: "760px",
    padding: "0 10%",
  },
  title: {
    fontSize: "4rem",
    lineHeight: "1.15",
    fontWeight: "800",
    marginBottom: "20px",
  },
  desc: {
    color: "#d0d0d0",
    fontSize: "1.05rem",
    lineHeight: "1.8",
    marginBottom: "30px",
    maxWidth: "680px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "38px",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "16px",
    maxWidth: "620px",
  },
  statBox: {
    padding: "18px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(8px)",
  },
};

export default Hero;