import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
  <nav className="navigation">
    <Link to="/">Početna</Link>
    <Link to="/services">Usluge</Link>
    <Link to="/workshops">Radionice</Link>
    <Link to="/ask">Pitajte logopeda</Link>
    <Link to="/contact">Kontakt</Link>
    <ThemeChanger />
  </nav>
);
