import Amplify, {API,graphqlOperation} from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import aws_config from '../aws-exports';

Amplify.configure(aws_config);

export async function getUser(id){
    const user=  await API.graphql(graphqlOperation(queries.getUser,{id}));
    return user;
}

export async function getUserbyUsername(username){
    const filter = { username : { eq : username } }
    const user = await API.graphql(graphqlOperation(queries.listUsers,{filter}));
    return user;
}

export async function getLogs(log_id){
    const Log= await API.graphql(graphqlOperation(queries.getLog,{id:log_id}));
    return Log;
}

export async function getProcessess(process_id){
    const Process = await API.graphql(graphqlOperation(queries.getProcess,{id:process_id}));
    return Process;
}
export async function createUser(username,first_name,last_name,email,phone,password_hash){
    const userinfo ={
        username:username,
        first_name:first_name,
        last_name:last_name,
        email:email,
        password_hash:password_hash,
        phone_number:phone
    }
    const newUser = await API.graphql(graphqlOperation(mutations.createUser,{input:userinfo}));
    return newUser;
}
export async function createLogs(timestamp,phase_log_json){
    const loginfo={
        timestamp:timestamp,
        phase_log_json:phase_log_json
    }
    const newLog = await API.graphql(graphqlOperation(mutations.createLog,{input:loginfo}));
    return newLog;
}
export async function createProcess(name,timestamp){
    const processInfo={
        name:name,
        timestamp:timestamp
    }
    const newProcess = await API.graphql(graphqlOperation(mutations.createProcess,{input:processInfo}));
    return newProcess;
}
export async function updateUser(id,first_name,last_name,email,password_hash){
    const userinfo ={
        id:id,
        first_name:first_name,
        last_name:last_name,
        email:email,
        password_hash:password_hash
    }
    const updatedUser= await API.graphql(graphqlOperation(mutations.updateUser,{input:userinfo}));
    return updatedUser;
}
export async function updateLogs(id,timestamp,phase_log_json){
    const loginfo={
        id:id,
        timestamp:timestamp,
        phase_log_json:phase_log_json
    }
    const updatedLog = await API.graphql(graphqlOperation(mutations.updateLog,{input:loginfo}));
    return updatedLog;
}
export async function updateProcess(id,name,timestamp){
    const processInfo={
        id:id,
        name:name,
        timestamp:timestamp
    }
    const updatedProcess = await API.graphql(graphqlOperation(mutations.updateProcess,{input:processInfo}));
    return updatedProcess;
}
export async function deleteUser(id){
    const userinfo ={
        id:id
    }
    const deletedUser= await API.graphql(graphqlOperation(mutations.deleteUser,{input:userinfo}));
    return deletedUser;
}
export async function deleteProjects(id){
    const processInfo={
        id:id
    }
    const deletedProcess = await API.graphql(graphqlOperation(mutations.deleteProcess,{input:processInfo}));
    return deletedProcess;
}

export async function deleteLogs(id){
    const loginfo={
        id:id
    }
    const deletedLog = await API.graphql(graphqlOperation(mutations.deleteLog,{input:loginfo}));
    return deletedLog;
}

