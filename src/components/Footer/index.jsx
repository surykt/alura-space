import React from "react";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="icons-list">
        <li className="icon-item">
          <a href="/">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={instagram} alt="" />
          </a>
        </li>
      </ul>
      <p>Desenvolvido por Carlos Alan</p>
    </footer>
  );
}
