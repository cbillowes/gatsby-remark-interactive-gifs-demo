import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              html
            }
          }
        }
      }
    `
  )

  const html = data.allMarkdownRemark.edges[0].node.html
  return (
    <Layout>
      <div
        className="html"
        dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    </Layout>
  )
}
