import {API,graphqlOperation} from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import config from '../aws-exports';

API.configure(config);

export async function createUser(email,name){
    const userinfo = {
      username:email,
      name,
      email,
      password: 'Password1!',
      phone_number : '+12345678'
    }
    console.log(userinfo)
    const newUser = await API.graphql(graphqlOperation(mutations.createUser,{input:userinfo}));
    return newUser;
}
