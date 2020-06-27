import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AskPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/photo-1523966211575-eb4a01e7dd51.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Pitajte logopeda</h1>
          <p>Obratite nam se s povjerenjem!</p>
        </div>
        <div>
          <form
            className="form-container"
            name="ask"
            method="POST"
            data-netlify={true}
            action="/thanks"
          >
            <div>
              <label htmlFor="w3lName">Ime</label>
              <input type="text" name="w3lName" id="w3lName" />
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender" />
            </div>
            <div>
              <label htmlFor="w3lSubject">Naslov</label>
              <input type="text" name="w3lSubject" id="w3lSubject" />
            </div>
            <div>
              <label htmlFor="w3lMessage">Poruka</label>
              <textarea name="w3lMessage" id="w3lMessage"></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              >
                Pošalji
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default AskPage;
export const pageQuery = graphql`
  query AskPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
