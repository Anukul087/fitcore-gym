function Modal({ isOpen, title, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.icon}>✓</div>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.message}>{message}</p>
        <button className="btn" onClick={onClose} style={{ width: "100%" }}>
          OK
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "20px",
  },
  modal: {
    width: "100%",
    maxWidth: "420px",
    background: "#111",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "32px 24px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
  },
  icon: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "rgba(255,90,31,0.12)",
    border: "1px solid rgba(255,90,31,0.25)",
    color: "#ff5a1f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    fontWeight: "700",
    margin: "0 auto 18px",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "12px",
  },
  message: {
    color: "#b8b8b8",
    lineHeight: "1.7",
    marginBottom: "22px",
  },
};

export default Modal;