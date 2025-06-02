import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container className="mt-5">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Your Dream Store 🛍️
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Discover premium products with unbeatable prices. We make shopping
          fun, fast, and fabulous.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="shop"
            style={{
              textDecoration: "none",
              color: "#7035ec",
              fontWeight: "bold",
            }}
          >
            🛒 Browse the Shop Now →
          </Link>
        </motion.p>
      </Container>
    </>
  );
};
export default Home;
