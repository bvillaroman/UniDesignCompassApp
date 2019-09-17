/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompass = `subscription OnCreateCompass {
  onCreateCompass {
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
export const onUpdateCompass = `subscription OnUpdateCompass {
  onUpdateCompass {
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
export const onDeleteCompass = `subscription OnDeleteCompass {
  onDeleteCompass {
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
export const onCreateSession = `subscription OnCreateSession {
  onCreateSession {
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
export const onUpdateSession = `subscription OnUpdateSession {
  onUpdateSession {
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
export const onDeleteSession = `subscription OnDeleteSession {
  onDeleteSession {
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
export const onCreateInteraction = `subscription OnCreateInteraction {
  onCreateInteraction {
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
export const onUpdateInteraction = `subscription OnUpdateInteraction {
  onUpdateInteraction {
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
export const onDeleteInteraction = `subscription OnDeleteInteraction {
  onDeleteInteraction {
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
export const onCreateStep = `subscription OnCreateStep {
  onCreateStep {
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
export const onUpdateStep = `subscription OnUpdateStep {
  onUpdateStep {
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
export const onDeleteStep = `subscription OnDeleteStep {
  onDeleteStep {
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
export const onCreateAttachment = `subscription OnCreateAttachment {
  onCreateAttachment {
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
export const onUpdateAttachment = `subscription OnUpdateAttachment {
  onUpdateAttachment {
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
export const onDeleteAttachment = `subscription OnDeleteAttachment {
  onDeleteAttachment {
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
