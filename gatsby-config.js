/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: 'Radio Khemir',
    author: 'Bassem Azizi',
    url: "www.radiokhemir.tn",
    emissionUrl: "https://604fdd9339a43c0008bea43e--jolly-mestorf-4c47b5.netlify.app/emission"
  },
  
  plugins: [
  `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-podcast-rss-feed`,
      options: {
        feedURL: `https://feed.podbean.com/radiokhemir/feed.xml`,
        id: 'guid',
      },
  },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://radiokhemir.herokuapp.com",
        contentTypes: [
          "blogpost",
          "categories",
          "schedule"
        ],
        queryLimit: 5000,
      },
    },    
    // {
    //   resolve: `gatsby-source-anchor`,
    //   options:{
    //     rss: 'https://anchor.fm/s/46ce3a74/podcast/rss'
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
          `Roboto`,
          'Rhodium Libre'
        ],
        display: 'swap'
      }
    },
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      }
    },
  ],
}
