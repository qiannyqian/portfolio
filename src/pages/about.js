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
        Having graduated with a degree in Psychology, HR seemed like the best
        route, and so for my first job I started with a stint in recruiting.
        <br></br>
        <br></br>I soon got bitten by the startup bug, and joined a startup to
        help them with marketing initiatives, including digital marketing.
        <br></br>
        <br></br>In my time there, I discovered how to make webpages and
        websites, so I then transitioned to front end development with them.
        <br></br>
        <br></br>
        Feeling like I needed to know more about programming, I quit to do a 3
        month full time bootcamp with NEXT Academy.
        <br></br>
        <br></br>
        The following year, I moved to Singapore to pursue a career in tech, and
        have primarily been working in front-end / web development.
      </p>
      <h4>What I've Worked With</h4>
      <p>
        HTML, CSS, JS, currently learning React.
        <br></br>Familiar with PHP on Laravel and Ruby on Rails.
        <br></br>Other tools in my devbox: Git, MySQL, Sketch, Figma.
      </p>
      <h4>Community</h4>

      <p>TLDR: Techladies, JSConf.asia, JuniorDevSG, RailsGirlsMY</p>
    </div>
  </Layout>
)
