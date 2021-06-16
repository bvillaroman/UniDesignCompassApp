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
    `gatsby-plugin-styled-components`,
  ],
  pathPrefix: "/UniDesignCompassApp",
  
}
