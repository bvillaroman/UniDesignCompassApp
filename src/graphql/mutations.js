// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    first_name
    last_name
    email
    password_hash
    projects {
      id
      name
      timestamp
      logs {
        id
        timestamp
        phase_log_json
        attachments
      }
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    first_name
    last_name
    email
    password_hash
    projects {
      id
      name
      timestamp
      logs {
        id
        timestamp
        phase_log_json
        attachments
      }
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    first_name
    last_name
    email
    password_hash
    projects {
      id
      name
      timestamp
      logs {
        id
        timestamp
        phase_log_json
        attachments
      }
    }
  }
}
`;
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    name
    timestamp
    logs {
      id
      timestamp
      phase_log_json
      attachments
    }
  }
}
`;
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    id
    name
    timestamp
    logs {
      id
      timestamp
      phase_log_json
      attachments
    }
  }
}
`;
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    id
    name
    timestamp
    logs {
      id
      timestamp
      phase_log_json
      attachments
    }
  }
}
`;
export const createLog = `mutation CreateLog($input: CreateLogInput!) {
  createLog(input: $input) {
    id
    timestamp
    phase_log_json
    attachments
  }
}
`;
export const updateLog = `mutation UpdateLog($input: UpdateLogInput!) {
  updateLog(input: $input) {
    id
    timestamp
    phase_log_json
    attachments
  }
}
`;
export const deleteLog = `mutation DeleteLog($input: DeleteLogInput!) {
  deleteLog(input: $input) {
    id
    timestamp
    phase_log_json
    attachments
  }
}
`;
