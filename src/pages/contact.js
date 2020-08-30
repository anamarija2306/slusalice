import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
      </Helmet>
      <div className="two-grids">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8225488529833!2d15.99376965150425!3d45.77474642058571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d60a2f776907%3A0x9caa6ecf3b61251!2sBalotin%20prilaz%204%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1598817871679!5m2!1sen!2shr"
            width="100%"
            height={650}
            frameborder={0}
            style={{ border: "0", borderRadius: "9px", margin: "auto" }}
            tabindex={0}
          ></iframe>
        </div>
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/photo-1523966211575-eb4a01e7dd51.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">
            Adresa: Balotin prilaz 4, 10 000 Zagreb
          </h1>
          <h1 className="post-title">Kontakt: +385 95 1969 511</h1>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
