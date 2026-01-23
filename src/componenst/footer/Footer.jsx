import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">MyApp</h2>

        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <p className="footer-copy">
          © 2026 myApp fauzan
        </p>
      </div>
    </footer>
  );
}
