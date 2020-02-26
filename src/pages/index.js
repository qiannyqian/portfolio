import React from "react"
import { Cat } from "react-kawaii"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cat size={240} mood="blissful" color="#596881"></Cat>
    <h3>Hi, it's Qian here!</h3>
    <p>I'm a frontend developer who has dabbled in full-stack before.</p>
    <p>
      While I primarily use HTML, CSS, and JS, right now I'm dabbling in React.
      Previous tech stacks include Ruby on Rails and PHP on Laravel.
    </p>
    <p>
      I'm currently open to opportunities, so if you're looking for a CV, you
      can <a href="mailto:liang.huiqian@gmail.com">email me</a> for it!
    </p>
  </Layout>
)

export default IndexPage
