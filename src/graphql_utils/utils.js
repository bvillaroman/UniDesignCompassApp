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
    const userinfo = await getUser(user.data.listUsers.items[0].id);
    return userinfo;
}

export async function getLogs(log_id){
    const Log= await API.graphql(graphqlOperation(queries.getLog,{id:log_id}));
    return Log;
}

export async function getProcess(process_id){
    const Process = await API.graphql(graphqlOperation(queries.getProcess,{id:process_id}));
    return Process;
}
export async function getPhase(phase_id){
    const Phase = await API.graphql(graphqlOperation(queries.getPhase,{id:phase_id}));
    return Phase;
}
export async function createUser(username,first_name,last_name,email,phone,password_hash){
    const userinfo ={
        username:username,
        first_name:first_name,
        last_name:last_name,
        email:email,
        password_hash:password_hash,
        phone_number:phone,
    }
    const newUser = await API.graphql(graphqlOperation(mutations.createUser,{input:userinfo}));
    return newUser;
}
export async function createLogs(PhaseId,timestamp,text){
    const loginfo={
        timestamp,
        text,
        logPhaseId:PhaseId,

    }
    const newLog = await API.graphql(graphqlOperation(mutations.createLog,{input:loginfo}));
    return newLog;
}
async function createProcess(id,name,date_start,date_end){
    const processInfo={
        user_id:id,
        name:name,
        date_start,
        date_end,
        processUserId:id
    }
    const newProcess = await API.graphql(graphqlOperation(mutations.createProcess,{input:processInfo}));
    return newProcess;
}
async function createPhase(processId,title,description){
    const phaseInfo={
        title:title,
        description:description,
        duration:"0000000",
        phaseProcessId: processId
    }
    const newPhase = await API.graphql(graphqlOperation(mutations.createPhase,{input:phaseInfo}));
    return newPhase;
}
export async function updateUser(user_info){ //When Updating Users Info you need to make sure the attributes are correct. List: id,username,first_name,last_name,email,phone_number,password_hash
    const updatedUser= await API.graphql(graphqlOperation(mutations.updateUser,{input:user_info}));
    return updatedUser;
}
export async function updateLogs(id,timestamp,text){
    if(text == ""){
        return null;
    }
    const loginfo={
        id:id,
        timestamp,
        text
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
export async function updatePhase(id,logs,duration,title,description){
    const phaseInfo={
        id:id,
        duration,
        title,
        description
    }
    const updatedPhase = await API.graphql(graphqlOperation(mutations.updatePhase,{input:phaseInfo}));
    return updatedPhase;
}
export async function deleteUser(id){
    const userinfo ={
        id:id
    }
    const deletedUser= await API.graphql(graphqlOperation(mutations.deleteUser,{input:userinfo}));
    return deletedUser;
}
export async function deleteProcess(id){
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
export async function deletePhase(id){
    const phaseInfo ={
        id:id
    }
    const deletedPhase = await API.graphql(graphqlOperation(mutations.deletePhase,{input:phaseInfo}));
    return deletedPhase;
}
export async function createNewCompass(user,name,phases){
    let process_info;
    await createProcess(user.id,name,"0000000","00000000").then(
        (res)=>{
            process_info=res.data.createProcess;
        },(error)=>{
            console.log(error);
        }
    )

    for(let i =0 ;i < phases.length; i++){ await createPhase(process_info.id,phases[i].title,phases[i].description);}
    return getProcess(process_info.id);
}
export async function appendNewLog(phaseId,log){
    if(log.text == ""){
        alert("Empty log text");
    }else{
    createLogs(log.timestamp,log.text).then(
        (logres)=>{
            getPhase(phaseId).then(
                (res)=>{
                    let phase_info= res.data.getPhase;
                    console.log(res);
                    console.log(logres);
                    //updatePhase(phase_info.id,phase_info.logs.push(logres.data.createLog),phase_info.duration,phase_info.title,phase_info.description);
                }
            )
        }
    )
}

export async function listCompasses(){
    const processes = await API.graphql(graphqlOperation(queries.listProcesss,{limit : 100}));
    return processes;
}
