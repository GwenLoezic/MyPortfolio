import React, { Component } from "react";

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// - import du CSS :
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="list-item-footer">
          <ul className="item-footer">
            <li className="item">
              <a className="item-item" href="Home">
                HOME
              </a>
            </li>

            <li className="item">
              <a className="item-item" href="Projet">
                PROJET
              </a>
            </li>
            <li className="item">
              <a className="item-item" href="Contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="social-nav-footer">
          <ul className="footer-nav">
            <li className="nav-footer">
              <a href="https://www.facebook.com/gwenael.loezic/">
                <FaFacebook id="facebook" />
              </a>
            </li>
            <li className="nav-footer">
              <a href="https://www.linkedin.com/in/gwena%C3%ABl-loezic-6b2154a0/">
                <FaLinkedin id="linkedin" />
              </a>
            </li>
            <li className="nav-footer">
              <a href="https://github.com/GwenLoezic">
                <FaGithub id="github" />
              </a>
            </li>
            <li className="nav-footer">
              <a href="https://twitter.com/?lang=fr">
                <FaTwitter id="twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>© All Rights Reserved by Gwenaël Loezic</p>
        </div>
      </div>
    );
  }
}

export default Footer;
