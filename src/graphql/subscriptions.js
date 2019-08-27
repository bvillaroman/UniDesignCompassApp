/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateCompass = `subscription OnCreateCompass {
  onCreateCompass {
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
export const onUpdateCompass = `subscription OnUpdateCompass {
  onUpdateCompass {
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
export const onDeleteCompass = `subscription OnDeleteCompass {
  onDeleteCompass {
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
export const onCreateSession = `subscription OnCreateSession {
  onCreateSession {
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
export const onUpdateSession = `subscription OnUpdateSession {
  onUpdateSession {
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
export const onDeleteSession = `subscription OnDeleteSession {
  onDeleteSession {
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
export const onCreateInteraction = `subscription OnCreateInteraction {
  onCreateInteraction {
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
export const onUpdateInteraction = `subscription OnUpdateInteraction {
  onUpdateInteraction {
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
export const onDeleteInteraction = `subscription OnDeleteInteraction {
  onDeleteInteraction {
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
export const onCreateStep = `subscription OnCreateStep {
  onCreateStep {
    id
    title
    description
  }
}
`;
export const onUpdateStep = `subscription OnUpdateStep {
  onUpdateStep {
    id
    title
    description
  }
}
`;
export const onDeleteStep = `subscription OnDeleteStep {
  onDeleteStep {
    id
    title
    description
  }
}
`;
export const onCreateLog = `subscription OnCreateLog {
  onCreateLog {
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
export const onUpdateLog = `subscription OnUpdateLog {
  onUpdateLog {
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
export const onDeleteLog = `subscription OnDeleteLog {
  onDeleteLog {
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
