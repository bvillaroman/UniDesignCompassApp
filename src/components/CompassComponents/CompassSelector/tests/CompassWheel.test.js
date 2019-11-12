import React from "react";
import { CompassProvider, intialState } from "../../../../context/CompassPage/context"
import CompassWheel from "../CompassWheel"
import {render, waitForElement, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const renderApp = (compass, session, interactions ) => {
  return  render( 
    <CompassProvider value={{
      updateCompass: jest.fn(),
      updateSession: jest.fn(),
      updateInteraction: jest.fn(),
      updateInteractions: jest.fn(),
      updateTime: jest.fn(),
      clearCompass: jest.fn(),
      clearSession: jest.fn(),
      clearInteraction: jest.fn(),
      clearInteractions: jest.fn(),
      clearTime: jest.fn(),
      ...intialState,
      ...compass,
      ...session,
      ...interactions
    }}>
      <CompassWheel /> 
    </CompassProvider>
  )
}

describe('testing Card Page', () => {
  
  test('Shows Card Body values ', async () => {

    const compass = {
      "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
      "name_of_compass": "testing",
      "description_of_compass": "save test",
      "createdAt": "2019-11-03T01:39:24.263Z",
      "compassType": "default",
      "admins": [
        "bvillaroman@gmail.com"
      ],
      "readers": [],
      "sessions": {
        "items": "Array[4]",
        "nextToken": null
      },
      "steps": {
        "items": "Array[7]",
        "nextToken": null
      }
    }
    const session = {
      "id": "d3509699-9a92-4f95-a5a9-54eac3fd8e8a",
      "name_of_session": "untitled",
      "description_of_session": " ",
      "createdAt": "2019-11-09T21:06:12.574Z",
      "compass": {
        "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
        "name_of_compass": "testing",
        "description_of_compass": "save test",
        "createdAt": "2019-11-03T01:39:24.263Z",
        "compassType": "default",
        "admins": "Array[1]",
        "readers": "Array[0]",
        "sessions": "Object",
        "steps": "Object"
      },
      "interactions": {
        "items": "Array[10]",
        "nextToken": null
      }
    }
    const interactions = [
      {
        "id": "5290def4-6c74-4bd9-b3c7-cbcd1d75e322",
        "duration": 2,
        "log_content": " ",
        "comments": " ",
        "createdAt": "2019-11-09T23:37:30.955Z",
        "session": "Object",
        "step": {
          "id": "1a8d044f-e214-46d9-985f-478680c4da3e",
          "name_of_step": "Revise",
          "description_of_step": "Edit/revise current implementation of solution",
          "color": "#e74c3c",
          "createdAt": "2019-11-03T01:39:24.867Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "a7ac7a58-2d02-4e0e-82e1-ce696ed57834",
        "duration": 0,
        "log_content": " ",
        "comments": " ",
        "createdAt": "2019-11-09T23:37:27.714Z",
        "session": "Object",
        "step": {
          "id": "ab9fd489-2bba-4273-b563-0314f8919096",
          "name_of_step": "Research",
          "description_of_step": "Investigating/ Researching ideas to incorporate into a solution",
          "color": "#2ecc71",
          "createdAt": "2019-11-03T01:39:24.840Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "58bd23e7-cab7-44ab-8575-00ce17e30a5d",
        "duration": 0,
        "log_content": " ",
        "comments": " ",
        "createdAt": "2019-11-09T23:37:25.041Z",
        "session": "Object",
        "step": {
          "id": "1d70491a-3515-4ce5-9554-bf7db7f1a3b3",
          "name_of_step": "Prototype",
          "description_of_step": "Choosing the best solution and implementing it",
          "color": "#e67e22",
          "createdAt": "2019-11-03T01:39:24.854Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "71a920bf-187f-4c2f-8928-72b70cc63849",
        "duration": 0,
        "log_content": " ",
        "comments": " ",
        "createdAt": "2019-11-09T23:37:17.734Z",
        "session": "Object",
        "step": {
          "id": "421d555e-154e-427a-94e7-517c5ad75850",
          "name_of_step": "Brainstorm",
          "description_of_step": "Creating ideas/ rough drafts of solutions",
          "color": "#9b59b6",
          "createdAt": "2019-11-03T01:39:24.847Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "9f63f74b-5a90-4dd9-b810-06925690266c",
        "duration": 0,
        "log_content": " ",
        "comments": " ",
        "createdAt": "2019-11-09T23:37:14.625Z",
        "session": "Object",
        "step": {
          "id": "ab9fd489-2bba-4273-b563-0314f8919096",
          "name_of_step": "Research",
          "description_of_step": "Investigating/ Researching ideas to incorporate into a solution",
          "color": "#2ecc71",
          "createdAt": "2019-11-03T01:39:24.840Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "0e83d1fa-fec5-4c0f-bed6-7a4c196eb70f",
        "duration": 0,
        "log_content": " ",
        "comments": " ",
        "createdAt": "2019-11-09T23:37:10.722Z",
        "session": "Object",
        "step": {
          "id": "c2cc01da-7f87-4527-ab0a-12af45ce61e7",
          "name_of_step": "Reflect",
          "description_of_step": "Discuss the overall reflection of the process",
          "color": "#7f8c8d",
          "createdAt": "2019-11-03T01:39:24.863Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "1c24369d-3ff5-452e-9a7b-75e1bb7575af",
        "duration": 6,
        "log_content": " ",
        "comments": " ",
        "createdAt": "2019-11-09T23:23:55.497Z",
        "session": "Object",
        "step": {
          "id": "1d70491a-3515-4ce5-9554-bf7db7f1a3b3",
          "name_of_step": "Prototype",
          "description_of_step": "Choosing the best solution and implementing it",
          "color": "#e67e22",
          "createdAt": "2019-11-03T01:39:24.854Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "aaf60d30-7f20-4792-8174-254c6915994e",
        "duration": 2,
        "log_content": "asd",
        "comments": " ",
        "createdAt": "2019-11-09T22:19:02.808Z",
        "session": "Object",
        "step": {
          "id": "21a976f9-c893-4b4b-b15b-f8a776074613",
          "name_of_step": "Grasp Challenge",
          "description_of_step": "Understanding the challenge/ problem ",
          "color": "#3498db",
          "createdAt": "2019-11-03T01:39:24.484Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "13a45eb3-c340-4839-a21a-aeec20c0a7dc",
        "duration": 10,
        "log_content": "asdfasdf\nasdasd\nasdasd",
        "comments": " ",
        "createdAt": "2019-11-09T22:13:58.103Z",
        "session": "Object",
        "step": {
          "id": "9b90781f-a745-4be0-a50d-a9e8eece999f",
          "name_of_step": "Test",
          "description_of_step": "Created and test new solutions",
          "color": "#f1c40f",
          "createdAt": "2019-11-03T01:39:24.857Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      },
      {
        "id": "d912a942-23d2-4f99-bb23-0bd21e0f15d6",
        "duration": 378,
        "log_content": "testin",
        "comments": " ",
        "createdAt": "2019-11-09T21:06:15.561Z",
        "session": {
          "id": "d3509699-9a92-4f95-a5a9-54eac3fd8e8a",
          "name_of_session": "untitled",
          "description_of_session": " ",
          "createdAt": "2019-11-09T21:06:12.574Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          },
          "interactions": {
            "items": "Array[10]",
            "nextToken": null
          }
        },
        "step": {
          "id": "9b90781f-a745-4be0-a50d-a9e8eece999f",
          "name_of_step": "Test",
          "description_of_step": "Created and test new solutions",
          "color": "#f1c40f",
          "createdAt": "2019-11-03T01:39:24.857Z",
          "compass": {
            "id": "ca43a27b-9a67-4e09-bbb1-d3390b048b89",
            "name_of_compass": "testing",
            "description_of_compass": "save test",
            "createdAt": "2019-11-03T01:39:24.263Z",
            "compassType": "default",
            "admins": "Array[1]",
            "readers": "Array[0]",
            "sessions": "Object",
            "steps": "Object"
          }
        },
        "attachments": "Object"
      }
    ]
    const {getByText, getByPlaceholderText, queryByPlaceholderText, container} = renderApp(compass,session,interactions)

    const label = await waitForElement(() => getByText("Compass Steps"));

    expect(label).toBeInTheDocument();

  });

  
});
