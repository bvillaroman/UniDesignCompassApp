import Amplify, {API,graphqlOperation} from 'aws-amplify';
import * as queries from '../graphql/queries';
import aws_config from '../aws-exports';

Amplify.configure(aws_config);

export async function getUser(id){
    const user=  await API.graphql(graphqlOperation(queries.getUser,{id}));
    return user;
}

export async function getLogs(project_id){
    const Logs= await API.graphql(graphqlOperation(queries.getLog,{id:project_id}));
    return Logs;
}


