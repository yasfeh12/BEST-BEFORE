import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          Best Before
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/business" style={styles.link}>
            Business
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    marginLeft: "20px",
    fontSize: "16px",
  },
};

export default NavBar;
