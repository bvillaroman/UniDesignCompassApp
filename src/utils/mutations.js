import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import config from '../aws-exports';

API.configure(config);

export async function createUser(email, name) {
  const userinfo = {
    username: email,
    name,
    email,
    password: 'Password1!',
    phone_number: '+12345678'
  }
  //console.log(userinfo)
  const newUser = await API.graphql(graphqlOperation(mutations.createUser, { input: userinfo }));
  return newUser;
}

export async function createCompass(title, description_of_compass, userId) {
  const compassInfo = {
    title,
    description_of_compass,
    compassUserId: userId,
    date_start: 'Monday',
    date_end: 'Friday'
  }
  console.log(compassInfo)
  const newCompass = await API.graphql(graphqlOperation(mutations.createCompass, { input: compassInfo }));
  return newCompass;
}

export async function createSession(name_of_session, description_of_session, session_start_time, session_end_time, compassId) {
  const sessionInfo = {
    name_of_session,
    description_of_session,
    session_start_time,
    session_end_time,
    sessionUserId: compassId
  }
  console.log(sessionInfo)
  const newSession = await API.graphql(graphqlOperation(mutations.createSession, { input: sessionInfo }));
  return newSession;
}

