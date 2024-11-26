import React from "react";

const TooGoodToGoPlatform: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Too Good To Go Platform</h1>
      <p style={styles.subtitle}>END-TO-END SURPLUS FOOD MANAGEMENT SOLUTION</p>
      <p style={styles.description}>
        The Too Good To Go Platform enables retailers to unlock value from
        excess inventory, with modular software that seamlessly tracks and
        redistributes surplus food.
      </p>
      <button style={styles.button}>Get in touch</button>
      <img
        src="https://via.placeholder.com/400x300"
        alt="Smartphone with Too Good To Go Platform"
        style={styles.image}
      />

      <h2 style={styles.sectionTitle}>Core Benefits</h2>
      <div style={styles.benefitsContainer}>
        <div style={styles.benefit}>
          <h3 style={styles.benefitTitle}>Track</h3>
          <p style={styles.benefitDescription}>
            Expiry date management digitizes expiry date verification, making
            in-store inventory management significantly more efficient.
          </p>
          <p style={styles.benefitDescription}>
            Only 3%-7% SKUs to check daily, not 100%, with digestible reports
            via one simple daily reporting system.
          </p>
        </div>

        <div style={styles.benefit}>
          <h3 style={styles.benefitTitle}>Optimise</h3>
          <p style={styles.benefitDescription}>
            Recommendations help store employees decide what to do with
            near-expired products—apply optimised discounts, create Surprise
            Bags, or donate items.
          </p>
        </div>

        <div style={styles.benefit}>
          <h3 style={styles.benefitTitle}>Distribute</h3>
          <p style={styles.benefitDescription}>
            Intelligent discounting optimises discount levels systematically,
            improves revenue from close-to-expiry products, and seamlessly
            connects with the store's ERP system.
          </p>
        </div>

        <div style={styles.benefit}>
          <h3 style={styles.benefitTitle}>Marketplace Surprise Bags</h3>
          <p style={styles.benefitDescription}>
            Employees can allocate surplus food to Surprise Bags directly from
            their devices and upload them to the marketplace for local users to
            buy and collect.
          </p>
        </div>

        <div style={styles.benefit}>
          <h3 style={styles.benefitTitle}>Donations</h3>
          <p style={styles.benefitDescription}>
            Store managers can easily download CSV files with donation lists or
            connect via API to third-party donation applications.
          </p>
        </div>

        <div style={styles.benefit}>
          <h3 style={styles.benefitTitle}>Reporting</h3>
          <p style={styles.benefitDescription}>
            Custom reports empower partners to track and extract insights,
            enabling data-driven decision-making on food waste prevention and
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    color: "#34495e",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  description: {
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  button: {
    display: "block",
    margin: "0 auto",
    padding: "10px 20px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  image: {
    display: "block",
    margin: "20px auto",
    maxWidth: "100%",
    borderRadius: "8px",
  },
  sectionTitle: {
    fontSize: "28px",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "20px",
  },
  benefitsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  benefit: {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  benefitTitle: {
    fontSize: "20px",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  benefitDescription: {
    fontSize: "16px",
    color: "#34495e",
    lineHeight: "1.5",
  },
};

export default TooGoodToGoPlatform;
