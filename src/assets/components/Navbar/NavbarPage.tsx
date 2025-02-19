import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarPage.module.css";

const NavbarPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);


 

  return (
    <nav className={styles.navbar} ref={menuRef}>
      <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>🔖 Blog 📔</Link></li>
        <li><Link to="/about-me" onClick={() => setIsMenuOpen(false)}>Career & Productivity</Link></li>
        <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Technology</Link></li>
        <li><Link to="/education" onClick={() => setIsMenuOpen(false)}>Study Motivation</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Life</Link></li>
      </ul>

      {/* Dark Mode Toggle
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button> */}
    </nav>
  );
};

export default NavbarPage;