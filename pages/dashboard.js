import Navbar from "../components/Navbar";
import InsightCard from "../components/InsightCard";

export default function Dashboard() {
  const insights = [
    { title: "Campaign Reach", detail: "Your Diwali campaign reached 8,500 people.", action: "Boost evening ads for +25% reach." },
    { title: "Best Performing Ad", detail: "‘50% Off Sale’ performed 40% better than others.", action: "Use this creative again next week." },
    { title: "Budget Usage", detail: "₹4,300 of ₹10,000 spent.", action: "Optimize underperforming ads." },
  ];

  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
        <h2>Dashboard & Insights</h2>
        <p>Here’s what the AI assistant learned from your running campaign:</p>
        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          {insights.map((i, idx) => (
            <InsightCard key={idx} {...i} />
          ))}
        </div>
      </main>
    </>
  );
}
