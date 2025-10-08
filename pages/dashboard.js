import Navbar from "../components/Navbar";
import InsightCard from "../components/InsightCard";
import GraphCard from "../components/GraphCard";
import { useState } from "react";

export default function Dashboard() {
const insights = [
  {
    title: "Boost Evening Ad Performance",
    detail: "Evening slots (6–10 PM) get 30% higher CTR.",
    action: "Increase frequency for evening hours.",
    steps: [
      "Go to campaign scheduling → select evening slots.",
      "Reallocate 20% budget from low-performing times.",
      "Add festive creative for evening audience.",
    ],
    rationale: "Evening hours align with high mobile usage. Shifting budget improves efficiency.",
  },
  {
    title: "Retarget Non-Converters",
    detail: "42% of users visited landing page but didn’t convert.",
    action: "Launch retargeting with 10% discount.",
    steps: [
      "Create a retargeting campaign for 'page visitors'.",
      "Add limited-time coupon CTA.",
      "Monitor conversion uplift after 3 days.",
    ],
    rationale: "Retargeting warm audiences can deliver up to 2.5x higher ROI.",
  },
  {
    title: "Enhance Repeat Customer Retention",
    detail: "Repeat customers contribute 35% of total revenue.",
    action: "Launch loyalty WhatsApp campaign.",
    steps: [
      "Segment customer list → frequent buyers.",
      "Send WhatsApp coupon or offer.",
      "Add call-to-action: 'Refer a friend, get ₹100 off'.",
    ],
    rationale: "Retention campaigns are cheaper than new acquisitions and improve lifetime value.",
  },
];

  const customers = [
    { metric: "New Customers", value: 120, change: 18 },
    { metric: "Repeat Customers", value: 32, change: 8 },
    { metric: "Avg Spend", value: 740, change: 12 },
    { metric: "Top Location", value: "Pune", change: 0 },
  ];

  // sample series for graph (simple mock)
  const reachSeries = [{ label: "reach", values: [600,700,850,760,900,980,850] }];
  const reachProjection = [880, 920, 960, 1000, 1040, 1100, 1150]; // next 7 days

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
        { from: "bot", text: "Suggestion: Retarget visitors who clicked but didn't convert — create a discount + urgency creative." },
      ]);
    }, 700);
    setInput("");
  };

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: 26 }}>
        <h2 className="page-title">Campaign Dashboard</h2>

        {/* top stats */}
        <section style={{ marginBottom: 18 }}>
          <div className="grid cols-3">
            <div className="card">
              <div className="stat">
                <div>
                  <div className="meta">Total Reach</div>
                  <div className="value">8,500</div>
                </div>
                <div className="pill">+14%</div>
              </div>
            </div>

            <div className="card">
              <div className="stat">
                <div>
                  <div className="meta">Conversions</div>
                  <div className="value">210</div>
                </div>
                <div className="pill" style={{background:'var(--accent-2)'}}>+9%</div>
              </div>
            </div>

            <div className="card">
              <div className="stat">
                <div>
                  <div className="meta">Budget Spent</div>
                  <div className="value">₹4,300 / ₹10,000</div>
                </div>
                <div className="pill" style={{background:'var(--accent-1)', color:'#2E2E3A'}}>Manage</div>
              </div>
            </div>
          </div>
        </section>

        {/* insights + graphs */}
        <section>
          <div className="grid" style={{ gridTemplateColumns: "1fr 340px", gap: 18 }}>
            <div>
              <h3 style={{color:'var(--primary-1)'}}>📈 Performance & Projections</h3>

              <div className="grid cols-2" style={{ marginTop: 12 }}>
                {insights.map((i, idx) => (
                  <InsightCard key={idx} {...i} />
                ))}
              </div>

              <div style={{ marginTop: 18 }}>
                <GraphCard title="Reach (last 7 days)" series={reachSeries} projection={reachProjection} />
              </div>

              {/* projections table */}
              <div style={{ marginTop: 16 }} className="card">
                <h4 style={{ marginTop: 0 }}>Projected Outcomes</h4>
                <div className="small">Estimated results if current trend continues</div>

                <table className="proj-table" style={{marginTop:12}}>
                  <thead>
                    <tr><th>Metric</th><th>Now</th><th>7 days</th><th>30 days</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Reach</td><td>8,500</td><td className="proj-positive">9,500 (+12%)</td><td className="proj-positive">11,000 (+29%)</td></tr>
                    <tr><td>Conversions</td><td>210</td><td className="proj-positive">240 (+14%)</td><td className="proj-positive">310 (+48%)</td></tr>
                    <tr><td>Avg Order Value</td><td>₹740</td><td>₹760 (+3%)</td><td>₹790 (+7%)</td></tr>
                  </tbody>
                </table>

                <div style={{marginTop:12}}>
                  <strong>Recommended next steps</strong>
                  <ul style={{marginTop:8}}>
                    <li>Retarget users who clicked but didn't convert — run a 5-day discount ad.</li>
                    <li>Increase evening ad frequency (6pm–10pm) — historically higher CTR.</li>
                    <li>Reuse the 'Festive Sale' creative and A/B test CTA text.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* right column: customers + chat */}
            <aside>
              <div className="card">
                <h4 style={{marginTop:0, color:'var(--accent-2)'}}>👥 Customer Snapshot</h4>
              
