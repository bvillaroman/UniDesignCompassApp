/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    first_name
    last_name
    email
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    first_name
    last_name
    email
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    first_name
    last_name
    email
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
    }
    scribe {
      id
      first_name
      last_name
      email
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
    visitors {
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
            commenter {
              id
              first_name
              last_name
              email
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
                visitors {
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
          nextToken
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
                visitors {
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
            step {
              id
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
                visitors {
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
    steps {
      items {
        id
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
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
    }
    scribe {
      id
      first_name
      last_name
      email
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
    visitors {
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
            commenter {
              id
              first_name
              last_name
              email
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
                visitors {
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
          nextToken
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
                visitors {
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
            step {
              id
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
                visitors {
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
    steps {
      items {
        id
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
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
    }
    scribe {
      id
      first_name
      last_name
      email
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
    visitors {
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
            commenter {
              id
              first_name
              last_name
              email
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
                visitors {
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
          nextToken
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
                visitors {
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
            step {
              id
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
                visitors {
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
    steps {
      items {
        id
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
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
      visitors {
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        nextToken
      }
      steps {
        items {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
        }
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        commenter {
          id
          first_name
          last_name
          email
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        step {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
      visitors {
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        nextToken
      }
      steps {
        items {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
        }
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        commenter {
          id
          first_name
          last_name
          email
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        step {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
      visitors {
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        nextToken
      }
      steps {
        items {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
        }
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        commenter {
          id
          first_name
          last_name
          email
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        step {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
      comments {
        items {
          id
          content
          createdAt
          commenter {
            id
            first_name
            last_name
            email
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
    step {
      id
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
      comments {
        items {
          id
          content
          createdAt
          commenter {
            id
            first_name
            last_name
            email
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
    step {
      id
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
      comments {
        items {
          id
          content
          createdAt
          commenter {
            id
            first_name
            last_name
            email
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
    step {
      id
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
}
`;
export const createStep = `mutation CreateStep($input: CreateStepInput!) {
  createStep(input: $input) {
    id
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
      visitors {
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        nextToken
      }
      steps {
        items {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
export const updateStep = `mutation UpdateStep($input: UpdateStepInput!) {
  updateStep(input: $input) {
    id
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
      visitors {
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        nextToken
      }
      steps {
        items {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
export const deleteStep = `mutation DeleteStep($input: DeleteStepInput!) {
  deleteStep(input: $input) {
    id
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
      visitors {
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
              nextToken
            }
          }
          comments {
            items {
              id
              content
              createdAt
              commenter {
                id
                first_name
                last_name
                email
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
            nextToken
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
            nextToken
          }
        }
        nextToken
      }
      steps {
        items {
          id
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
            visitors {
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
              nextToken
            }
            steps {
              items {
                id
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
            commenter {
              id
              first_name
              last_name
              email
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
                visitors {
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
          nextToken
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
                visitors {
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
            step {
              id
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
                visitors {
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
                visitors {
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
            step {
              id
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
                visitors {
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
            commenter {
              id
              first_name
              last_name
              email
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
                visitors {
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
          nextToken
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
                visitors {
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
            step {
              id
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
                visitors {
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
                visitors {
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
            step {
              id
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
                visitors {
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
            commenter {
              id
              first_name
              last_name
              email
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
                visitors {
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
          nextToken
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
                visitors {
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
            step {
              id
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
                visitors {
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
          visitors {
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
                visitors {
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
            nextToken
          }
          steps {
            items {
              id
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
                visitors {
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
                visitors {
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
            step {
              id
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
                visitors {
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
      comments {
        items {
          id
          content
          createdAt
          commenter {
            id
            first_name
            last_name
            email
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
      comments {
        items {
          id
          content
          createdAt
          commenter {
            id
            first_name
            last_name
            email
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
        visitors {
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
      comments {
        items {
          id
          content
          createdAt
          commenter {
            id
            first_name
            last_name
            email
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_step
                  description_of_step
                  color
                  createdAt
                }
                nextToken
              }
            }
            comments {
              items {
                id
                content
                createdAt
                commenter {
                  id
                  first_name
                  last_name
                  email
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
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
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
              visitors {
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
                  name_of_session
                  description_of_session
                  createdAt
                }
                step {
                  id
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
}
`;
