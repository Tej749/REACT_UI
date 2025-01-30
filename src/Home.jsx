import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <a href="#" class="brand">
            MyWebsite
          </a>
          <button class="toggle-button" id="toggle-menu">
            ☰
          </button>
          <ul class="nav-links" id="nav-links">
            <li>
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/payment">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/test">Test Button</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Home;
