import React, { useState } from "react";
import "./NavMenu.css";
import { Container } from "../Container/Container";

export function NavMenu() {
  const menu = ["Pizza", "Sushi", "Burgers", "Salads"];

  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="nav-menu" role="navigation">
      <Container>
        <ul className="nav-menu__types">
          {menu.map(type => {
            return (
              <li
                key={type}
                onClick={() => {
                  setActiveLink(type);
                }}
              >
                <a
                  href="#"
                  className={
                    activeLink === type
                      ? "nav-menu__type nav-menu__type--active"
                      : "nav-menu__type"
                  }
                  title={type}
                  key={type}
                >
                  {type}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
