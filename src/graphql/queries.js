/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
        user {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
              }
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
              }
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
              }
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
              }
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
              }
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
              }
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
          scribe {
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
              }
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
              }
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
              }
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
export const getTeacherCompasses = `query GetTeacherCompasses($id: ID!) {
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
      scribe {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
              teacher {
                nextToken
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
        nextToken
      }
    }
  }
}
`;
export const listTeacherCompassess = `query ListTeacherCompassess(
  $filter: ModelTeacherCompassesFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeacherCompassess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          items {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getMemberCompasses = `query GetMemberCompasses($id: ID!) {
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
      scribe {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
              teacher {
                nextToken
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
        nextToken
      }
    }
  }
}
`;
export const listMemberCompassess = `query ListMemberCompassess(
  $filter: ModelMemberCompassesFilterInput
  $limit: Int
  $nextToken: String
) {
  listMemberCompassess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          items {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getReaderCompasses = `query GetReaderCompasses($id: ID!) {
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
      scribe {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
              teacher {
                nextToken
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
        nextToken
      }
    }
  }
}
`;
export const listReaderCompassess = `query ListReaderCompassess(
  $filter: ModelReaderCompassesFilterInput
  $limit: Int
  $nextToken: String
) {
  listReaderCompassess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          items {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getCompass = `query GetCompass($id: ID!) {
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        nextToken
      }
    }
    scribe {
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
          user {
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        nextToken
      }
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
              }
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
              }
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
              }
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
              }
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
              }
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
              }
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
              }
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
              }
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
              }
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
          scribe {
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
              }
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
              }
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
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
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
          scribe {
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
              }
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
              }
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
              }
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
      createdAt
      compassType
      owner {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
      scribe {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
              teacher {
                nextToken
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
      scribe {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
              teacher {
                nextToken
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              }
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
              }
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
              }
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
              teacher {
                nextToken
              }
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          scribe {
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
              }
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
              }
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
              }
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
              teacher {
                nextToken
              }
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
          owner {
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
          scribe {
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
              }
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
              }
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
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
      scribe {
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
              teacher {
                nextToken
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          scribe {
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
              }
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
              }
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
              }
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
              teacher {
                nextToken
              }
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
          owner {
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
          scribe {
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
              }
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
              }
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
              }
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
              teacher {
                nextToken
              }
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
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    createdAt
    commenter {
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
          user {
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
          compass {
            id
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
          compass {
            id
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
          compass {
            id
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
          scribe {
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
              }
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
              }
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
              }
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
            nextToken
          }
        }
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
        owner {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
        }
        scribe {
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
              user {
                id
                first_name
                last_name
                email
              }
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
              }
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
              }
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
            nextToken
          }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
  }
}
`;
export const listComments = `query ListComments(
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
              teacher {
                nextToken
              }
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
          owner {
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
          scribe {
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
              }
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
              }
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
              }
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
              teacher {
                nextToken
              }
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
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
