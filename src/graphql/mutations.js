/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createCompass = `mutation CreateCompass($input: CreateCompassInput!) {
  createCompass(input: $input) {
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
export const updateCompass = `mutation UpdateCompass($input: UpdateCompassInput!) {
  updateCompass(input: $input) {
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
export const deleteCompass = `mutation DeleteCompass($input: DeleteCompassInput!) {
  deleteCompass(input: $input) {
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
export const createSession = `mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
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
export const updateSession = `mutation UpdateSession($input: UpdateSessionInput!) {
  updateSession(input: $input) {
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
export const deleteSession = `mutation DeleteSession($input: DeleteSessionInput!) {
  deleteSession(input: $input) {
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
export const createInteraction = `mutation CreateInteraction($input: CreateInteractionInput!) {
  createInteraction(input: $input) {
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
export const updateInteraction = `mutation UpdateInteraction($input: UpdateInteractionInput!) {
  updateInteraction(input: $input) {
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
export const deleteInteraction = `mutation DeleteInteraction($input: DeleteInteractionInput!) {
  deleteInteraction(input: $input) {
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
export const createStep = `mutation CreateStep($input: CreateStepInput!) {
  createStep(input: $input) {
    id
    step_start_time
    step_end_time
    title
    description
  }
}
`;
export const updateStep = `mutation UpdateStep($input: UpdateStepInput!) {
  updateStep(input: $input) {
    id
    step_start_time
    step_end_time
    title
    description
  }
}
`;
export const deleteStep = `mutation DeleteStep($input: DeleteStepInput!) {
  deleteStep(input: $input) {
    id
    step_start_time
    step_end_time
    title
    description
  }
}
`;
export const createAttachment = `mutation CreateAttachment($input: CreateAttachmentInput!) {
  createAttachment(input: $input) {
    id
    content
    timestamp
    bucket
    region
    key
  }
}
`;
export const updateAttachment = `mutation UpdateAttachment($input: UpdateAttachmentInput!) {
  updateAttachment(input: $input) {
    id
    content
    timestamp
    bucket
    region
    key
  }
}
`;
export const deleteAttachment = `mutation DeleteAttachment($input: DeleteAttachmentInput!) {
  deleteAttachment(input: $input) {
    id
    content
    timestamp
    bucket
    region
    key
  }
}
`;
