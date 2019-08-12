/* eslint-disable */
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
      items {
        id
        user_id
        name
        date_start
        date_end
      }
      nextToken
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
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProcess = `query GetProcess($id: ID!) {
  getProcess(id: $id) {
    id
    phaseids {
      items {
        id
        duration
        title
        description
      }
      nextToken
    }
    user_id
    user {
      id
      username
      first_name
      last_name
      email
      password_hash
      phone_number
      processes {
        nextToken
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
      phaseids {
        nextToken
      }
      user_id
      user {
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
      items {
        id
        timestamp
        text
      }
      nextToken
    }
    duration
    title
    description
    process {
      id
      phaseids {
        nextToken
      }
      user_id
      user {
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
export const listPhases = `query ListPhases(
  $filter: ModelPhaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      logs {
        nextToken
      }
      duration
      title
      description
      process {
        id
        user_id
        name
        date_start
        date_end
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
    text
    phase {
      id
      logs {
        nextToken
      }
      duration
      title
      description
      process {
        id
        user_id
        name
        date_start
        date_end
      }
    }
  }
}
`;
export const listLogs = `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
  listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      timestamp
      text
      phase {
        id
        duration
        title
        description
      }
    }
    nextToken
  }
}
`;
