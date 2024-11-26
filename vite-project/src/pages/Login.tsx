import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulated login action
    console.log("User logged in with email:", email);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Log In
        </button>
      </form>
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
  form: {
    marginTop: "20px",
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    fontSize: "16px",
    width: "80%",
    maxWidth: "400px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;
