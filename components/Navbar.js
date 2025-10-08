import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <div className="brand">AdPilot AI</div>
        <div style={{display:'none'}} className="small">SMB Growth Assistant</div>
      </div>

      <nav>
        <div className="nav-links" role="navigation">
          <Link href="/">Setup</Link>
          <Link href="/create">Create</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        <button className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>

      {/* Mobile menu (simple) */}
      {open && (
        <div style={{
          position: "absolute",
          top: 64,
          right: 20,
          background: "white",
          borderRadius: 10,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          padding: 12,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href="/">Setup</Link>
            <Link href="/create">Create</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
      )}
    </header>
  );
}
