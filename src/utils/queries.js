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

