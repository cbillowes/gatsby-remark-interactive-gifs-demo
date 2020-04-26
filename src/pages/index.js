import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import path from "path"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gifs = ({ edges }) => {
  return edges.map(edge => {
    const gif = edge.node
    const filename = path.basename(gif.relativePath)
    return (
      <span className="graphql-preview">
        <span className="path">{filename}</span>
        <img alt={filename} src={`data:image/gif;base64, ${gif.base64}`} />
      </span>
    )
  })
}

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allInteractiveGif {
          edges {
            node {
              relativePath
              base64
            }
          }
        }
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
  const edges = data.allInteractiveGif.edges

  return (
    <Layout>
      <SEO
        title="Embed interactive gifs into Gatsby"
        description="A Gatsby plugin to add interactive animated gifs to markdown files."
      />
      <div
        className="html"
        dangerouslySetInnerHTML={{ __html: html }}>
      </div>
      <div className="second-wind">
        <Gifs edges={edges} />
        <div className="reading">
          <h1>It's all about the Gifs!</h1>
        </div>
      </div>
    </Layout>
  )
}
