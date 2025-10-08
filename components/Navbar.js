import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 48px",
      background: "linear-gradient(90deg, #FF6B6B, #FFD93D)",
      color: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
    }}>
      <h2 style={{ fontWeight: 700 }}>AdPilot AI</h2>
      <div style={{ display: "flex", gap: "24px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>Setup</Link>
        <Link href="/create" style={{ color: "white", textDecoration: "none" }}>Create</Link>
        <Link href="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
      </div>
    </nav>
  );
}
