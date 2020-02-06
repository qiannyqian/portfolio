import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SpeechBubble } from "react-kawaii"

import Layout from "../components/layout"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            html
            excerpt
            frontmatter {
              date
              title
              layout
            }
          }
        }
      }
    }
  `)
  console.log(data)

  const unwrapData = data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <h1>All Posts</h1>
      <br></br>
      <SpeechBubble size={220} mood="shocked" color="#83D1FB" />
      {/* <p>{unwrapData.frontmatter.title}</p> */}
      <div
        dangerouslySetInnerHTML={{ __html: unwrapData.frontmatter.title }}
      ></div>

      <br></br>
    </Layout>
  )
}

export default Posts
