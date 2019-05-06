/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages = async ({page,actions, graphql}) => {
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
//       path: `Compass/${id}`,
//       component: require.resolve(`./src/pages/Compass.js`),
//       context: { id: id },
//     })
//   })
// }