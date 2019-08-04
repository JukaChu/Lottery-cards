import React from "react";
import { Container } from "../Container/Container";
import { UserPanel } from "../UserPanel/UserPanel";
import "./Header.css";
import logo from "./logo.svg";
import { ChooseCity } from "../ChooseCity/ChooseCity";

export function Header() {
  return (
    <header>
      <Container>
        <div className="header">
          <a href="/" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <ChooseCity />
          <UserPanel />
        </div>
      </Container>
    </header>
  );
}
