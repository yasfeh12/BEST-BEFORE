import React from "react";

const BusinessPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>For Businesses</h1>
      <p style={styles.intro}>
        Waste is not only bad for the environment, but it’s also bad for your
        bottom line. Join the movement to give back to the community while
        benefiting your business!
      </p>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Tax Incentives</h2>
          <p style={styles.cardDescription}>
            Donating surplus food can qualify you for tax deductions, saving you
            money while helping others.
          </p>
          <p style={styles.cardFooter}>For: All Businesses →</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Good Publicity</h2>
          <p style={styles.cardDescription}>
            Showcase your brand as socially responsible and community-driven,
            earning trust and loyalty from customers.
          </p>
          <p style={styles.cardFooter}>For: Food & Retail Industries →</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Brand Loyalty</h2>
          <p style={styles.cardDescription}>
            Customers are more likely to support brands that care about people
            and the planet.
          </p>
          <p style={styles.cardFooter}>For: Grocery Stores, Restaurants →</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Reduce Costs</h2>
          <p style={styles.cardDescription}>
            Save money on waste disposal by donating surplus items instead of
            throwing them away.
          </p>
          <p style={styles.cardFooter}>For: Manufacturing & Wholesale →</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: "36px",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: "10px",
  },
  intro: {
    fontSize: "18px",
    color: "#34495e",
    textAlign: "center",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontSize: "20px",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#34495e",
    marginBottom: "10px",
  },
  cardFooter: {
    fontSize: "14px",
    color: "#3498db",
    fontWeight: "bold",
  },
};

export default BusinessPage;
