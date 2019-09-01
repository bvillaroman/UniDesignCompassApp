/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    name
    email
    password
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
      compasses {
        nextToken
      }
    }
    sessions {
      items {
        id
        session_start_time
        session_end_time
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
    session_start_time
    session_end_time
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
      }
      sessions {
        nextToken
      }
    }
    interactions {
      items {
        id
        interaction_start_time
        interaction_start_end
        content
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
      session_start_time
      session_end_time
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
    interaction_start_end
    content
    step {
      id
      step_start_time
      step_end_time
      title
      description
    }
    attachments {
      id
      content
      timestamp
      bucket
      region
      key
    }
    session {
      id
      session_start_time
      session_end_time
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
      interaction_start_end
      content
      step {
        id
        step_start_time
        step_end_time
        title
        description
      }
      attachments {
        id
        content
        timestamp
        bucket
        region
        key
      }
      session {
        id
        session_start_time
        session_end_time
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
    step_start_time
    step_end_time
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
      step_start_time
      step_end_time
      title
      description
    }
    nextToken
  }
}
`;
export const getAttachment = `query GetAttachment($id: ID!) {
  getAttachment(id: $id) {
    id
    content
    timestamp
    bucket
    region
    key
  }
}
`;
export const listAttachments = `query ListAttachments(
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      timestamp
      bucket
      region
      key
    }
    nextToken
  }
}
`;
