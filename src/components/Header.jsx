import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Toggle.css";

const Header = () => {
  const [theme, setTheme] = useState("dark-mode");

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    document.body.classList.remove(theme);
    const newTheme = theme === "dark-mode" ? "light-mode" : "dark-mode";
    setTheme(newTheme);
    document.body.classList.add(newTheme);
  };

  return (
    <header>
      <h1>Merin K</h1>
     <nav>
  <Link to="/" className="nav-link">Home</Link> | 
  <Link to="/skills" className="nav-link">Skills</Link> | 
  <Link to="/projects" className="nav-link">Projects</Link> | 
  <Link to="/contact" className="nav-link">Contact</Link>
</nav>


      {/* ✅ Toggle Switch with Label */}
      <div className="toggle-container">
        <span className="mode-label">
          {theme === "dark-mode" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </span>
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "light-mode"}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
