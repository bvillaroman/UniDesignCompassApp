import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from '../graphql/subscriptions';
// import { buildSubscription } from ""
import config from '../aws-exports';
API.configure(config);

export const updateProjectsSub = () => API.graphql(graphqlOperation(subscriptions.onCreateCompass))

// export const updateInteractionSub = async () => {
//   const subscription = await API.graphql(graphqlOperation(subscriptions.onUpdateInteraction))

//   return subscription
// }

// export const createInteractionSub = async () => {
//   const subscription = await API.graphql(graphqlOperation(subscriptions.onCreateInteraction))
//     .subscribe({
//       next: (interactionData) => console.log(interactionData)
//     })
//   return subscription
// }

// export const updateInteractionSubTest = () => API.graphql(graphqlOperation(subscriptions.onUpdateInteraction))

export const updateInteractionSub = () => {
  const owner = localStorage.getItem("authuser");
  console.log(owner);
  const subscription = API.graphql({ query: subscriptions.onUpdateInteraction, variables: { owner: owner } })

  return subscription
}