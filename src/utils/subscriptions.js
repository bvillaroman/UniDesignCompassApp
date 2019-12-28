import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from '../graphql/subscriptions';
// import { buildSubscription } from ""
import config from '../aws-exports';
API.configure(config);

export const updateProjectsSub = () => API.graphql(graphqlOperation(subscriptions.onCreateCompass))

export const createAttachmentSub = () => API.graphql(graphqlOperation(subscriptions.onCreateAttachment))

export const createSessionSub = () => API.graphql(graphqlOperation(subscriptions.onCreateSession))

export const createCommentSub = () => API.graphql(graphqlOperation(subscriptions.onCreateComment))

export const updateInteractionSub = () => {
  const owner = localStorage.getItem("authuser");
  const subscription = API.graphql({ query: subscriptions.onUpdateInteraction, variables: { owner: owner } })

  return subscription
}

// export const createInteractionSub = async () => {
//   const subscription = await API.graphql( graphqlOperation(subscriptions.onCreateInteraction))
//     .subscribe({
//       next: (interactionData) => console.log(interactionData)
//     })
//   return subscription
// }