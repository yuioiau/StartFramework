import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Only shrink when scrolling down and not at the top
      if (scrollTop > 0) {
        setIsScrolled(true);
      } 
      // Only expand when we're at the very top of the page
      else if (scrollTop === 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`position-fixed top-0 start-0 w-100 d-flex justify-content-between align-items-center ${isScrolled ? 'shrink' : ''}`}>
      <Link to="/home" className="text-decoration-none">
        <h1 className="my-0 ms-5 fw-bold">Start Framework</h1>
      </Link>

      <ul className="list-unstyled d-flex justify-content-center align-items-center me-5 my-auto">
        <li className="mx-3">
          <NavLink
            to="/about"
            id="nav-link"
            className={({isActive}) => (isActive ? "text-decoration-none fw-semibold px-3 py-2 rounded fs-5 activ-link" : "text-decoration-none fw-semibold fs-5")}
          >
            About
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/portfolio"
            id="nav-link"
            className={({isActive}) => (isActive ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link" : "text-decoration-none fw-semibold fs-5")}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/contact"
            id="nav-link"
            className={({isActive}) => (isActive ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link" : "text-decoration-none fw-semibold fs-5")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
