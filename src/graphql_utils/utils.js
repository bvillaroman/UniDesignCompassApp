import Amplify, {API,graphqlOperation} from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import aws_config from '../aws-exports';

Amplify.configure(aws_config);

export async function getUser(id){
    const user=  await API.graphql(graphqlOperation(queries.getUser,{id}));
    return user;
}

export async function getLogs(log_id){
    const Log= await API.graphql(graphqlOperation(queries.getLog,{id:log_id}));
    return Log;
}

export async function getProjects(project_id){
    const Project = await API.graphql(graphqlOperation(queries.getProject,{id:project_id}));
    return Project;
}
export async function createUser(first_name,last_name,email,password_hash){
    const userinfo ={
        first_name:first_name,
        last_name:last_name,
        email:email,
        password_hash:password_hash
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
export async function createProjects(name,timestamp){
    const projectInfo={
        name:name,
        timestamp:timestamp
    }
    const newProject = await API.graphql(graphqlOperation(mutations.createProject,{input:projectInfo}));
    return newProject;
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
export async function updateProjects(id,name,timestamp){
    const projectInfo={
        id:id,
        name:name,
        timestamp:timestamp
    }
    const updatedProject = await API.graphql(graphqlOperation(mutations.updateProject,{input:projectInfo}));
    return updatedProject;
}
export async function deleteUser(id){
    const userinfo ={
        id:id
    }
    const deletedUser= await API.graphql(graphqlOperation(mutations.deleteUser,{input:userinfo}));
    return deletedUser;
}
export async function deleteProjects(id){
    const projectInfo={
        id:id
    }
    const deletedProject = await API.graphql(graphqlOperation(mutations.deleteProject,{input:projectInfo}));
    return deletedProject;
}

export async function deleteLogs(id){
    const loginfo={
        id:id
    }
    const deletedLog = await API.graphql(graphqlOperation(mutations.deleteLog,{input:loginfo}));
    return deletedLog;
}

