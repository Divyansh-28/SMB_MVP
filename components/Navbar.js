import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", 
      alignItems: "center", padding: "12px 40px",
      backgroundColor: "#0a2540", color: "white"
    }}>
      <h3>AdPilot MVP</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>Setup</Link>
        <Link href="/create" style={{ color: "white", textDecoration: "none" }}>Create</Link>
        <Link href="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
      </div>
    </nav>
  );
}
