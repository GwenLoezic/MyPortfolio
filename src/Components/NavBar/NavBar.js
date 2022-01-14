import React from "react";

import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";
import LogoBrand from "../../Assets/Logo.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <img alt="logoBrand" className="logoBrand" src={LogoBrand} />
      <nav className="NavBar-Navigation">
        <ul>
          <li>
            <Link href="Home" id="home" to="/Home">
              HOME
            </Link>
          </li>
          <li>
            <Link href="Projet" id="projet" to="/Projet">
              PROJET
            </Link>
          </li>
          <li>
            <Link href="Contact" id="contact" to="/Contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="NavBar-Navigation-Mobile">
        <ul>
          <li>
            <Link href="Home" id="home" to="/Home">
              HOME
            </Link>
          </li>
          <li>
            <Link href="Projet" id="projet" to="/Projet">
              PROJET
            </Link>
          </li>
          <li>
            <Link href="Contact" id="contact" to="/Contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
