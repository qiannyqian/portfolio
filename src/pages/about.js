import React from "react"
import { Ghost } from "react-kawaii"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="About page" />
    <div>
      <h1>About Me</h1>
      <Ghost size={150} mood="happy" color="#E0E4E8" />
      <br></br>
      <h4>Background</h4>
      <p>
        Graduated with a BsC in Psychology from the University of Sheffield
        (2014), and completed NEXT Academy's coding bootcamp in 2017.
      </p>

      <h4>Career</h4>
      <p>2 years as a front-end developer</p>
      <p>Previously: recruiter -> marketing -> front-end dev!</p>

      <h4>Community</h4>
      <p>TLDR: Techladies, JSConf.asia, JuniorDevSG, RailsGirlsMY</p>
    </div>
  </Layout>
)
