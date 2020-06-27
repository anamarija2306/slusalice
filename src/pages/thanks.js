import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const ThanksPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Hvala na upitu!</title>
        <meta name="description" content="Hvala" />
      </Helmet>
      Hvala na Vašem upitu! Javit ćemo Vam se uskoro :{")"}
    </Layout>
  );
};
export default ThanksPage;
