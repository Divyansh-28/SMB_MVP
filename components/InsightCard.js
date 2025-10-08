export default function InsightCard({ title, detail, action }) {
  return (
    <div style={{
      padding: "20px", border: "1px solid #ccc",
      borderRadius: "10px", backgroundColor: "#f8faff"
    }}>
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <p>{detail}</p>
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>💡 Suggestion: {action}</p>
    </div>
  );
}
