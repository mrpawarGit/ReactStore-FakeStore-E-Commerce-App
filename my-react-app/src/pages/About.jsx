import React from "react";

export default function About() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "auto",
        lineHeight: "1.8",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>
        About This App
      </h2>

      <p>
        This is a demo e-commerce platform built using <strong>React</strong>,
        <strong> Vite</strong>, and <strong>FakeStoreAPI</strong>. It showcases product listings,
        dynamic product detail routing, authentication, and responsive UI—all implemented with modern
        frontend best practices.
      </p>

      <ul style={{ marginTop: "1.5rem", paddingLeft: "1.5rem" }}>
        <li>🔄 Dynamic Routing with React Router</li>
        <li>🛒 Fetching products via Axios from FakeStoreAPI</li>
        <li>🔐 Login using Reqres fake login API</li>
        <li>🎨 Custom dark/light mode-aware UI</li>
        <li>📦 Components like Product List, Product Details, Navbar, and Login</li>
      </ul>

      <p style={{ marginTop: "1.5rem" }}>
        Built for learning, practice, and showcasing React development skills.
      </p>
    </div>
  );
}
