/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompass = `mutation CreateCompass($input: CreateCompassInput!) {
  createCompass(input: $input) {
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
export const updateCompass = `mutation UpdateCompass($input: UpdateCompassInput!) {
  updateCompass(input: $input) {
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
export const deleteCompass = `mutation DeleteCompass($input: DeleteCompassInput!) {
  deleteCompass(input: $input) {
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
export const createSession = `mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
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
export const updateSession = `mutation UpdateSession($input: UpdateSessionInput!) {
  updateSession(input: $input) {
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
export const deleteSession = `mutation DeleteSession($input: DeleteSessionInput!) {
  deleteSession(input: $input) {
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
export const createInteraction = `mutation CreateInteraction($input: CreateInteractionInput!) {
  createInteraction(input: $input) {
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
export const updateInteraction = `mutation UpdateInteraction($input: UpdateInteractionInput!) {
  updateInteraction(input: $input) {
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
export const deleteInteraction = `mutation DeleteInteraction($input: DeleteInteractionInput!) {
  deleteInteraction(input: $input) {
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
export const createStep = `mutation CreateStep($input: CreateStepInput!) {
  createStep(input: $input) {
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
export const updateStep = `mutation UpdateStep($input: UpdateStepInput!) {
  updateStep(input: $input) {
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
export const deleteStep = `mutation DeleteStep($input: DeleteStepInput!) {
  deleteStep(input: $input) {
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
