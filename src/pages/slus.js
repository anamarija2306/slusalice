import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
  data: {
    slus
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Hardkodirani title</title>
      </Helmet>
      <HeroHeader/>
      <h2>Ovo su slusalice</h2>
      <p>
        {slus.content}
      </p>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query indexPageQuery {
    slus {
      content
    }
  }
`
