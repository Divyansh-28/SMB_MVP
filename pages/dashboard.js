import Navbar from "../components/Navbar";
import InsightCard from "../components/InsightCard";
import { useState } from "react";

export default function Dashboard() {
  const insights = [
    { title: "Campaign Reach", detail: "Your Diwali campaign reached 8,500 people across Meta.", action: "Boost evening ads to expand reach by +25%." },
    { title: "Top Creative", detail: "‘Festive Sale 50% Off’ drove 42% higher clicks.", action: "Reuse this creative next week." },
    { title: "Budget Performance", detail: "₹4,300 of ₹10,000 spent with ROI of 3.1x.", action: "Increase conversion spend slightly." },
  ];

  const customers = [
    { metric: "New Customers", value: "120", change: "+18%" },
    { metric: "Repeat Customers", value: "32", change: "+8%" },
    { metric: "Avg Spend", value: "₹740", change: "+12%" },
    { metric: "Top Location", value: "Pune", change: "—" },
  ];

  const [chatMessages, setChatMessages] = useState([
    { from: "bot", text: "Hi Rahul 👋 I’ve analyzed your latest campaign. Want a quick summary?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setChatMessages([...chatMessages, { from: "user", text: input }]);
    setTimeout(() => {
      setChatMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "You could target last week’s high-engagement audience and try festive remarketing creatives 🎯" },
      ]);
    }, 800);
    setInput("");
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", background: "#F8F9FA", minHeight: "100vh" }}>
        <h2 style={{ textAlign: "center", color: "#2E2E3A" }}>Campaign Dashboard</h2>

        {/* Insights Section */}
        <section style={{ marginTop: "30px" }}>
          <h3 style={{ marginBottom: "16px", color: "#FF6B6B" }}>📈 Campaign Insights</h3>
          <div style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}>
            {insights.map((i, idx) => <InsightCard key={idx} {...i} />)}
          </div>
        </section>

        {/* Customer Analytics Section */}
        <section style={{ marginTop: "40px" }}>
          <h3 style={{ marginBottom: "16px", color: "#4ECDC4" }}>👥 Customer Analytics</h3>
          <div style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}>
            {customers.map((c, idx) => (
              <div key={idx} style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                textAlign: "center",
                borderTop: `4px solid ${idx % 2 === 0 ? "#FF6B6B" : "#FFD93D"}`
              }}>
                <h4 style={{ color: "#2E2E3A", marginBottom: "6px" }}>{c.metric}</h4>
                <p style={{ fontSize: "22px", fontWeight: "bold", margin: 0 }}>{c.value}</p>
                <p style={{ color: "#4ECDC4", margin: 0 }}>{c.change}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chatbot Section */}
        <section style={{
          marginTop: "50px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          maxWidth: "700px",
          marginInline: "auto",
          padding: "24px"
        }}>
          <h3 style={{ color: "#FF6B6B", marginBottom: "12px" }}>🤖 AI Assistant</h3>
          <div style={{
            height: "220px",
            overflowY: "auto",
            border: "1px solid #eee",
            borderRadius: "10px",
            padding: "12px",
            background: "#fff"
          }}>
            {chatMessages.map((m, idx) => (
              <div key={idx} style={{
                textAlign: m.from === "user" ? "right" : "left",
                marginBottom: "10px"
              }}>
                <span style={{
                  display: "inline-block",
                  background: m.from === "user" ? "#FFD93D" : "#F8F9FA",
                  color: m.from === "user" ? "#2E2E3A" : "#2E2E3A",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  maxWidth: "80%",
                }}>{m.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
            <input
              placeholder="Ask the AI assistant..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1, padding: "10px 12px", borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
            <button style={{
              background: "#FF6B6B", color: "white", border: "none",
              borderRadius: "8px", padding: "10px 16px", cursor: "pointer",
              fontWeight: "600"
            }}>Send</button>
          </form>
        </section>
      </main>
    </>
  );
}
