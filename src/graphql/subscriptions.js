/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    name_of_user
    email
    admin_id
    members_id
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
    admin_id
    members_id
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
    admin_id
    members_id
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
      admin_id
      members_id
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
      admin_id
      members_id
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
      admin_id
      members_id
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
        admin_id
        members_id
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
        duration
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
        admin_id
        members_id
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
        duration
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
        admin_id
        members_id
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
        duration
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
    duration
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
export const onUpdateInteraction = `subscription OnUpdateInteraction {
  onUpdateInteraction {
    id
    duration
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
export const onDeleteInteraction = `subscription OnDeleteInteraction {
  onDeleteInteraction {
    id
    duration
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
        admin_id
        members_id
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
        admin_id
        members_id
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
        admin_id
        members_id
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
export const onCreateAttachment = `subscription OnCreateAttachment {
  onCreateAttachment {
    name
    type
    interaction {
      id
      duration
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
        nextToken
      }
    }
    bucket
    region
    key
  }
}
`;
export const onUpdateAttachment = `subscription OnUpdateAttachment {
  onUpdateAttachment {
    name
    type
    interaction {
      id
      duration
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
        nextToken
      }
    }
    bucket
    region
    key
  }
}
`;
export const onDeleteAttachment = `subscription OnDeleteAttachment {
  onDeleteAttachment {
    name
    type
    interaction {
      id
      duration
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
        nextToken
      }
    }
    bucket
    region
    key
  }
}
`;
