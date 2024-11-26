import React from "react";

const About: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Best Before</h1>
      <p style={styles.description}>
        Best Before is a platform designed to minimize waste and maximize
        kindness. Our mission is to connect people and organizations to share
        resources like food, water, and clothing with those who need them most.
      </p>
      <p style={styles.description}>
        We prioritize anonymity and ensure that no payments are involved, so
        everyone can give or receive with dignity.
      </p>
      <p style={styles.description}>
        Together, we can build a community that cares for one another and
        reduces waste. Join us in making a difference!
      </p>
    </div>
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

export default About;
