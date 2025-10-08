import { useState } from "react";

/**
 * Props:
 * - title, detail, action
 * - steps (array of strings)
 * - rationale (string)
 * - onChat(title) -> callback to push a contextual prompt to the chat
 */
export default function InsightCard({ title, detail, action, steps = [], rationale = "", onChat }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="card"
      style={{
        cursor: "default",
        borderLeft: "6px solid #FF6B6B",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
    >
      {/* Header row: title + obvious expand control */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ color: "#2E2E3A", margin: "0 0 6px 0" }}>{title}</h3>
          <p style={{ color: "#555", margin: 0 }}>{detail}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#FF6B6B", fontWeight: 700 }}>💡 {action}</div>
          </div>

          {/* Explicit expand control — more discoverable than implicit click */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: expanded ? "#EFEFEF" : "#FF6B6B",
                color: expanded ? "#2E2E3A" : "white",
                border: "none",
                padding: "8px 10px",
                borderRadius: 10,
                fontWeight: 700,
                cursor: "pointer"
              }}
              aria-expanded={expanded}
            >
              {expanded ? "Hide plan" : "View plan"}
            </button>
            <div style={{ fontSize: 12, color: "#777" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ transform: expanded ? "rotate(180deg)" : "none" }}>
                  <path d="M6 9l6 6 6-6" stroke={expanded ? "#2E2E3A" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ color: "#777", fontWeight: 600 }}>{expanded ? "Expanded" : "Click to view steps"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div style={{ marginTop: 12, background: "#FFF8E1", padding: 14, borderRadius: 10 }}>
          <strong style={{ display: "block", marginBottom: 8 }}>Step-by-step plan</strong>
          <ol style={{ marginTop: 6, marginBottom: 8 }}>
            {steps.map((s, i) => (
              <li key={i} style={{ marginBottom: 6 }}>{s}</li>
            ))}
          </ol>

          <div style={{ fontStyle: "italic", color: "#444", marginBottom: 10 }}>
            💬 <strong>Why this helps:</strong> {rationale}
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={(e) => { e.stopPropagation(); onChat?.(title); }}
              style={{
                background: "#4ECDC4",
                border: "none",
                color: "#2E2E3A",
                fontWeight: 700,
                borderRadius: 8,
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Ask AI about this
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); alert("Task checklist created (demo) — you can convert this to a real workflow."); }}
              style={{
                background: "#FFD93D",
                border: "none",
                color: "#2E2E3A",
                fontWeight: 700,
                borderRadius: 8,
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Create checklist
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
