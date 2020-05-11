import React from "react"
import { Planet } from "react-kawaii"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Projects" />
    <div>
      <h1>All Projects</h1>
      <Planet size={150} mood="happy" color="#FCCB7E" />
      <br></br>
      <h3>React</h3>
      <p>
        <a href="https://todo-list-dreamy.netlify.app/">Simple to-do app</a>
        <br></br>
        <a href="https://github.com/qiannyqian/react-todo-app">(Github)</a>
      </p>
      <p>
        <a href="https://seasons-greetings-holla.netlify.com/">
          Seasons app displaying differing UI based on detected latitude
        </a>
        <br></br>
        <a href="https://github.com/qiannyqian/react-seasons-app">(Github)</a>
      </p>
      <p>
        <a href="https://pics-app-amaze.netlify.com/">
          Image search app with Unplash API
        </a>
        <br></br>
        <a href="https://github.com/qiannyqian/react-pics-app">(Github)</a>
      </p>
      <p>
        <a href="https://videos-app-wow.netlify.com/">
          Video search and display app with YouTube API
        </a>
        <br></br>
        <a href="https://github.com/qiannyqian/react-videos-app">(Github)</a>
      </p>
    </div>
  </Layout>
)
