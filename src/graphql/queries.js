// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      first_name
      last_name
      email
      password_hash
      projects {
        id
        name
        timestamp
      }
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
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
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLog = `query GetLog($id: ID!) {
  getLog(id: $id) {
    id
    timestamp
    phase_log_json
    attachments
  }
}
`;
export const listLogs = `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
  listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      timestamp
      phase_log_json
      attachments
    }
    nextToken
  }
}
`;
export const listProcesses = `query ListProcesses {
  listProcesses {
    id
    title
    phase_logs {
      id
      title
      description
      log_entry {
        id
        text
        timestamp
      }
      duration
    }
    user {
      id
      first_name
      last_name
      email
      password_hash
      projects {
        id
        name
        timestamp
      }
    }
    start_time
    end_time
  }
}
`;
