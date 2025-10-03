import React from "react";

export default function Footer() {
  return (
    <footer className="app-footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} TODO APP. Stay productive and
        organized!
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
}
