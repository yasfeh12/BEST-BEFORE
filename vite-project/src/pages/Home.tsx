import React from "react";
import TooGoodToGoPlatform from "../components/TooGoodToGoPlatform";

const Home: React.FC = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to Best Before</h1>
        <p style={styles.description}>
          Best Before is a charity-based platform connecting individuals and
          organizations to give away food, water, clothing, and other essentials
          to those in need.
        </p>
        <p style={styles.description}>
          Join us in creating a community that shares, cares, and helps without
          barriers or payments. Your anonymity is our priority.
        </p>
        <TooGoodToGoPlatform />
      </div>
    </>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    color: "#2c3e50",
  },
  description: {
    fontSize: "18px",
    marginTop: "10px",
    color: "#34495e",
  },
};

export default Home;
