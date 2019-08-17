require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Universal Design Compass`,
    description: `A tool for designers to record,track and visualize their progress within their design process`,
    author: `Abraham Bruce Villaroman, Kenny Tan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "AWSAppSync",
        // This is the field under which it's accessible
        fieldName: "events",
        // URL to query from
        url: `${process.env.AWS_APPSYNC_API_URL}`,
        headers: {
            "x-api-key": `${process.env.AWS_APPSYNC_API_KEY}`
        },
        // refetchInterval: 5,
      },
    },
  ],
  pathPrefix: "/UniDesignCompassApp",
  
}
