import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import config from '../aws-exports';

API.configure(config);

export async function createCompass(name_of_compass, description_of_compass, compassType, compassOwnerId, compassScribeId) {
  const compassInfo = {
    name_of_compass,
    description_of_compass,
    compassType,
    compassOwnerId,
    compassScribeId
  }
  const newCompass = await API.graphql(graphqlOperation(mutations.createCompass, { input: compassInfo }));
  return newCompass;
}

export async function createUser(id, email, first_name, last_name) {
  const userInfo = {
    id,
    first_name,
    last_name,
    email
  }
  return API.graphql(graphqlOperation(mutations.createUser, { input: userInfo }));
}

export async function createTeacherCompasses(compass_id, user_id, first_name, last_name, email) {
  const teacherCompassInfo = {
    teacherCompassesCompassId: compass_id,
    teacherCompassesUserId: user_id,
    email,
    last_name,
    first_name
  }

  return API.graphql(graphqlOperation(mutations.createTeacherCompasses, { input: teacherCompassInfo }));
}

export async function createMemberCompasses(compass_id, user_id, first_name, last_name, email) {
  const memberCompassInfo = {
    memberCompassesCompassId: compass_id,
    memberCompassesUserId: user_id,
    email,
    last_name,
    first_name
  }

  return API.graphql(graphqlOperation(mutations.createMemberCompasses, { input: memberCompassInfo }));
}

export async function createReaderCompasses(compass_id, user_id, first_name, last_name, email) {
  const readerCompassInfo = {
    readerCompassesCompassId: compass_id,
    readerCompassesUserId: user_id,
    email,
    last_name,
    first_name
  }

  return API.graphql(graphqlOperation(mutations.createReaderCompasses, { input: readerCompassInfo }));
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

export async function createComment(content, sessionId, userID) {
  const commentInfo = {
    content,
    commentSessionId: sessionId,
    commentCommenterId: userID,
  }

  const newComment = await API.graphql(graphqlOperation(mutations.createComment, { input: commentInfo }));
  return newComment;
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

export async function updateUser(id, first_name, last_name) {
  const userInfo = {
    id,
    first_name,
    last_name,
  }
  const updatedUser = await API.graphql(graphqlOperation(mutations.updateUser, { input: userInfo }));
  return updatedUser;
}

export async function updateCompass(id, name_of_compass, description_of_compass, compassScribeId) {
  const compassInfo = {
    id,
    name_of_compass,
    description_of_compass,
    compassScribeId
  }
  const updatedCompass = await API.graphql(graphqlOperation(mutations.updateCompass, { input: compassInfo }));
  return updatedCompass;
}

export async function updateCompassPermissions(id, scribe) {
  const compassInfo = {
    id,
    scribe,
  }
  const updatedCompass = await API.graphql(graphqlOperation(mutations.updateCompass, { input: compassInfo }));
  return updatedCompass;
}

export async function updateSession(id, name_of_session, description_of_session, comments) {
  const sessionInfo = {
    id,
    name_of_session,
    description_of_session,
    comments
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

export async function updateComment(comment) {

  const updatedComment = await API.graphql(graphqlOperation(mutations.createComment, { input: comment }));
  return updatedComment
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