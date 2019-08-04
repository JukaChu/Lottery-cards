import React from "react";
import "./Footer.css";
import { Container } from "../Container/Container";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";

export function Footer() {
  let links = [
    "http://google.com",
    "http://yandex.ru",
    "http://bing.com",
    "http://pikabu.ru",
    "http://reddit.com",
    "http://stackoverflow.com",
    "http://developer.mozilla.org",
    "http://learn.javascript.ru",
    "http://youtube.com"
  ];
  return (
    <footer>
      <Container>
        <div className="footer">
          <ul className="footer__links">
            {links.map((link, key) => {
              let spliced = link.slice(7);
              return (
                <li>
                  <a href={link} key={key} className="footer__link">
                    {spliced}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="footer__network">
            <li>
              <a className="footer__network-link" href="https://twitter.com">
                <img src={twitter} alt="foot" />
              </a>
            </li>
            <li>
              <a className="footer__network-link" href="https://facebook.com">
                <img src={facebook} alt="foot" />
              </a>
            </li>
            <li>
              <a className="footer__network-link" href="https://instagram.com">
                <img src={instagram} alt="foot" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
