import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"

const SlusPage = ({
  // data: {
  //   content
  // },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Hardkodirani title</title>
      </Helmet>
      <HeroHeader/>
      <h2>Ovo su slusalice</h2>
      <p>
        {/* {slus.content} */}
        haha
      </p>
    </Layout>
  )
}

export default SlusPage

// export const pageQuery = graphql`
//   query SlusPageQuery {
//     pages{
//       slus{
//         content
//       }
//     }
//   }
// `
