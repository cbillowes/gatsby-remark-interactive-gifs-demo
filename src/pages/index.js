import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import path from "path"
import Layout from "../components/layout"

const Gifs = ({ edges }) => {
  return edges.map(edge => {
    const gif = edge.node
    const filename = path.basename(gif.relativePath)
    return (
      <span className="graphql-preview" key={filename}>
        <span className="path">{filename}</span>
        <img alt={filename} src={`data:image/gif;base64, ${gif.base64}`} />
      </span>
    )
  })
}

const IndexPage = () => {
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
      <div className="html" dangerouslySetInnerHTML={{ __html: html }}></div>
      <div className="second-wind">
        <Gifs edges={edges} />
        <div className="reading">
          <h1>It's all about the Gifs!</h1>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

const title = "Embed interactive gifs into Gatsby"
const description =
  "A Gatsby plugin to add interactive animated gifs to markdown files."
const image = require("../images/animated-gifs/nyancat.gif").default

export const Head = () => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content={image} />
    <meta name="og:type" content="website" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta property="twitter:image" content={image} />
    <meta name="twitter:creator" content="@cbillowes" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </>
)
