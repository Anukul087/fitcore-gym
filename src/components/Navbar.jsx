import { useState, useEffect } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      {/* Left */}
      <div style={styles.left}>
        <div style={styles.logo}>
          <Dumbbell size={28} color="#ff5a1f" />
          <span>FitCore Gym</span>
        </div>
      </div>

      {/* Center */}
      {!isMobile && (
        <div style={styles.center}>
          <ul style={styles.menu}>
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Right */}
      <div style={styles.right}>
        {!isMobile && (
          <a href="#pricing" className="btn">
            Join Now
          </a>
        )}

        {isMobile && (
          <button style={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} color="#fff" /> : <Menu size={26} color="#fff" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div style={styles.mobileMenu}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#programs" onClick={() => setIsOpen(false)}>Programs</a>
          <a href="#trainers" onClick={() => setIsOpen(false)}>Trainers</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#pricing" className="btn" onClick={() => setIsOpen(false)} style={{ marginTop: "10px" }}>
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "18px 10%",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(11,11,11,0.85)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  left: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.35rem",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  menu: {
    display: "flex",
    gap: "32px",
    fontWeight: "500",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
  menuBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileMenu: {
    position: "absolute",
    top: "80px",
    left: 0,
    width: "100%",
    background: "#101010",
    display: "flex",
    flexDirection: "column",
    padding: "24px 10%",
    gap: "18px",
    borderTop: "1px solid rgba(255,255,255,0.05)",
  },
};

export default Navbar;