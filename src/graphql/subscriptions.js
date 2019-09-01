/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateSession = `subscription OnCreateSession {
  onCreateSession {
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
export const onUpdateSession = `subscription OnUpdateSession {
  onUpdateSession {
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
export const onDeleteSession = `subscription OnDeleteSession {
  onDeleteSession {
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
export const onCreateInteraction = `subscription OnCreateInteraction {
  onCreateInteraction {
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
export const onUpdateInteraction = `subscription OnUpdateInteraction {
  onUpdateInteraction {
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
export const onDeleteInteraction = `subscription OnDeleteInteraction {
  onDeleteInteraction {
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
export const onCreateStep = `subscription OnCreateStep {
  onCreateStep {
    id
    step_start_time
    step_end_time
    title
    description
  }
}
`;
export const onUpdateStep = `subscription OnUpdateStep {
  onUpdateStep {
    id
    step_start_time
    step_end_time
    title
    description
  }
}
`;
export const onDeleteStep = `subscription OnDeleteStep {
  onDeleteStep {
    id
    step_start_time
    step_end_time
    title
    description
  }
}
`;
export const onCreateAttachment = `subscription OnCreateAttachment {
  onCreateAttachment {
    id
    content
    timestamp
    bucket
    region
    key
  }
}
`;
export const onUpdateAttachment = `subscription OnUpdateAttachment {
  onUpdateAttachment {
    id
    content
    timestamp
    bucket
    region
    key
  }
}
`;
export const onDeleteAttachment = `subscription OnDeleteAttachment {
  onDeleteAttachment {
    id
    content
    timestamp
    bucket
    region
    key
  }
}
`;
