/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    name_of_user
    email
    compasses {
      items {
        id
        name_of_compass
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
    name_of_user
    email
    compasses {
      items {
        id
        name_of_compass
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
    name_of_user
    email
    compasses {
      items {
        id
        name_of_compass
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
    name_of_compass
    description_of_compass
    date_start
    date_end
    user {
      id
      name_of_user
      email
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
export const onUpdateCompass = `subscription OnUpdateCompass {
  onUpdateCompass {
    id
    name_of_compass
    description_of_compass
    date_start
    date_end
    user {
      id
      name_of_user
      email
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
export const onDeleteCompass = `subscription OnDeleteCompass {
  onDeleteCompass {
    id
    name_of_compass
    description_of_compass
    date_start
    date_end
    user {
      id
      name_of_user
      email
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
export const onCreateSession = `subscription OnCreateSession {
  onCreateSession {
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
      user {
        id
        name_of_user
        email
      }
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
export const onUpdateSession = `subscription OnUpdateSession {
  onUpdateSession {
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
      user {
        id
        name_of_user
        email
      }
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
export const onDeleteSession = `subscription OnDeleteSession {
  onDeleteSession {
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
      user {
        id
        name_of_user
        email
      }
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
export const onCreateInteraction = `subscription OnCreateInteraction {
  onCreateInteraction {
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
      description_of_attachment
      bucket
      region
      key
    }
  }
}
`;
export const onUpdateInteraction = `subscription OnUpdateInteraction {
  onUpdateInteraction {
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
      description_of_attachment
      bucket
      region
      key
    }
  }
}
`;
export const onDeleteInteraction = `subscription OnDeleteInteraction {
  onDeleteInteraction {
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
      description_of_attachment
      bucket
      region
      key
    }
  }
}
`;
export const onCreateStep = `subscription OnCreateStep {
  onCreateStep {
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
      user {
        id
        name_of_user
        email
      }
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
export const onUpdateStep = `subscription OnUpdateStep {
  onUpdateStep {
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
      user {
        id
        name_of_user
        email
      }
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
export const onDeleteStep = `subscription OnDeleteStep {
  onDeleteStep {
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
      user {
        id
        name_of_user
        email
      }
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
