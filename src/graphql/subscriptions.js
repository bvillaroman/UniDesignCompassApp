/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    first_name
    last_name
    email
    teacher {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    member {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    reader {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    compass {
      items {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    first_name
    last_name
    email
    teacher {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    member {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    reader {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    compass {
      items {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    first_name
    last_name
    email
    teacher {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    member {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    reader {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    compass {
      items {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      nextToken
    }
  }
}
`;
export const onCreateTeacherCompasses = `subscription OnCreateTeacherCompasses {
  onCreateTeacherCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onUpdateTeacherCompasses = `subscription OnUpdateTeacherCompasses {
  onUpdateTeacherCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onDeleteTeacherCompasses = `subscription OnDeleteTeacherCompasses {
  onDeleteTeacherCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onCreateMemberCompasses = `subscription OnCreateMemberCompasses {
  onCreateMemberCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onUpdateMemberCompasses = `subscription OnUpdateMemberCompasses {
  onUpdateMemberCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onDeleteMemberCompasses = `subscription OnDeleteMemberCompasses {
  onDeleteMemberCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onCreateReaderCompasses = `subscription OnCreateReaderCompasses {
  onCreateReaderCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onUpdateReaderCompasses = `subscription OnUpdateReaderCompasses {
  onUpdateReaderCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onDeleteReaderCompasses = `subscription OnDeleteReaderCompasses {
  onDeleteReaderCompasses {
    id
    first_name
    last_name
    email
    user {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
export const onCreateCompass = `subscription OnCreateCompass {
  onCreateCompass {
    id
    name_of_compass
    description_of_compass
    createdAt
    compassType
    owner {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    scribe {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    teachers {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    members {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    readers {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    sessions {
      items {
        id
        name_of_session
        description_of_session
        createdAt
      }
      nextToken
    }
    steps {
      items {
        id
        index
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
export const onUpdateCompass = `subscription OnUpdateCompass {
  onUpdateCompass {
    id
    name_of_compass
    description_of_compass
    createdAt
    compassType
    owner {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    scribe {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    teachers {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    members {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    readers {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    sessions {
      items {
        id
        name_of_session
        description_of_session
        createdAt
      }
      nextToken
    }
    steps {
      items {
        id
        index
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
export const onDeleteCompass = `subscription OnDeleteCompass {
  onDeleteCompass {
    id
    name_of_compass
    description_of_compass
    createdAt
    compassType
    owner {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    scribe {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    teachers {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    members {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    readers {
      items {
        id
        first_name
        last_name
        email
      }
      nextToken
    }
    sessions {
      items {
        id
        name_of_session
        description_of_session
        createdAt
      }
      nextToken
    }
    steps {
      items {
        id
        index
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
export const onCreateSession = `subscription OnCreateSession {
  onCreateSession {
    id
    name_of_session
    description_of_session
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
      }
      sessions {
        nextToken
      }
      steps {
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    interactions {
      items {
        id
        duration
        log_content
        comments
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onUpdateSession = `subscription OnUpdateSession {
  onUpdateSession {
    id
    name_of_session
    description_of_session
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
      }
      sessions {
        nextToken
      }
      steps {
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    interactions {
      items {
        id
        duration
        log_content
        comments
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onDeleteSession = `subscription OnDeleteSession {
  onDeleteSession {
    id
    name_of_session
    description_of_session
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
      }
      sessions {
        nextToken
      }
      steps {
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    interactions {
      items {
        id
        duration
        log_content
        comments
        createdAt
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
    comments
    createdAt
    session {
      id
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      comments {
        nextToken
      }
      interactions {
        nextToken
      }
    }
    step {
      id
      index
      name_of_step
      description_of_step
      color
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
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
    comments
    createdAt
    session {
      id
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      comments {
        nextToken
      }
      interactions {
        nextToken
      }
    }
    step {
      id
      index
      name_of_step
      description_of_step
      color
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
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
    comments
    createdAt
    session {
      id
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      comments {
        nextToken
      }
      interactions {
        nextToken
      }
    }
    step {
      id
      index
      name_of_step
      description_of_step
      color
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
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
    index
    name_of_step
    description_of_step
    color
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
    index
    name_of_step
    description_of_step
    color
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
    index
    name_of_step
    description_of_step
    color
    createdAt
    compass {
      id
      name_of_compass
      description_of_compass
      createdAt
      compassType
      owner {
        id
        first_name
        last_name
        email
      }
      scribe {
        id
        first_name
        last_name
        email
      }
      teachers {
        nextToken
      }
      members {
        nextToken
      }
      readers {
        nextToken
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
      comments
      createdAt
      session {
        id
        name_of_session
        description_of_session
        createdAt
      }
      step {
        id
        index
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
export const onUpdateAttachment = `subscription OnUpdateAttachment {
  onUpdateAttachment {
    name
    type
    interaction {
      id
      duration
      log_content
      comments
      createdAt
      session {
        id
        name_of_session
        description_of_session
        createdAt
      }
      step {
        id
        index
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
export const onDeleteAttachment = `subscription OnDeleteAttachment {
  onDeleteAttachment {
    name
    type
    interaction {
      id
      duration
      log_content
      comments
      createdAt
      session {
        id
        name_of_session
        description_of_session
        createdAt
      }
      step {
        id
        index
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    createdAt
    commenter {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    session {
      id
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      comments {
        nextToken
      }
      interactions {
        nextToken
      }
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    createdAt
    commenter {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    session {
      id
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      comments {
        nextToken
      }
      interactions {
        nextToken
      }
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    createdAt
    commenter {
      id
      first_name
      last_name
      email
      teacher {
        nextToken
      }
      member {
        nextToken
      }
      reader {
        nextToken
      }
      compass {
        nextToken
      }
    }
    session {
      id
      name_of_session
      description_of_session
      createdAt
      compass {
        id
        name_of_compass
        description_of_compass
        createdAt
        compassType
      }
      comments {
        nextToken
      }
      interactions {
        nextToken
      }
    }
  }
}
`;
