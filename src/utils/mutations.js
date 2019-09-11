import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import config from '../aws-exports';

API.configure(config);

export async function createUser(ID, email, name_of_user) {
  const userInfo = {
    ID,
    name_of_user,
    email
  }
  const newUser = await API.graphql(graphqlOperation(mutations.createUser, { input: userInfo }));
  return newUser;
}

export async function createCompass(name_of_compass, description_of_compass,steps) {
  const compassInfo = {
    name_of_compass,
    description_of_compass,
    date_start: '0',
    date_end: '0',
  }
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

  const newSession = await API.graphql(graphqlOperation(mutations.createSession, { input: sessionInfo }));
  return newSession;
}

export async function createStep(name_of_step, description_of_step, compassId) {
  const stepInfo = {
    name_of_step,
    description_of_step,
    stepCompassId: compassId,
    step_start_time: 0,
    step_end_time: 0
  }
  const newStep = await API.graphql(graphqlOperation(mutations.createStep, { input: stepInfo }));
  return newStep
}

export async function startInteraction(sessionId, stepId) {
  const interactionInfo = {
    log_content: " ",
    interactionSessionId: sessionId,
    interactionStepId: stepId,
    interaction_start_time: 0,
    interaction_start_end: 0
  }
  
  const newInteraction = await API.graphql(graphqlOperation(mutations.createInteraction, { input: interactionInfo }));
  return newInteraction
}

export async function updateInteraction(interaction) {

  const updatedIntercation = await API.graphql(graphqlOperation(mutations.updateInteraction, { input: interaction }));
  return updatedIntercation
}


