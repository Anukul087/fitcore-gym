import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ADMIN_PASSWORD = "fitcore123";

function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const authStatus = localStorage.getItem("isAdminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const storedInquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
      const storedPlans = JSON.parse(localStorage.getItem("selectedPlans")) || [];

      setInquiries(storedInquiries);
      setSelectedPlans(storedPlans);
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("isAdminAuthenticated", "true");
      setError("");
      setPassword("");
    } else {
      setError("Invalid admin password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAdminAuthenticated");
  };

  const deleteInquiry = (id) => {
    const updated = inquiries.filter((item) => item.id !== id);
    setInquiries(updated);
    localStorage.setItem("inquiries", JSON.stringify(updated));
  };

  const deletePlan = (id) => {
    const updated = selectedPlans.filter((item) => item.id !== id);
    setSelectedPlans(updated);
    localStorage.setItem("selectedPlans", JSON.stringify(updated));
  };

  const clearAllInquiries = () => {
    setInquiries([]);
    localStorage.removeItem("inquiries");
  };

  const clearAllPlans = () => {
    setSelectedPlans([]);
    localStorage.removeItem("selectedPlans");
  };

  if (!isAuthenticated) {
    return (
      <div style={styles.page}>
        <div style={styles.loginCard}>
          <h1 style={styles.loginTitle}>Admin Login</h1>
          <p style={styles.loginSubtitle}>
            Enter the admin password to access the FitCore dashboard.
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />

            {error && <p style={styles.error}>{error}</p>}

            <button type="submit" className="btn" style={{ width: "100%", marginTop: "12px" }}>
              Login to Dashboard
            </button>
          </form>

          <Link to="/" className="btn-outline" style={{ width: "100%", marginTop: "14px" }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div>
            <h1 style={styles.title}>FitCore Admin Dashboard</h1>
            <p style={styles.subtitle}>
              Secure demo admin panel for viewing recorded membership selections and inquiries.
            </p>
          </div>

          <div style={styles.topActions}>
            <Link to="/" className="btn-outline">Back to Home</Link>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        {/* Selected Plans Section */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Selected Membership Plans</h2>
            <button className="btn" onClick={clearAllPlans}>Clear All Plans</button>
          </div>

          {selectedPlans.length === 0 ? (
            <p style={styles.emptyText}>No plans selected yet.</p>
          ) : (
            <div style={styles.grid}>
              {selectedPlans.map((plan) => (
                <div key={plan.id} className="card">
                  <h3 style={{ color: "#ff5a1f", marginBottom: "10px" }}>{plan.planName}</h3>
                  <p style={styles.infoText}><strong>Price:</strong> {plan.planPrice}</p>
                  <p style={styles.infoText}><strong>Selected At:</strong> {plan.selectedAt}</p>
                  <button
                    className="btn"
                    style={{ marginTop: "15px", width: "100%" }}
                    onClick={() => deletePlan(plan.id)}
                  >
                    Delete Plan
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Inquiries Section */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Submitted Inquiries</h2>
            <button className="btn" onClick={clearAllInquiries}>Clear All Inquiries</button>
          </div>

          {inquiries.length === 0 ? (
            <p style={styles.emptyText}>No inquiries submitted yet.</p>
          ) : (
            <div style={styles.grid}>
              {inquiries.map((inq) => (
                <div key={inq.id} className="card">
                  <h3 style={{ color: "#ff5a1f", marginBottom: "10px" }}>{inq.name}</h3>
                  <p style={styles.infoText}><strong>Email:</strong> {inq.email}</p>
                  <p style={styles.infoText}><strong>Phone:</strong> {inq.phone}</p>
                  <p style={styles.infoText}><strong>Goal:</strong> {inq.goal}</p>
                  <p style={styles.infoText}><strong>Selected Plan:</strong> {inq.selectedPlan || "Not Selected"}</p>
                  <p style={styles.infoText}><strong>Message:</strong> {inq.message || "N/A"}</p>
                  <p style={styles.infoText}><strong>Submitted At:</strong> {inq.submittedAt}</p>
                  <button
                    className="btn"
                    style={{ marginTop: "15px", width: "100%" }}
                    onClick={() => deleteInquiry(inq.id)}
                  >
                    Delete Inquiry
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0b0b",
    color: "#fff",
    padding: "50px 10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    maxWidth: "1400px",
  },
  loginCard: {
    width: "100%",
    maxWidth: "460px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "32px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
    backdropFilter: "blur(10px)",
  },
  loginTitle: {
    fontSize: "2rem",
    marginBottom: "10px",
    textAlign: "center",
  },
  loginSubtitle: {
    color: "#aaa",
    marginBottom: "22px",
    textAlign: "center",
    lineHeight: "1.7",
  },
  input: {
    width: "100%",
    padding: "15px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    color: "#fff",
    outline: "none",
  },
  error: {
    color: "#ff6b6b",
    marginTop: "10px",
    fontSize: "0.95rem",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "35px",
  },
  topActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  title: {
    fontSize: "2.3rem",
    fontWeight: "800",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#aaa",
    lineHeight: "1.7",
  },
  section: {
    marginBottom: "50px",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "1.6rem",
  },
  emptyText: {
    color: "#888",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  infoText: {
    color: "#c8c8c8",
    marginBottom: "8px",
    lineHeight: "1.6",
  },
};

export default AdminDashboard;