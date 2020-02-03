/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createTeacherCompasses = `mutation CreateTeacherCompasses($input: CreateTeacherCompassesInput!) {
  createTeacherCompasses(input: $input) {
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
export const updateTeacherCompasses = `mutation UpdateTeacherCompasses($input: UpdateTeacherCompassesInput!) {
  updateTeacherCompasses(input: $input) {
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
export const deleteTeacherCompasses = `mutation DeleteTeacherCompasses($input: DeleteTeacherCompassesInput!) {
  deleteTeacherCompasses(input: $input) {
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
export const createMemberCompasses = `mutation CreateMemberCompasses($input: CreateMemberCompassesInput!) {
  createMemberCompasses(input: $input) {
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
export const updateMemberCompasses = `mutation UpdateMemberCompasses($input: UpdateMemberCompassesInput!) {
  updateMemberCompasses(input: $input) {
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
export const deleteMemberCompasses = `mutation DeleteMemberCompasses($input: DeleteMemberCompassesInput!) {
  deleteMemberCompasses(input: $input) {
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
export const createReaderCompasses = `mutation CreateReaderCompasses($input: CreateReaderCompassesInput!) {
  createReaderCompasses(input: $input) {
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
export const updateReaderCompasses = `mutation UpdateReaderCompasses($input: UpdateReaderCompassesInput!) {
  updateReaderCompasses(input: $input) {
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
export const deleteReaderCompasses = `mutation DeleteReaderCompasses($input: DeleteReaderCompassesInput!) {
  deleteReaderCompasses(input: $input) {
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
export const createCompass = `mutation CreateCompass($input: CreateCompassInput!) {
  createCompass(input: $input) {
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
export const updateCompass = `mutation UpdateCompass($input: UpdateCompassInput!) {
  updateCompass(input: $input) {
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
export const deleteCompass = `mutation DeleteCompass($input: DeleteCompassInput!) {
  deleteCompass(input: $input) {
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
export const createSession = `mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
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
export const updateSession = `mutation UpdateSession($input: UpdateSessionInput!) {
  updateSession(input: $input) {
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
export const deleteSession = `mutation DeleteSession($input: DeleteSessionInput!) {
  deleteSession(input: $input) {
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
export const createInteraction = `mutation CreateInteraction($input: CreateInteractionInput!) {
  createInteraction(input: $input) {
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
export const updateInteraction = `mutation UpdateInteraction($input: UpdateInteractionInput!) {
  updateInteraction(input: $input) {
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
export const deleteInteraction = `mutation DeleteInteraction($input: DeleteInteractionInput!) {
  deleteInteraction(input: $input) {
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
export const createStep = `mutation CreateStep($input: CreateStepInput!) {
  createStep(input: $input) {
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
export const updateStep = `mutation UpdateStep($input: UpdateStepInput!) {
  updateStep(input: $input) {
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
export const deleteStep = `mutation DeleteStep($input: DeleteStepInput!) {
  deleteStep(input: $input) {
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
export const createAttachment = `mutation CreateAttachment($input: CreateAttachmentInput!) {
  createAttachment(input: $input) {
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
export const updateAttachment = `mutation UpdateAttachment($input: UpdateAttachmentInput!) {
  updateAttachment(input: $input) {
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
export const deleteAttachment = `mutation DeleteAttachment($input: DeleteAttachmentInput!) {
  deleteAttachment(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
