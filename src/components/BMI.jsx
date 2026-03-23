import { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (h <= 0 || w <= 0) return;

    const result = (w / (h * h)).toFixed(1);
    setBmi(result);

    if (result < 18.5) setStatus("Underweight");
    else if (result < 24.9) setStatus("Normal Weight");
    else if (result < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <section>
      <div className="container">
        <h2 className="section-title">Check Your <span className="highlight">BMI</span></h2>
        <p className="section-subtitle">
          Use our quick BMI calculator to understand your current body composition range.
        </p>

        <div className="card" style={{ maxWidth: "650px", margin: "auto" }}>
          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter your height in centimeters"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <label style={{ display: "block", marginTop: "16px" }}>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter your weight in kilograms"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <button className="btn" style={{ marginTop: "22px", width: "100%" }} onClick={calculateBMI}>
            Calculate BMI
          </button>

          {bmi && (
            <div
              style={{
                marginTop: "24px",
                padding: "18px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>
                Your BMI: <span className="highlight">{bmi}</span>
              </h3>
              <p style={{ color: "#bcbcbc" }}>Status: {status}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BMI;