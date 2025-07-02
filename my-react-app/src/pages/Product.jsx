import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Products</h2>

      {products.length === 0 ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <div
          className="product-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="product-card"
                style={{
                  border: "1px solid var(--card-border)",
                  backgroundColor: "var(--card-bg)",
                  borderRadius: "8px",
                  padding: "1rem",
                  textAlign: "center",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                    marginBottom: "1rem",
                  }}
                />
                <h4
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    height: "3rem",
                    overflow: "hidden",
                  }}
                >
                  {product.title}
                </h4>
                <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  ${product.price}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "gray",
                    marginTop: "0.3rem",
                  }}
                >
                  {product.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
