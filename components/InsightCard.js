export default function InsightCard({ title, detail, action }) {
  return (
    <div style={{
      background: "#FFFFFF",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      borderLeft: "6px solid #4ECDC4",
      transition: "transform 0.2s ease, box-shadow 0.2s ease"
    }}
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1.00)"}>
      <h3 style={{ color: "#2E2E3A", marginBottom: "8px" }}>{title}</h3>
      <p style={{ color: "#555", marginBottom: "8px" }}>{detail}</p>
      <p style={{ color: "#FF6B6B", fontWeight: 600 }}>💡 {action}</p>
    </div>
  );
}
