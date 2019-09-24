/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompass = `query GetCompass($id: ID!) {
  getCompass(id: $id) {
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
            items {
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
            nextToken
          }
        }
        interactions {
          items {
            id
            duration
            log_content
            comments
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
          nextToken
        }
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
            items {
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
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const listCompasss = `query ListCompasss(
  $filter: ModelCompassFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          interactions {
            items {
              id
              duration
              log_content
              comments
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
            nextToken
          }
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
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSession = `query GetSession($id: ID!) {
  getSession(id: $id) {
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
        items {
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
          interactions {
            items {
              id
              duration
              log_content
              comments
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
            nextToken
          }
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
        nextToken
      }
    }
    interactions {
      items {
        id
        duration
        log_content
        comments
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
          interactions {
            items {
              id
              duration
              log_content
              comments
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
        attachments {
          items {
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
          nextToken
        }
      }
      nextToken
    }
  }
}
`;
export const listSessions = `query ListSessions(
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          items {
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
                comments
                createdAt
              }
              nextToken
            }
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
          nextToken
        }
      }
      interactions {
        items {
          id
          duration
          log_content
          comments
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
                comments
                createdAt
              }
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
              sessions {
                nextToken
              }
              steps {
                nextToken
              }
            }
          }
          attachments {
            items {
              name
              type
              interaction {
                id
                duration
                log_content
                comments
                createdAt
              }
              bucket
              region
              key
            }
            nextToken
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getInteraction = `query GetInteraction($id: ID!) {
  getInteraction(id: $id) {
    id
    duration
    log_content
    comments
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
        sessions {
          items {
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
                comments
                createdAt
              }
              nextToken
            }
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
          nextToken
        }
      }
      interactions {
        items {
          id
          duration
          log_content
          comments
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
                comments
                createdAt
              }
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
              sessions {
                nextToken
              }
              steps {
                nextToken
              }
            }
          }
          attachments {
            items {
              name
              type
              interaction {
                id
                duration
                log_content
                comments
                createdAt
              }
              bucket
              region
              key
            }
            nextToken
          }
        }
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
        sessions {
          items {
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
                comments
                createdAt
              }
              nextToken
            }
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
          nextToken
        }
      }
    }
    attachments {
      items {
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
                comments
                createdAt
              }
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
              sessions {
                nextToken
              }
              steps {
                nextToken
              }
            }
          }
          attachments {
            items {
              name
              type
              interaction {
                id
                duration
                log_content
                comments
                createdAt
              }
              bucket
              region
              key
            }
            nextToken
          }
        }
        bucket
        region
        key
      }
      nextToken
    }
  }
}
`;
export const listInteractions = `query ListInteractions(
  $filter: ModelInteractionFilterInput
  $limit: Int
  $nextToken: String
) {
  listInteractions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      duration
      log_content
      comments
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
          sessions {
            items {
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
            nextToken
          }
        }
        interactions {
          items {
            id
            duration
            log_content
            comments
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
          sessions {
            items {
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
            nextToken
          }
        }
      }
      attachments {
        items {
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
          bucket
          region
          key
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getStep = `query GetStep($id: ID!) {
  getStep(id: $id) {
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
        items {
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
          interactions {
            items {
              id
              duration
              log_content
              comments
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
            nextToken
          }
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
        nextToken
      }
    }
  }
}
`;
export const listSteps = `query ListSteps(
  $filter: ModelStepFilterInput
  $limit: Int
  $nextToken: String
) {
  listSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          items {
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
                comments
                createdAt
              }
              nextToken
            }
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
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getAttachment = `query GetAttachment($id: ID!) {
  getAttachment(id: $id) {
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
            items {
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
            nextToken
          }
        }
        interactions {
          items {
            id
            duration
            log_content
            comments
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
          sessions {
            items {
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
            nextToken
          }
        }
      }
      attachments {
        items {
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
          bucket
          region
          key
        }
        nextToken
      }
    }
    bucket
    region
    key
  }
}
`;
export const listAttachments = `query ListAttachments(
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          interactions {
            items {
              id
              duration
              log_content
              comments
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
        attachments {
          items {
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
          nextToken
        }
      }
      bucket
      region
      key
    }
    nextToken
  }
}
`;
