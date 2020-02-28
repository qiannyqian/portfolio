import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div
        className="blog-post-container"
        style={{
          padding: `20px 0 20px 0`,
        }}
      >
        <div className="blog-post">
          <h2>{frontmatter.title}</h2>
          <h3>{frontmatter.date}</h3>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <div>
          <br></br>
          <Link
            to="/blog/"
            style={{
              fontSize: `15px`,
            }}
          >
            <FaArrowLeft /> Back to all blog posts
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
