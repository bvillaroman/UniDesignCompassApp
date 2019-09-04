/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompass = `query GetCompass($id: ID!) {
  getCompass(id: $id) {
    id
    name_of_compass
    description_of_compass
    date_start
    date_end
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
    steps {
      items {
        id
        step_start_time
        step_end_time
        name_of_step
        description_of_step
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
      name_of_compass
      description_of_compass
      date_start
      date_end
      sessions {
        nextToken
      }
      steps {
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
      name_of_compass
      description_of_compass
      date_start
      date_end
      sessions {
        nextToken
      }
      steps {
        nextToken
      }
    }
    interactions {
      items {
        id
        interaction_start_time
        interaction_start_end
        log_content
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
        name_of_compass
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
    log_content
    session {
      id
      session_start_time
      session_end_time
      name_of_session
      description_of_session
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
      }
      interactions {
        nextToken
      }
    }
    step {
      id
      step_start_time
      step_end_time
      name_of_step
      description_of_step
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
      }
    }
    attachments {
      id
      content
      timestamp
      bucket
      region
      key
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
      log_content
      session {
        id
        session_start_time
        session_end_time
        name_of_session
        description_of_session
      }
      step {
        id
        step_start_time
        step_end_time
        name_of_step
        description_of_step
      }
      attachments {
        id
        content
        timestamp
        bucket
        region
        key
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
    name_of_step
    description_of_step
    compass {
      id
      name_of_compass
      description_of_compass
      date_start
      date_end
      sessions {
        nextToken
      }
      steps {
        nextToken
      }
    }
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
      name_of_step
      description_of_step
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
      }
    }
    nextToken
  }
}
`;
