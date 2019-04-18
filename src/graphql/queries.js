// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    first_name
    last_name
    email
    password_hash
    phone_number
    processes {
      id
      phase_ids {
        id
        duration
        title
        description
      }
      user_id {
        id
        username
        first_name
        last_name
        email
        password_hash
        phone_number
      }
      name
      date_start
      date_end
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
      username
      first_name
      last_name
      email
      password_hash
      phone_number
      processes {
        id
        name
        date_start
        date_end
      }
    }
    nextToken
  }
}
`;
export const getProcess = `query GetProcess($id: ID!) {
  getProcess(id: $id) {
    id
    phase_ids {
      id
      logs {
        id
        timestamp
        text
      }
      duration
      title
      description
    }
    user_id {
      id
      username
      first_name
      last_name
      email
      password_hash
      phone_number
      processes {
        id
        name
        date_start
        date_end
      }
    }
    name
    date_start
    date_end
  }
}
`;
export const listProcesss = `query ListProcesss(
  $filter: ModelProcessFilterInput
  $limit: Int
  $nextToken: String
) {
  listProcesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      phase_ids {
        id
        duration
        title
        description
      }
      user_id {
        id
        username
        first_name
        last_name
        email
        password_hash
        phone_number
      }
      name
      date_start
      date_end
    }
    nextToken
  }
}
`;
export const getPhase = `query GetPhase($id: ID!) {
  getPhase(id: $id) {
    id
    logs {
      id
      timestamp
      text
    }
    duration
    title
    description
  }
}
`;
export const listPhases = `query ListPhases(
  $filter: ModelPhaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      logs {
        id
        timestamp
        text
      }
      duration
      title
      description
    }
    nextToken
  }
}
`;
export const getLog = `query GetLog($id: ID!) {
  getLog(id: $id) {
    id
    timestamp
    text
  }
}
`;
export const listLogs = `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
  listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      timestamp
      text
    }
    nextToken
  }
}
`;
