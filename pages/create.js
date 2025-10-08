import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function CreateCampaign() {
  const router = useRouter();
  const [form, setForm] = useState({
    goal: "",
    audience: "",
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
        <p>Define your campaign goal, audience, and budget.</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} required>
            <option value="">Select Goal</option>
            <option value="Awareness">Boost Awareness</option>
            <option value="Sales">Increase Sales</option>
            <option value="Leads">Generate Leads</option>
          </select>
          <input placeholder="Target Audience (e.g. local customers, youth, families)"
            value={form.audience}
            onChange={(e) => setForm({ ...form, audience: e.target.value })} required />
          <input placeholder="Campaign Budget (₹)"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })} required />
          <input placeholder="Duration (in days)"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })} required />
          <button style={{ background: "#0a2540", color: "white", padding: "10px", borderRadius: "6px" }}>
            Launch Campaign →
          </button>
        </form>
      </main>
    </>
  );
}
