import React from "react"
import { graphql } from "gatsby"
import { SpeechBubble } from "react-kawaii"

import BlogLink from "../components/bloglink"
import Layout from "../components/layout"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Blog = edges
    // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <h1>All Blog Posts here!</h1>
      <SpeechBubble size={220} mood="shocked" color="#83D1FB" />
      <br></br>
      {Blog}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`
