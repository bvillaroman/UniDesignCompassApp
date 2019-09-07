import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import config from '../aws-exports';

API.configure(config);

// export async function createUser(email, name) {
//   const userinfo = {
//     username: email,
//     name,
//     email,
//     password: 'Password1!',
//     phone_number: '+12345678'
//   }
//   //console.log(userinfo)
//   const newUser = await API.graphql(graphqlOperation(mutations.createUser, { input: userinfo }));
//   return newUser;
// }

export async function createCompass(name_of_compass, description_of_compass) {
  const compassInfo = {
    name_of_compass,
    description_of_compass,
    date_start: 'Monday',
    date_end: 'Friday'
  }
  console.log(compassInfo)
  console.log(config)
  const newCompass = await API.graphql(graphqlOperation(mutations.createCompass, { input: compassInfo }));
  return newCompass;
}

export async function createSession(name_of_session, description_of_session, compassId) {
  const sessionInfo = {
    name_of_session,
    description_of_session,
    sessionCompassId: compassId,
    session_start_time: 1,
    session_end_time: 5
  }
  console.log(sessionInfo)
  console.log(config)
  const newSession = await API.graphql(graphqlOperation(mutations.createSession, { input: sessionInfo }));
  return newSession;
}

export async function createStep(name_of_step, description_of_step, compassId) {
  const stepInfo = {
    name_of_step,
    description_of_step,
    stepCompassId: compassId,
    step_start_time: 12,
    step_end_time: 18
  }

  console.log(stepInfo)
  console.log(config)
  const newStep = await API.graphql(graphqlOperation(mutations.createStep, { input: stepInfo }));
  return newStep
}

export async function createInteraction(log_content, sessionId, stepId) {
  const interactionInfo = {
    log_content,
    interactionSessionId: sessionId,
    interactionStepId: stepId,
    interaction_start_time: 19,
    interaction_start_end: 23
  }

  console.log(interactionInfo)
  console.log(config)
  const newInteraction = await API.graphql(graphqlOperation(mutations.createInteraction, { input: interactionInfo }));
  return newInteraction
}

