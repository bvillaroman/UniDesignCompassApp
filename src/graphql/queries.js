/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      first_name
      last_name
      email
      scribe {
        items {
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
        }
        nextToken
      }
      teacher {
        items {
          id
          first_name
          last_name
          email
          user {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
      member {
        items {
          id
          first_name
          last_name
          email
          user {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
      reader {
        items {
          id
          first_name
          last_name
          email
          user {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
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
          owner {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
        }
        nextToken
      }
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email
        scribe {
          items {
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        teacher {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        member {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        reader {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getTeacherCompasses = /* GraphQL */ `
  query GetTeacherCompasses($id: ID!) {
    getTeacherCompasses(id: $id) {
      id
      first_name
      last_name
      email
      user {
        id
        first_name
        last_name
        email
        scribe {
          items {
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        teacher {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        member {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        reader {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
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
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        scribe {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        teachers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        members {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        readers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listTeacherCompassess = /* GraphQL */ `
  query ListTeacherCompassess(
    $filter: ModelTeacherCompassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeacherCompassess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        first_name
        last_name
        email
        user {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMemberCompasses = /* GraphQL */ `
  query GetMemberCompasses($id: ID!) {
    getMemberCompasses(id: $id) {
      id
      first_name
      last_name
      email
      user {
        id
        first_name
        last_name
        email
        scribe {
          items {
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        teacher {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        member {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        reader {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
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
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        scribe {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        teachers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        members {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        readers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listMemberCompassess = /* GraphQL */ `
  query ListMemberCompassess(
    $filter: ModelMemberCompassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberCompassess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        first_name
        last_name
        email
        user {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getReaderCompasses = /* GraphQL */ `
  query GetReaderCompasses($id: ID!) {
    getReaderCompasses(id: $id) {
      id
      first_name
      last_name
      email
      user {
        id
        first_name
        last_name
        email
        scribe {
          items {
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        teacher {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        member {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        reader {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
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
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        scribe {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        teachers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        members {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        readers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listReaderCompassess = /* GraphQL */ `
  query ListReaderCompassess(
    $filter: ModelReaderCompassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReaderCompassess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        first_name
        last_name
        email
        user {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getCompass = /* GraphQL */ `
  query GetCompass($id: ID!) {
    getCompass(id: $id) {
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
        scribe {
          items {
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        teacher {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        member {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        reader {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
      }
      scribe {
        id
        first_name
        last_name
        email
        scribe {
          items {
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        teacher {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        member {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        reader {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
      }
      teachers {
        items {
          id
          first_name
          last_name
          email
          user {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
      members {
        items {
          id
          first_name
          last_name
          email
          user {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
      readers {
        items {
          id
          first_name
          last_name
          email
          user {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                scribe {
                  nextToken
                }
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
                owner
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
                owner
              }
              owner
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
                owner
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
                owner
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
              owner
            }
            nextToken
          }
          owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const listCompasss = /* GraphQL */ `
  query ListCompasss(
    $filter: ModelCompassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        scribe {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        teachers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        members {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        readers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        scribe {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        teachers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        members {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        readers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
          }
          owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              bucket
              region
              key
            }
            nextToken
          }
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
            }
            owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                bucket
                region
                key
              }
              nextToken
            }
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getInteraction = /* GraphQL */ `
  query GetInteraction($id: ID!) {
    getInteraction(id: $id) {
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
            }
            owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                bucket
                region
                key
              }
              nextToken
            }
            owner
          }
          nextToken
        }
        owner
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
          owner {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
        }
        owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                bucket
                region
                key
              }
              nextToken
            }
            owner
          }
          bucket
          region
          key
        }
        nextToken
      }
      owner
    }
  }
`;
export const listInteractions = /* GraphQL */ `
  query ListInteractions(
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                scribe {
                  nextToken
                }
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
                owner
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
                owner
              }
              owner
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
                owner
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
                owner
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
              owner
            }
            nextToken
          }
          owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
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
                owner
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
                owner
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
              owner
            }
            bucket
            region
            key
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getStep = /* GraphQL */ `
  query GetStep($id: ID!) {
    getStep(id: $id) {
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
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        scribe {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        teachers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        members {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        readers {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listSteps = /* GraphQL */ `
  query ListSteps(
    $filter: ModelStepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                scribe {
                  nextToken
                }
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
                owner
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
                owner
              }
              owner
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
                owner
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
                owner
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
              owner
            }
            nextToken
          }
          owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          owner
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
                owner
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
                owner
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
              owner
            }
            bucket
            region
            key
          }
          nextToken
        }
        owner
      }
      bucket
      region
      key
    }
  }
`;
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
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
                  owner
                }
                session {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
                }
                owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              nextToken
            }
            owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
                  owner
                }
                step {
                  id
                  index
                  name_of_step
                  description_of_step
                  color
                  createdAt
                  owner
                }
                attachments {
                  nextToken
                }
                owner
              }
              bucket
              region
              key
            }
            nextToken
          }
          owner
        }
        bucket
        region
        key
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      createdAt
      commenter {
        id
        first_name
        last_name
        email
        scribe {
          items {
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        teacher {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        member {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        reader {
          items {
            id
            first_name
            last_name
            email
            user {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            owner
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
            owner {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
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
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          scribe {
            id
            first_name
            last_name
            email
            scribe {
              items {
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            teacher {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            member {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            reader {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              nextToken
            }
            owner
          }
          teachers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          members {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          readers {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
            }
            owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
                  owner
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
                  owner
                }
                nextToken
              }
              owner
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
                owner {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
                  owner
                }
                bucket
                region
                key
              }
              nextToken
            }
            owner
          }
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        commenter {
          id
          first_name
          last_name
          email
          scribe {
            items {
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
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          teacher {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          member {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            nextToken
          }
          reader {
            items {
              id
              first_name
              last_name
              email
              user {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
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
                  owner
                }
                scribe {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
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
              owner {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              scribe {
                id
                first_name
                last_name
                email
                scribe {
                  nextToken
                }
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
                owner
              }
              teachers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              members {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              readers {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              sessions {
                items {
                  id
                  name_of_session
                  description_of_session
                  createdAt
                  owner
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
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
          owner
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
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            scribe {
              id
              first_name
              last_name
              email
              scribe {
                items {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                nextToken
              }
              teacher {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              member {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                nextToken
              }
              reader {
                items {
                  id
                  first_name
                  last_name
                  email
                  owner
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
              owner
            }
            teachers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            members {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
              }
              nextToken
            }
            readers {
              items {
                id
                first_name
                last_name
                email
                user {
                  id
                  first_name
                  last_name
                  email
                  owner
                }
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                owner
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
                compass {
                  id
                  name_of_compass
                  description_of_compass
                  createdAt
                  compassType
                }
                owner
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
                scribe {
                  nextToken
                }
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
                owner
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
                owner
              }
              owner
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
                owner
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
                owner
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
              owner
            }
            nextToken
          }
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
