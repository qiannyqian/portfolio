import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
      <p>Index of all posts</p>
      {/* <p>{unwrapData.frontmatter.title}</p> */}
      <div dangerouslySetInnerHTML={{ __html: unwrapData.html }}></div>

      <Link to="/about">Go to about page</Link>
      <Link to="/page-2/">Go to page 2</Link>
      <br></br>
    </Layout>
  )
}

export default Posts
