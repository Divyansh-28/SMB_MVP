import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function CreateCampaign() {
  const router = useRouter();
  const [form, setForm] = useState({
    goal: "",
    // audience: "",   <-- removed as requested
    budget: "",
    duration: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Campaign Created Successfully!");
    router.push("/dashboard");
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
        <h2>Create a New Campaign</h2>
        <p>
          We’ve simplified the process — if you’re unsure about your audience, use{" "}
          <strong>Find My Audience</strong> on the Dashboard and it will suggest audiences for you.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} required>
            <option value="">Select Goal</option>
            <option value="Awareness">Boost Awareness</option>
            <option value="Sales">Increase Sales</option>
            <option value="Leads">Generate Leads</option>
          </select>

          {/* Audience field intentionally removed. Guiding text added above. */}

          <input placeholder="Campaign Budget (₹)"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })} required />
          <input placeholder="Duration (in days)"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })} required />

          <button style={{ background: "#FF6B6B", color: "white", padding: "10px", borderRadius: "6px", border: "none", fontWeight:700 }}>
            Launch Campaign →
          </button>
        </form>

        <div style={{ marginTop: 18, background: "#fff6e6", padding: 12, borderRadius: 8 }}>
          <strong>Not sure who to target?</strong>
          <p style={{ margin: "6px 0" }}>
            Click <a href="/dashboard" style={{ color: "#FF6B6B", fontWeight: 700 }}>Find My Audience</a> on the Dashboard — our assistant will suggest audiences based on your past engagement and store profile.
          </p>
        </div>
      </main>
    </>
  );
}
