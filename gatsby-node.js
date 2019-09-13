/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages = async ({actions, graphql}) => {
//   const { data } = await graphql(`
//     query {
//       events {
//         listProcesss (limit: 1000){
//           items {
//             id
//           }
//         }
//       }
//     }
//   `)
//   data.events.listProcesss.items.forEach(process => {
//     const id = process.id
//     actions.createPage({
//       path: `Process/${id}`,
//       component: require.resolve(`./src/pages/Process.js`),
//       context: { id: id },
//     })
//   })
// }

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     // Query for markdown nodes to use in creating pages.
//     resolve(
//       graphql(
//         `
//         query {
//           events {
//             listProcesss (limit: 1000){
//               items {
//                 id
//               }
//             }
//           }
//         }
//         `
//       ).then(result => {
//         if (result.errors) {
//           reject(result.errors)
//         }

//         result.data.events.listProcesss.items.forEach(process => {
//           const id = process.id
//           createPage({
//             path: `Process/${id}`,
//             component: require.resolve(`./src/pages/Process.js`),
//             context: { id: id },
//           })
//         })
//       })
//     )
//   })
// }
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/Process/)) {
//     page.matchPath = "/Process/*"
//     // Update the page.
//     createPage(page)
//   }
// }