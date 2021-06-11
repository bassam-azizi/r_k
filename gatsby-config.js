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
    url: "604fdd9339a43c0008bea43e--jolly-mestorf-4c47b5.netlify.app",
    emissionUrl: "https://604fdd9339a43c0008bea43e--jolly-mestorf-4c47b5.netlify.app/emission",
    blogUrl: "https://604fdd9339a43c0008bea43e--jolly-mestorf-4c47b5.netlify.app/blog"
  },
  
  plugins: [
  /*{
        resolve: `gatsby-plugin-loadable-components-ssr`,
        options: {
            // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
            // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
            useHydrate: true,
        },
    },*/
  `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `fr`, `ar`],
        // language file path
        defaultLanguage: `fr`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
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
        // contentTypes must be lowercase and in singular
        collectionTypes: [
            {   
              name: `blogpost`,
              api: { qs: { _locale: `all` } }
            },
            {
              name: `schedule`,
              api: { qs: { _locale: `all` } }
            },
            {
              name: `episode`,
              api: { qs: { _locale: `all` } }
            },
        ],
        queryLimit: 5000,
      },
    },    
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true
      }
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
