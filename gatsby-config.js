module.exports = {
  siteMetadata: {
    title: `gatsby-remark-interactive-gifs demo website`,
    description: `A demo for adding interactive animated gifs to markdown files and querable in GraphQL.`,
    author: `@cbillowes`,
    siteUrl: `https://gifs.curiousprogrammer.dev`,
    url: `https://gifs.curiousprogrammer.dev`,
    image: `gifs/nyancat.gif`,
    twitterUsername: `@cbillowes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142100321-2",
        head: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-remark-interactive-gifs demo website`,
        short_name: `gatsby-remark-interactive-gifs`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/src/images/animated-gifs`,
              dest: `${__dirname}/public/static/gifs`,
              play: `${__dirname}/src/images/play.gif`,
              placeholder: `${__dirname}/src/images/placeholder.gif`,
              loading: `${__dirname}/src/images/loading.gif`,
              relativePath: `/static/gifs`
            },
          },
        ]
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
