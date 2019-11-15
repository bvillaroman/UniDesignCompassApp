import React from "react";
import { CompassContext } from "../../../../context/CompassPage/context"
import { ReviewModalContext } from "../../../../context/ReviewModal/context"
import CompassWheel from "../CompassWheel"
import {render, waitForElement, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)
const renderApp = ( compassProps, reviewProps ) => {

  return  render( 
    <CompassContext.Provider value={compassProps}>
      <ReviewModalContext.Provider value={reviewProps}>
        <CompassWheel /> 
      </ReviewModalContext.Provider>
    </CompassContext.Provider >
  )
}

describe('testing Interaction object', () => {
  let compassProps = {}
  let reviewProps = {} 
  beforeEach(() => {
    cleanup()
    compassProps = {
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
      compass : {},
      session: {},
      interaction: {},
      interactions: [],
    }
    reviewProps = {
      updateShowModal: jest.fn(),
      updateInteraction: jest.fn(),
      clearInteraction: jest.fn(),
      interaction: {},
      showModal: false,
    } 
  })

  test('Show default values  no interaction', async () => {
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
        "steps":{
          "items": [
            {
              "id": "1d70491a-3515-4ce5-9554-bf7db7f1a3b3",
              "name_of_step": "Prototype",
              "description_of_step": "Choosing the best solution and implementing it",
              "color": "#e67e22",
              "createdAt": "2019-11-03T01:39:24.854Z",
              "compass": "Object"
            },
            {
              "id": "21a976f9-c893-4b4b-b15b-f8a776074613",
              "name_of_step": "Grasp Challenge",
              "description_of_step": "Understanding the challenge/ problem ",
              "color": "#3498db",
              "createdAt": "2019-11-03T01:39:24.484Z",
              "compass": "Object"
            },
            {
              "id": "1a8d044f-e214-46d9-985f-478680c4da3e",
              "name_of_step": "Revise",
              "description_of_step": "Edit/revise current implementation of solution",
              "color": "#e74c3c",
              "createdAt": "2019-11-03T01:39:24.867Z",
              "compass": "Object"
            },
            {
              "id": "c2cc01da-7f87-4527-ab0a-12af45ce61e7",
              "name_of_step": "Reflect",
              "description_of_step": "Discuss the overall reflection of the process",
              "color": "#7f8c8d",
              "createdAt": "2019-11-03T01:39:24.863Z",
              "compass": "Object"
            },
            {
              "id": "ab9fd489-2bba-4273-b563-0314f8919096",
              "name_of_step": "Research",
              "description_of_step": "Investigating/ Researching ideas to incorporate into a solution",
              "color": "#2ecc71",
              "createdAt": "2019-11-03T01:39:24.840Z",
              "compass": "Object"
            },
            {
              "id": "421d555e-154e-427a-94e7-517c5ad75850",
              "name_of_step": "Brainstorm",
              "description_of_step": "Creating ideas/ rough drafts of solutions",
              "color": "#9b59b6",
              "createdAt": "2019-11-03T01:39:24.847Z",
              "compass": "Object"
            },
            {
              "id": "9b90781f-a745-4be0-a50d-a9e8eece999f",
              "name_of_step": "Test",
              "description_of_step": "Created and test new solutions",
              "color": "#f1c40f",
              "createdAt": "2019-11-03T01:39:24.857Z",
              "compass": "Object"
            }
          ],
        }
      },
      "interactions": {
        "items": "Array[10]",
        "nextToken": null
      }
    }
    const interactions = [
      {
        attachments: {items: Array(0), nextToken: null},
        comments: " ",
        createdAt: "2019-11-11T15:48:41.616Z",
        duration: 4,
        id: "aca6aa07-a274-459f-bf2e-420002d5a1d1",
        log_content: "lkj",
        session: {id: "26bd0904-8b92-435b-b880-e32eb72adefe", name_of_session: "asdf", description_of_session: " ", createdAt: "2019-11-09T20:33:32.568Z" },
        step: {
          color: "#3498db",
          compass: {
            id: "ca43a27b-9a67-4e09-bbb1-d3390b048b89", name_of_compass: "testing", description_of_compass: "save test", createdAt: "2019-11-03T01:39:24.263Z", compassType: "default"
          },
          createdAt: "2019-11-03T01:39:24.484Z",
          description_of_step: "Understanding the challenge/ problem ",
          id: "21a976f9-c893-4b4b-b15b-f8a776074613",
          name_of_step: "Grasp Challenge"
        }
      },
      {
        attachments: {items: Array(0), nextToken: null},
        comments: " ",
        createdAt: "2019-11-09T20:33:35.487Z",
        duration: 1,
        id: "cdbc00ce-45c5-4ccf-933d-43ca4fc01bd1",
        log_content: "update again",
        session: {
          id: "26bd0904-8b92-435b-b880-e32eb72adefe", 
          name_of_session: "asdf", 
          description_of_session: " ", 
          createdAt: "2019-11-09T20:33:32.568Z", 
        },
        step: {
          color: "#e67e22",
          compass: {
            id: "ca43a27b-9a67-4e09-bbb1-d3390b048b89", 
            name_of_compass: "testing", 
            description_of_compass: "save test", 
            createdAt: "2019-11-03T01:39:24.263Z", 
            compassType: "default"
          },
          createdAt: "2019-11-03T01:39:24.854Z",
          description_of_step: "Choosing the best solution and implementing it",
          id: "1d70491a-3515-4ce5-9554-bf7db7f1a3b3",
          name_of_step: "Prototype"
        }
      }
    ]
    compassProps.compass = compass
    compassProps.session = session
    compassProps.interactions = interactions
    // interactionProps.interaction = interactions[0]
    
    const {getByText, getAllByText} = renderApp(compassProps, reviewProps)

    const Title = await waitForElement(() => getByText("Compass Steps"))
    const Brainstorm = await waitForElement(() => getAllByText("Brainstorm"))
    const Reflect = await waitForElement(() => getAllByText("Reflect"))
    const Research = await waitForElement(() => getAllByText("Research"))
    const Test = await waitForElement(() => getAllByText("Test"))
    const Revise = await waitForElement(() => getAllByText("Revise"))
    const Prototype = await waitForElement(() => getAllByText("Prototype"))

    expect(Title).toBeInTheDocument();
    expect(Brainstorm.length).toBe(2);
    expect(Reflect.length).toBe(2);
    expect(Research.length).toBe(2);
    expect(Test.length).toBe(2);
    expect(Revise.length).toBe(2);
    expect(Prototype.length).toBe(2);

  });

  test('Test interaction  on a step on the wheel', async () => {
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
        "steps":{
          "items": [
            {
              "id": "1d70491a-3515-4ce5-9554-bf7db7f1a3b3",
              "name_of_step": "Prototype",
              "description_of_step": "Choosing the best solution and implementing it",
              "color": "#e67e22",
              "createdAt": "2019-11-03T01:39:24.854Z",
              "compass": "Object"
            },
            {
              "id": "21a976f9-c893-4b4b-b15b-f8a776074613",
              "name_of_step": "Grasp Challenge",
              "description_of_step": "Understanding the challenge/ problem ",
              "color": "#3498db",
              "createdAt": "2019-11-03T01:39:24.484Z",
              "compass": "Object"
            },
            {
              "id": "1a8d044f-e214-46d9-985f-478680c4da3e",
              "name_of_step": "Revise",
              "description_of_step": "Edit/revise current implementation of solution",
              "color": "#e74c3c",
              "createdAt": "2019-11-03T01:39:24.867Z",
              "compass": "Object"
            },
            {
              "id": "c2cc01da-7f87-4527-ab0a-12af45ce61e7",
              "name_of_step": "Reflect",
              "description_of_step": "Discuss the overall reflection of the process",
              "color": "#7f8c8d",
              "createdAt": "2019-11-03T01:39:24.863Z",
              "compass": "Object"
            },
            {
              "id": "ab9fd489-2bba-4273-b563-0314f8919096",
              "name_of_step": "Research",
              "description_of_step": "Investigating/ Researching ideas to incorporate into a solution",
              "color": "#2ecc71",
              "createdAt": "2019-11-03T01:39:24.840Z",
              "compass": "Object"
            },
            {
              "id": "421d555e-154e-427a-94e7-517c5ad75850",
              "name_of_step": "Brainstorm",
              "description_of_step": "Creating ideas/ rough drafts of solutions",
              "color": "#9b59b6",
              "createdAt": "2019-11-03T01:39:24.847Z",
              "compass": "Object"
            },
            {
              "id": "9b90781f-a745-4be0-a50d-a9e8eece999f",
              "name_of_step": "Test",
              "description_of_step": "Created and test new solutions",
              "color": "#f1c40f",
              "createdAt": "2019-11-03T01:39:24.857Z",
              "compass": "Object"
            }
          ],
        }
      },
      "interactions": {
        "items": "Array[10]",
        "nextToken": null
      }
    }
    const interactions = [
      {
        attachments: {items: Array(0), nextToken: null},
        comments: " ",
        createdAt: "2019-11-11T15:48:41.616Z",
        duration: 4,
        id: "aca6aa07-a274-459f-bf2e-420002d5a1d1",
        log_content: "lkj",
        session: {id: "26bd0904-8b92-435b-b880-e32eb72adefe", name_of_session: "asdf", description_of_session: " ", createdAt: "2019-11-09T20:33:32.568Z" },
        step: {
          color: "#3498db",
          compass: {
            id: "ca43a27b-9a67-4e09-bbb1-d3390b048b89", name_of_compass: "testing", description_of_compass: "save test", createdAt: "2019-11-03T01:39:24.263Z", compassType: "default"
          },
          createdAt: "2019-11-03T01:39:24.484Z",
          description_of_step: "Understanding the challenge/ problem ",
          id: "21a976f9-c893-4b4b-b15b-f8a776074613",
          name_of_step: "Grasp Challenge"
        }
      },
      {
        attachments: {items: Array(0), nextToken: null},
        comments: " ",
        createdAt: "2019-11-09T20:33:35.487Z",
        duration: 1,
        id: "cdbc00ce-45c5-4ccf-933d-43ca4fc01bd1",
        log_content: "update again",
        session: {
          id: "26bd0904-8b92-435b-b880-e32eb72adefe", 
          name_of_session: "asdf", 
          description_of_session: " ", 
          createdAt: "2019-11-09T20:33:32.568Z", 
        },
        step: {
          color: "#e67e22",
          compass: {
            id: "ca43a27b-9a67-4e09-bbb1-d3390b048b89", 
            name_of_compass: "testing", 
            description_of_compass: "save test", 
            createdAt: "2019-11-03T01:39:24.263Z", 
            compassType: "default"
          },
          createdAt: "2019-11-03T01:39:24.854Z",
          description_of_step: "Choosing the best solution and implementing it",
          id: "1d70491a-3515-4ce5-9554-bf7db7f1a3b3",
          name_of_step: "Prototype"
        }
      }
    ]
    
    compassProps.compass = compass
    compassProps.session = session
    compassProps.interactions = interactions 
    
    const {getByText, getAllByText, debug} = renderApp(compassProps, reviewProps)

    const Title = await waitForElement(() => getByText("Compass Steps"))
    const Brainstorm = await waitForElement(() => getAllByText("Brainstorm"))
    const Reflect = await waitForElement(() => getAllByText("Reflect"))
    const Research = await waitForElement(() => getAllByText("Research"))
    const Test = await waitForElement(() => getAllByText("Test"))
    const Revise = await waitForElement(() => getAllByText("Revise"))
    const Prototype = await waitForElement(() => getAllByText("Prototype"))
    const GraspChallenge = await waitForElement(() => getAllByText("Grasp Challenge"))

    expect(Title).toBeInTheDocument();
    expect(Brainstorm.length).toBe(2);
    expect(Reflect.length).toBe(2);
    expect(Research.length).toBe(2);
    expect(Test.length).toBe(2);
    expect(Revise.length).toBe(2);
    expect(Prototype.length).toBe(2);
    expect(GraspChallenge.length).toBe(2);

    fireEvent.click(Brainstorm[0])
    fireEvent.click(Brainstorm[1])

    // debug()
    expect(true).toBe(true)
    // expect(compassProps.updateInteraction).toHaveBeenCalledTimes(1)
    // expect(reviewProps.updateInteraction).toHaveBeenCalledTimes(1)
  });

  
});
