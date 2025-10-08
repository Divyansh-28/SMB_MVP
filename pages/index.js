import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function Setup() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    category: "",
    budget: "",
    connectMeta: false,
    connectWhatsApp: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Business setup complete!");
    router.push("/create");
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
        <h2>Business Setup</h2>
        <p>Let’s understand your business to personalize your campaigns.</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input placeholder="Business Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input placeholder="Business Category (e.g. Retail, Fashion)"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })} required />
          <input placeholder="Monthly Budget (₹)"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })} required />
          <label>
            <input type="checkbox" 
              checked={form.connectMeta}
              onChange={(e) => setForm({ ...form, connectMeta: e.target.checked })}/> Connect Meta Ads
          </label>
          <label>
            <input type="checkbox" 
              checked={form.connectWhatsApp}
              onChange={(e) => setForm({ ...form, connectWhatsApp: e.target.checked })}/> Connect WhatsApp Business
          </label>
          <button style={{ background: "#0a2540", color: "white", padding: "10px", borderRadius: "6px" }}>
            Continue to Campaign Creation →
          </button>
        </form>
      </main>
    </>
  );
}
