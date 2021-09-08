import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <small className="source-site">
      <a
        href="https://github.com/Jolusegun/Weather-App"
        target="_blank"
        className="source"
      >
        Open-sourced on GitHub
      </a>{" "}
      by Joyce O. Olusegun and{" "}
      <a
        href="https://friendly-lumiere-55b3f9.netlify.app"
        target="_blank"
        className="source"
      >
        hosted on Netlify
      </a>
    </small>
  );
}
