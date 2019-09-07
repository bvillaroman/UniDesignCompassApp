import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../graphql/queries';
import config from '../aws-exports';

API.configure(config);

export async function getUser(id) {
  const user = await API.graphql(graphqlOperation(queries.getUser, { id }));
  console.log(user)

  return new Promise(function (resolve, reject) {
    if (user.data.getUser === null) {
      reject("No User Found");
    } else {
      resolve(user);
      console.log("It worked from queries util")
    }
  })
}

export async function getCompass(compass_id) {
  const compass = await API.graphql(graphqlOperation(queries.getCompass, { id: compass_id }));
  console.log(compass)

  return new Promise(function (resolve, reject) {
    if (compass.data.getCompass === null) {
      reject("No User Found");
    } else {
      resolve(compass);
      console.log("It worked from queries util")
    }
  })
}

export async function getSession(session_id) {
  const session = await API.graphql(graphqlOperation(queries.getSession, { id: session_id }));
  console.log(session)

  return new Promise(function (resolve, reject) {
    if (session.data.getSession === null) {
      reject("No User Found");
    } else {
      resolve(session);
      console.log("It worked from queries util")
    }
  })
}

export async function getStep(step_id) {
  const step = await API.graphql(graphqlOperation(queries.getStep, { id: step_id }));
  console.log(step)

  return new Promise(function (resolve, reject) {
    if (step.data.getStep === null) {
      reject("No User Found");
    } else {
      resolve(step);
      console.log("It worked from queries util")
    }
  })
}

export async function getInteraction(interaction_id) {
  const interaction = await API.graphql(graphqlOperation(queries.getInteraction, { id: interaction_id }));
  console.log(interaction)

  return new Promise(function (resolve, reject) {
    if (interaction.data.getInteraction === null) {
      reject("No User Found");
    } else {
      resolve(interaction);
      console.log("It worked from queries util")
    }
  })
}
