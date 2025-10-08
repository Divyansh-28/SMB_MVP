import { useState } from "react";

export default function InsightCard({ title, detail, action, steps, rationale, onChat }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        borderLeft: "6px solid #FF6B6B",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <h3 style={{ color: "#2E2E3A", marginBottom: "6px" }}>{title}</h3>
      <p style={{ color: "#555", marginBottom: "8px" }}>{detail}</p>
      <p style={{ color: "#FF6B6B", fontWeight: 600, marginBottom: "6px" }}>💡 {action}</p>

      {expanded && (
        <div
          style={{
            background: "#FFF8E1",
            padding: "14px",
            borderRadius: "10px",
            marginTop: "10px",
            fontSize: "0.95rem",
          }}
        >
          <strong>Action Plan:</strong>
          <ol style={{ marginTop: "6px", marginBottom: "8px" }}>
            {steps?.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <p style={{ fontStyle: "italic", color: "#444" }}>
            💬 <strong>Rationale:</strong> {rationale}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onChat?.(title);
            }}
            style={{
              marginTop: "8px",
              background: "#4ECDC4",
              border: "none",
              color: "#2E2E3A",
              fontWeight: "600",
              borderRadius: "8px",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            Ask AI about this →
          </button>
        </div>
      )}
    </div>
  );
}
