/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createSession = `mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
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
export const updateSession = `mutation UpdateSession($input: UpdateSessionInput!) {
  updateSession(input: $input) {
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
export const deleteSession = `mutation DeleteSession($input: DeleteSessionInput!) {
  deleteSession(input: $input) {
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
export const createInteraction = `mutation CreateInteraction($input: CreateInteractionInput!) {
  createInteraction(input: $input) {
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
export const updateInteraction = `mutation UpdateInteraction($input: UpdateInteractionInput!) {
  updateInteraction(input: $input) {
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
export const deleteInteraction = `mutation DeleteInteraction($input: DeleteInteractionInput!) {
  deleteInteraction(input: $input) {
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
export const createStep = `mutation CreateStep($input: CreateStepInput!) {
  createStep(input: $input) {
    id
    title
    description
  }
}
`;
export const updateStep = `mutation UpdateStep($input: UpdateStepInput!) {
  updateStep(input: $input) {
    id
    title
    description
  }
}
`;
export const deleteStep = `mutation DeleteStep($input: DeleteStepInput!) {
  deleteStep(input: $input) {
    id
    title
    description
  }
}
`;
export const createLog = `mutation CreateLog($input: CreateLogInput!) {
  createLog(input: $input) {
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
export const updateLog = `mutation UpdateLog($input: UpdateLogInput!) {
  updateLog(input: $input) {
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
export const deleteLog = `mutation DeleteLog($input: DeleteLogInput!) {
  deleteLog(input: $input) {
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
