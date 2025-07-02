import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Welcome to FakeStore
        </h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#888" }}>
          Explore a wide variety of products fetched from the FakeStoreAPI.
          Click below to browse all items or learn more about us.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Link to="/product">
            <button>Browse Products</button>
          </Link>
          <Link to="/about">
            <button>About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
