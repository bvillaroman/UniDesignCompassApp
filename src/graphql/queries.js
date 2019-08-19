/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    name
    email
    password
    phone_number
    compasses {
      items {
        id
        title
        description_of_compass
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
      name
      email
      password
      phone_number
      compasses {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCompass = `query GetCompass($id: ID!) {
  getCompass(id: $id) {
    id
    title
    description_of_compass
    date_start
    date_end
    user {
      id
      username
      name
      email
      password
      phone_number
      compasses {
        nextToken
      }
    }
    sessions {
      items {
        id
        total_time
        name_of_session
        description_of_session
      }
      nextToken
    }
  }
}
`;
export const listCompasss = `query ListCompasss(
  $filter: ModelCompassFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description_of_compass
      date_start
      date_end
      user {
        id
        username
        name
        email
        password
        phone_number
      }
      sessions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSession = `query GetSession($id: ID!) {
  getSession(id: $id) {
    id
    total_time
    name_of_session
    description_of_session
    compass {
      id
      title
      description_of_compass
      date_start
      date_end
      user {
        id
        username
        name
        email
        password
        phone_number
      }
      sessions {
        nextToken
      }
    }
    interactions {
      items {
        id
        interaction_start_time
        interaction_end_time
      }
      nextToken
    }
  }
}
`;
export const listSessions = `query ListSessions(
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      total_time
      name_of_session
      description_of_session
      compass {
        id
        title
        description_of_compass
        date_start
        date_end
      }
      interactions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getInteraction = `query GetInteraction($id: ID!) {
  getInteraction(id: $id) {
    id
    interaction_start_time
    interaction_end_time
    step {
      id
      title
      description
    }
    logs {
      items {
        id
        content
        timestamp
      }
      nextToken
    }
    session {
      id
      total_time
      name_of_session
      description_of_session
      compass {
        id
        title
        description_of_compass
        date_start
        date_end
      }
      interactions {
        nextToken
      }
    }
  }
}
`;
export const listInteractions = `query ListInteractions(
  $filter: ModelInteractionFilterInput
  $limit: Int
  $nextToken: String
) {
  listInteractions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      interaction_start_time
      interaction_end_time
      step {
        id
        title
        description
      }
      logs {
        nextToken
      }
      session {
        id
        total_time
        name_of_session
        description_of_session
      }
    }
    nextToken
  }
}
`;
export const getStep = `query GetStep($id: ID!) {
  getStep(id: $id) {
    id
    title
    description
  }
}
`;
export const listSteps = `query ListSteps(
  $filter: ModelStepFilterInput
  $limit: Int
  $nextToken: String
) {
  listSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
    content
    timestamp
    interaction {
      id
      interaction_start_time
      interaction_end_time
      step {
        id
        title
        description
      }
      logs {
        nextToken
      }
      session {
        id
        total_time
        name_of_session
        description_of_session
      }
    }
  }
}
`;
export const listLogs = `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
  listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      timestamp
      interaction {
        id
        interaction_start_time
        interaction_end_time
      }
    }
    nextToken
  }
}
`;
