import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import HeadphonesIcon from "./headphones";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            logo
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <HeadphonesIcon />
          {/* <img style={{width:"50px", paddingRight: "15px"}} src={data.site.siteMetadata.logo}></img> */}
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Slušalice &bull; Created with{" "}
          <span role="img" aria-label="love">
            🤍
          </span>{" "}
          by <a href="mailto:anamarija.lonza@gmail.com">Anamarija</a>
        </p>
      </footer>
    </div>
  );
};
