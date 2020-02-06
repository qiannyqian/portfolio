import React from "react"
import { Ghost } from "react-kawaii"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="About page" />
    <div>
      <h1>About Me</h1>
      <Ghost size={240} mood="happy" color="#E0E4E8" />
      <br></br>
      <p>More details about me to come here!</p>
    </div>
  </Layout>
)
