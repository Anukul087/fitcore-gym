import { Dumbbell } from "lucide-react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>
        <Dumbbell size={24} color="#ff5a1f" />
        <span>FitCore Gym</span>
      </div>

      <p style={styles.desc}>
        A premium React-based fitness landing page.
      </p>

      <div style={styles.links}>
        <a href="#home">Home</a>
        <a href="#programs">Programs</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>

      <p style={styles.copy}>© 2026 FitCore Gym. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "40px 10%",
    textAlign: "center",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    background: "#090909",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.25rem",
    fontWeight: "700",
    marginBottom: "14px",
  },
  desc: {
    color: "#9b9b9b",
    maxWidth: "700px",
    margin: "0 auto 18px",
    lineHeight: "1.7",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "18px",
    color: "#d5d5d5",
  },
  copy: {
    color: "#777",
  },
};

export default Footer;