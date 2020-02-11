import React from "react"
import { Cat } from "react-kawaii"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <Cat size={320} mood="blissful" color="#596881"></Cat>

    <p>
      Now I'm going to build something great{" "}
      <span role="img" aria-label="smiley emoji">
        😉
      </span>
    </p>
  </Layout>
)

export default IndexPage
