// components/Navbar.js
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  // Ensure Bootstrap toggler works on client side (script loaded in _app)
  useEffect(() => {
    // nothing required — bootstrap bundle from CDN handles toggler
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{
        background: "linear-gradient(90deg,#FF6B6B,#FFD93D)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
      }}>
        <div className="container-fluid">
          <Link href="/" className="navbar-brand" style={{ color: "white", fontWeight: 700, textDecoration: "none" }}>
            AdPilot AI
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"
            aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation"
            style={{ borderColor: "rgba(255,255,255,0.35)" }}>
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}>☰</span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link" style={{ color: "white", fontWeight: 600 }}>Setup</Link>
              </li>
              <li className="nav-item">
                <Link href="/create" className="nav-link" style={{ color: "white", fontWeight: 600 }}>Create</Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard" className="nav-link" style={{ color: "white", fontWeight: 600 }}>Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
