/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompass = `mutation CreateCompass($input: CreateCompassInput!) {
  createCompass(input: $input) {
    id
    name_of_compass
    description_of_compass
    date_start
    date_end
    createdAt
    admins
    readers
    sessions {
      items {
        id
        session_start_time
        session_end_time
        name_of_session
        description_of_session
        createdAt
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
        color
        createdAt
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
    createdAt
    admins
    readers
    sessions {
      items {
        id
        session_start_time
        session_end_time
        name_of_session
        description_of_session
        createdAt
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
        color
        createdAt
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
    createdAt
    admins
    readers
    sessions {
      items {
        id
        session_start_time
        session_end_time
        name_of_session
        description_of_session
        createdAt
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
        color
        createdAt
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
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      date_start
      date_end
      createdAt
      admins
      readers
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
        duration
        log_content
        createdAt
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
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      date_start
      date_end
      createdAt
      admins
      readers
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
        duration
        log_content
        createdAt
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
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      date_start
      date_end
      createdAt
      admins
      readers
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
        duration
        log_content
        createdAt
      }
      nextToken
    }
  }
}
`;
export const createInteraction = `mutation CreateInteraction($input: CreateInteractionInput!) {
  createInteraction(input: $input) {
    id
    duration
    log_content
    createdAt
    session {
      id
      session_start_time
      session_end_time
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
        createdAt
        admins
        readers
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
      color
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
        createdAt
        admins
        readers
      }
    }
    attachments {
      items {
        name
        type
        bucket
        region
        key
      }
      nextToken
    }
  }
}
`;
export const updateInteraction = `mutation UpdateInteraction($input: UpdateInteractionInput!) {
  updateInteraction(input: $input) {
    id
    duration
    log_content
    createdAt
    session {
      id
      session_start_time
      session_end_time
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
        createdAt
        admins
        readers
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
      color
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
        createdAt
        admins
        readers
      }
    }
    attachments {
      items {
        name
        type
        bucket
        region
        key
      }
      nextToken
    }
  }
}
`;
export const deleteInteraction = `mutation DeleteInteraction($input: DeleteInteractionInput!) {
  deleteInteraction(input: $input) {
    id
    duration
    log_content
    createdAt
    session {
      id
      session_start_time
      session_end_time
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
        createdAt
        admins
        readers
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
      color
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        date_start
        date_end
        createdAt
        admins
        readers
      }
    }
    attachments {
      items {
        name
        type
        bucket
        region
        key
      }
      nextToken
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
    color
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      date_start
      date_end
      createdAt
      admins
      readers
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
    color
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      date_start
      date_end
      createdAt
      admins
      readers
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
    color
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      date_start
      date_end
      createdAt
      admins
      readers
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
export const createAttachment = `mutation CreateAttachment($input: CreateAttachmentInput!) {
  createAttachment(input: $input) {
    name
    type
    interaction {
      id
      duration
      log_content
      createdAt
      session {
        id
        session_start_time
        session_end_time
        name_of_session
        description_of_session
        createdAt
      }
      step {
        id
        step_start_time
        step_end_time
        name_of_step
        description_of_step
        color
        createdAt
      }
      attachments {
        nextToken
      }
    }
    bucket
    region
    key
  }
}
`;
export const updateAttachment = `mutation UpdateAttachment($input: UpdateAttachmentInput!) {
  updateAttachment(input: $input) {
    name
    type
    interaction {
      id
      duration
      log_content
      createdAt
      session {
        id
        session_start_time
        session_end_time
        name_of_session
        description_of_session
        createdAt
      }
      step {
        id
        step_start_time
        step_end_time
        name_of_step
        description_of_step
        color
        createdAt
      }
      attachments {
        nextToken
      }
    }
    bucket
    region
    key
  }
}
`;
export const deleteAttachment = `mutation DeleteAttachment($input: DeleteAttachmentInput!) {
  deleteAttachment(input: $input) {
    name
    type
    interaction {
      id
      duration
      log_content
      createdAt
      session {
        id
        session_start_time
        session_end_time
        name_of_session
        description_of_session
        createdAt
      }
      step {
        id
        step_start_time
        step_end_time
        name_of_step
        description_of_step
        color
        createdAt
      }
      attachments {
        nextToken
      }
    }
    bucket
    region
    key
  }
}
`;
