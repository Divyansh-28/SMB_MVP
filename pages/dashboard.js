import Navbar from "../components/Navbar";
import InsightCard from "../components/InsightCard";
import GraphCard from "../components/GraphCard";
import { useState, useRef, useEffect } from "react";

export default function Dashboard() {
  // Actionable insights (top-first)
  const insights = [
    {
      title: "Boost Evening Ad Performance",
      detail: "Evening slots (6–10 PM) get ~30% higher CTR.",
      action: "Increase frequency during evening hours.",
      steps: [
        "Open campaign scheduling and select evening slots (6–10 PM).",
        "Reallocate ~20% budget from low-performing morning slots.",
        "Create a festive evening creative and test two CTAs.",
      ],
      rationale: "Mobile usage spikes in evening; users are more likely to engage after work.",
    },
    {
      title: "Retarget Non-Converters",
      detail: "42% of visitors clicked but didn't convert.",
      action: "Run a short 5-day retargeting campaign with a discount.",
      steps: [
        "Create a custom audience of last 7-day visitors.",
        "Set a 5-day retargeting campaign with 10% off coupon.",
        "Track conversions daily and pause if CPA rises.",
      ],
      rationale: "Warm audiences often convert at higher rates when given a small incentive.",
    },
    {
      title: "Improve Repeat Purchase Rate",
      detail: "Repeat customers account for 35% of revenue.",
      action: "Launch a loyalty WhatsApp campaign.",
      steps: [
        "Segment customers with 1+ purchases in last 90 days.",
        "Send an exclusive WhatsApp coupon and ask for referrals.",
        "Measure uplift in 2 weeks; iterate on message.",
      ],
      rationale: "Retention campaigns improve LTV and have lower acquisition cost.",
    },
  ];

  const customers = [
    { metric: "New Customers", value: 120, change: 18 },
    { metric: "Repeat Customers", value: 32, change: 8 },
    { metric: "Avg Spend", value: 740, change: 12 },
    { metric: "Top Location", value: "Pune", change: 0 },
  ];

  const reachSeries = [{ label: "reach", values: [600, 700, 850, 760, 900, 980, 850] }];
  const reachProjection = [880, 920, 960, 1000, 1040, 1100, 1150];

  // Chat state
  const [chatMessages, setChatMessages] = useState([
    { from: "bot", text: "Hi Rahul 👋 I’m your AdPilot assistant — click any insight's 'Ask AI about this' to discuss it." },
  ]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  // Scroll chat to bottom on messages
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight + 100;
    }
  }, [chatMessages]);

  const sendUserMessage = (msg) => {
    setChatMessages((m) => [...m, { from: "user", text: msg }]);
    // Mocked AI reply
    setTimeout(() => {
      setChatMessages((m) => [...m, { from: "bot", text: `AI: Based on "${msg}", I recommend testing a short retargeting creative with urgency (3-day window).` }]);
    }, 700);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendUserMessage(input);
    setInput("");
  };

  // Called by InsightCard when user clicks "Ask AI about this"
  const handleInsightChat = (insightTitle) => {
    const prompt = `Please suggest an easy execution plan and sample ad copy for: "${insightTitle}"`;
    // push to chat and auto-scroll
    sendUserMessage(prompt);
    // optionally highlight assistant area or focus input
    const el = document.querySelector('[name="chat-input"]');
    if (el) el.focus();
  };

  // Audience finder state (inline)
  const [audienceOpen, setAudienceOpen] = useState(false);
  const discoveredAudience = [
    { name: "Women 25-40 (Pune)", reasons: "High engagement with festival posts", estSize: "8k" },
    { name: "Young Shoppers 18-25", reasons: "High CTR on discount creatives", estSize: "12k" },
    { name: "Repeat Buyers", reasons: "Past purchasers in 90d", estSize: "1.2k" },
  ];

  const applyAudience = (aud) => {
    alert(`Applied audience "${aud.name}" to new campaign (demo).`);
    // In a real app, we would pass this selection to the "Create Campaign" flow
  };

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: 26 }}>
        <h2 className="page-title">Campaign Dashboard</h2>

        {/* ---------------- TOP: Actionable Insights (prominent) ---------------- */}
        <section style={{ marginBottom: 18 }}>
          <h3 style={{ color: "var(--primary-1)" }}>⚡ Actionable Insights</h3>
          <div className="grid cols-3" style={{ marginTop: 12 }}>
            {insights.map((ins, idx) => (
              <InsightCard
                key={idx}
                title={ins.title}
                detail={ins.detail}
                action={ins.action}
                steps={ins.steps}
                rationale={ins.rationale}
                onChat={(t) => handleInsightChat(t)}
              />
            ))}
          </div>
        </section>

        {/* ---------------- MID: Performance & Projections ---------------- */}
        <section style={{ marginTop: 22 }}>
          <div className="grid" style={{ gridTemplateColumns: "1fr 340px", gap: 18 }}>
            <div>
              <h3 style={{ color: "var(--primary-1)" }}>📈 Performance & Projections</h3>

              <div className="grid cols-2" style={{ marginTop: 12 }}>
                <div className="card">
                  <h4 style={{ marginTop: 0 }}>Summary</h4>
                  <div className="small">High-level performance for your running campaign</div>
                  <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div className="meta">Reach</div>
                      <div className="value">8,500</div>
                      <div className="small">+14% vs last period</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="meta">Conversions</div>
                      <div className="value">210</div>
                      <div className="small">+9% vs last period</div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h4 style={{ marginTop: 0 }}>Quick Actions</h4>
                  <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                    <button className="btn primary" onClick={() => alert("Boost action (demo)")}>Boost top ad</button>
                    <button className="btn" onClick={() => alert("Create retargeting (demo)")}>Create retargeting</button>
                    <button className="btn ghost" onClick={() => { setAudienceOpen(true); window.scrollTo({ top: 600, behavior: 'smooth' }); }}>Find Audience</button>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 18 }}>
                <GraphCard title="Reach (last 7 days)" series={reachSeries} projection={reachProjection} />
              </div>

              {/* Projections & recommended steps */}
              <div style={{ marginTop: 16 }} className="card">
                <h4 style={{ marginTop: 0 }}>Projected Outcomes & Recommendations</h4>
                <div className="small">If current trend continues</div>

                <table className="proj-table" style={{ marginTop: 12 }}>
                  <thead><tr><th>Metric</th><th>Now</th><th>7 days</th><th>30 days</th></tr></thead>
                  <tbody>
                    <tr><td>Reach</td><td>8,500</td><td className="proj-positive">9,500 (+12%)</td><td className="proj-positive">11,000 (+29%)</td></tr>
                    <tr><td>Conversions</td><td>210</td><td className="proj-positive">240 (+14%)</td><td className="proj-positive">310 (+48%)</td></tr>
                    <tr><td>Avg Order Value</td><td>₹740</td><td>₹760 (+3%)</td><td>₹790 (+7%)</td></tr>
                  </tbody>
                </table>

                <div style={{ marginTop: 12 }}>
                  <strong>Recommended next steps</strong>
                  <ul style={{ marginTop: 8 }}>
                    <li>Retarget visitors who clicked but didn't convert — run a 5-day discount ad (10% off).</li>
                    <li>Increase evening ad frequency (6pm–10pm) — historically higher CTR.</li>
                    <li>Reuse the 'Festive Sale' creative and A/B test CTA text.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ---------------- RIGHT: Customer Snapshot, Audience Finder, Chat ---------------- */}
            <aside>
              <div className="card">
                <h4 style={{ marginTop: 0, color: "var(--accent-2)" }}>👥 Customer Snapshot</h4>
                <div style={{ display: "grid", gap: 10, marginTop: 8 }}>
                  {customers.map((c, idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontSize: 13, color: "var(--muted)" }}>{c.metric}</div>
                        <div style={{ fontWeight: 700, fontSize: 16 }}>{c.value}</div>
                      </div>
                      <div style={{ textAlign: "right", color: c.change > 0 ? "#2EA78B" : "#FF6B6B", fontWeight: 700 }}>
                        {c.change > 0 ? `+${c.change}%` : c.change === 0 ? '—' : `${c.change}%`}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 12 }} className="small">
                  <strong>Quick actions</strong>
                  <ul style={{ marginTop: 8 }}>
                    <li>Send an exclusive WhatsApp coupon to recent buyers (↑ retention).</li>
                    <li>Run a 'refer a friend' promo for repeat-customer growth.</li>
                  </ul>
                </div>
              </div>

              {/* Audience Finder (inline, toggles open) */}
              <div style={{ marginTop: 14 }} className="card">
                <h4 style={{ marginTop: 0 }}>🎯 Find My Audience</h4>
                <p className="small">Unsure who to target? We can suggest audiences based on past engagement and store profile.</p>

                {!audienceOpen && (
                  <div style={{ marginTop: 10 }}>
                    <button className="btn primary" onClick={() => setAudienceOpen(true)}>Discover my audience</button>
                  </div>
                )}

                {audienceOpen && (
                  <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                    {discoveredAudience.map((d, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 10, borderRadius: 8, background: "#fff" }}>
                        <div>
                          <div style={{ fontWeight: 700 }}>{d.name}</div>
                          <div className="small">{d.reasons} • est. {d.estSize}</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
                          <button className="btn" onClick={() => applyAudience(d)}>Use</button>
                          <button className="btn ghost" onClick={() => alert(`Previewing audience "${d.name}" (demo).`)}>Preview</button>
                        </div>
                      </div>
                    ))}

                    <div style={{ textAlign: "center", marginTop: 8 }}>
                      <button className="btn ghost" onClick={() => { setAudienceOpen(false); }}>Close</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat assistant */}
              <div style={{ marginTop: 14 }} className="card">
                <h4 style={{ marginTop: 0 }}>🤖 AI Assistant</h4>
                <div className="chat-box" ref={chatBoxRef} id="chatbox">
                  {chatMessages.map((m, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", marginBottom: 8 }}>
                      <div style={{
                        maxWidth: "78%",
                        padding: "10px 12px",
                        borderRadius: 12,
                        background: m.from === "user" ? "var(--accent-1)" : "#fff",
                        fontWeight: m.from === "user" ? 700 : 400,
                        color: m.from === "user" ? "#2E2E3A" : "var(--text-dark)",
                        border: "1px solid rgba(0,0,0,0.03)"
                      }}>{m.text}</div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSend} style={{ display: "flex", gap: 8, marginTop: 12 }}>
                  <input name="chat-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something like 'How to increase conversions?'" style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid #eee" }} />
                  <button className="btn primary">Send</button>
                </form>

                <div className="small suggestions" style={{ marginTop: 10 }}>
                  <button className="btn ghost" onClick={(e) => { e.preventDefault(); sendUserMessage('Retarget non-converters with 10% discount'); }}>Retarget non-converters</button>
                  <button className="btn ghost" onClick={(e) => { e.preventDefault(); sendUserMessage('Increase evening frequency'); }}>Increase evening ads</button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