<div className="card" style={{ marginTop: "14px", background: "#FFF8E1" }}>
  <h4 style={{ marginTop: 0 }}>🎯 Find My Audience</h4>
  <p style={{ fontSize: "0.95rem", color: "#444" }}>
    Not sure who your ideal audience is? Let’s help you discover it.
  </p>
  <button
    className="btn primary"
    onClick={(e) => {
      e.preventDefault();
      alert(
        "Based on your past ad engagement, your top-performing audience segments are:\n\n1️⃣ Women (25–40) in Pune\n2️⃣ Fashion-conscious urban users\n3️⃣ Repeat buyers from last Diwali campaign."
      );
    }}
  >
    Know My Audience →
  </button>
</div>

                <div style={{display:'grid', gap:10, marginTop:8}}>
                  {customers.map((c, idx) => (
                    <div key={idx} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <div>
                        <div style={{fontSize:13, color:'var(--muted)'}}>{c.metric}</div>
                        <div style={{fontWeight:700, fontSize:16}}>{c.value}{typeof c.value === 'number' && c.metric !== 'Top Location' ? '' : ''}</div>
                      </div>
                      <div style={{textAlign:'right', color: c.change > 0 ? '#2EA78B' : '#FF6B6B', fontWeight:700}}>
                        {c.change > 0 ? `+${c.change}%` : c.change === 0 ? '—' : `${c.change}%`}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{marginTop:12}} className="small">
                  <strong>What to do:</strong>
                  <ul style={{marginTop:8}}>
                    <li>Send an exclusive WhatsApp coupon to recent buyers (↑ retention).</li>
                    <li>Run a 'refer a friend' promo for repeat-customer growth.</li>
                  </ul>
                </div>
              </div>

              {/* chat assistant */}
              <div style={{marginTop:14}} className="card">
                <h4 style={{marginTop:0}}>🤖 AI Assistant</h4>
                <div className="chat-box" id="chatbox">
                  {chatMessages.map((m, i) => (
                    <div key={i} className={`chat-row ${m.from === 'user' ? 'user' : ''}`}>
                      <div className={`chat-bubble ${m.from === 'user' ? 'user' : ''}`}>{m.text}</div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSend} style={{display:'flex', gap:8, marginTop:10}}>
                  <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Ask something like 'How to increase conversions?'" style={{flex:1, padding:'10px 12px', borderRadius:8, border:'1px solid #eee'}} />
                  <button className="btn primary">Send</button>
                </form>

                <div className="small suggestions">
                  <button className="btn ghost" onClick={(ev)=>{ev.preventDefault(); setInput('Retarget non-converters with 10% discount');}}>Retarget non-converters</button>
                  <button className="btn ghost" onClick={(ev)=>{ev.preventDefault(); setInput('Increase evening frequency');}}>Increase evening ads</button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
