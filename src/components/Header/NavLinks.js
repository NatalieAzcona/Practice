import { createElement } from "react";
import "./NavLinks.scss";

export const NavLinks = () => {
  const nav = document.createElement("nav");
  //   const aAbout = document.createElement("a");
  //   const aShop = document.createElement("a");
  //   const aJournal = document.createElement("a");
  //   const aProjects = document.createElement("a");
  //   const aContact = document.createElement("a");
  nav.innerHTML = (
    <ul>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Shop</a>
      </li>
      <li>
        <a href="/">Journal</a>
      </li>
      <li>
        <a href="/">Projects</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
  //   nav.append(aAbout, aShop, aJournal, aProjects, aContact);
};
