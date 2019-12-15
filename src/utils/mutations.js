import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import config from '../aws-exports';

API.configure(config);

export async function createCompass(name_of_compass, description_of_compass,compassType,admins,readers) {
  const compassInfo = {
    name_of_compass,
    description_of_compass,
    compassType,
    admins,
    readers
  }
  const newCompass = await API.graphql(graphqlOperation(mutations.createCompass, { input: compassInfo }));
  return newCompass;
}

export async function createUser(email,first_name,last_name) {
  const userInfo = {
    first_name,
    last_name,
    email
  }
  const newUser = await API.graphql(graphqlOperation(mutations.createUser, { input: userInfo }));
  return newUser;
}

export async function createSession(name_of_session, description_of_session, compassId) {
  const sessionInfo = {
    name_of_session,
    description_of_session,
    sessionCompassId: compassId
  }

  const newSession = await API.graphql(graphqlOperation(mutations.createSession, { input: sessionInfo }));
  return newSession;
}

export async function createStep(name_of_step, description_of_step, color, compassId) {
  const stepInfo = {
    name_of_step,
    description_of_step,
    stepCompassId: compassId,
    color
  }
  const newStep = await API.graphql(graphqlOperation(mutations.createStep, { input: stepInfo }));
  return newStep
}

export async function startInteraction(sessionId, stepId) {
  const interactionInfo = {
    log_content: " ",
    interactionSessionId: sessionId,
    interactionStepId: stepId,
    duration: 0,
    comments: " "
  }

  const newInteraction = await API.graphql(graphqlOperation(mutations.createInteraction, { input: interactionInfo }));
  return newInteraction
}

export async function updateCompass(id, name_of_compass, description_of_compass) {
  const compassInfo = {
    id,
    name_of_compass,
    description_of_compass,
  }
  const updatedCompass = await API.graphql(graphqlOperation(mutations.updateCompass, { input: compassInfo }));
  return updatedCompass;
}

export async function updateSession(id, name_of_session, description_of_session) {
  const sessionInfo = {
    id,
    name_of_session,
    description_of_session,
  }
  const updatedSession = await API.graphql(graphqlOperation(mutations.updateSession, { input: sessionInfo }));
  return updatedSession;
}

export async function updateStep(id, name_of_step, description_of_step) {
  const stepInfo = {
    id,
    name_of_step,
    description_of_step,
  }
  const updatedStep = await API.graphql(graphqlOperation(mutations.updateStep, { input: stepInfo }));
  return updatedStep;
}

export async function updateInteraction(interaction) {

  const updatedIntercation = await API.graphql(graphqlOperation(mutations.updateInteraction, { input: interaction }));
  return updatedIntercation
}
export async function uploadAttachment(attachment) {
  const uploadAttachment = await API.graphql(graphqlOperation(mutations.createAttachment, { input: attachment }));
  return uploadAttachment
}

export async function deleteCompass(id) {
  const compassInfo = {
    id
  }
  const deletedCompass = await API.graphql(graphqlOperation(mutations.deleteCompass, { input: compassInfo }));
  return deletedCompass;
}

export async function deleteSession(id) {
  const SessionInfo = {
    id
  }
  const deletedSession = await API.graphql(graphqlOperation(mutations.deleteSession, { input: SessionInfo }));
  return deletedSession;
}

export async function deleteInteraction(id) {
  const InteractionInfo = {
    id
  }
  const deletedInteraction = await API.graphql(graphqlOperation(mutations.deleteInteraction, { input: InteractionInfo }));
  return deletedInteraction;
}

export async function deleteStep(id) {
  const StepInfo = {
    id
  }
  const deletedStep = await API.graphql(graphqlOperation(mutations.deleteStep, { input: StepInfo }));
  return deletedStep;
}