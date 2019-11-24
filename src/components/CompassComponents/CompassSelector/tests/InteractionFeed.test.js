import React from "react";
import { CompassContext } from "../../../../context/CompassPage/context"
import { ReviewModalContext } from "../../../../context/ReviewModal/context"
import InteractionFeed from "../InteractionFeed"
import {render, waitForElement, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const renderApp = ( compassProps, reviewProps ) => {

  return  render( 
    <CompassContext.Provider value={compassProps}>
      <ReviewModalContext.Provider value={reviewProps}>
        <InteractionFeed /> 
      </ReviewModalContext.Provider>
    </CompassContext.Provider >
  )
}

describe('testing Interaction Feed', () => {
  let compassProps = {}
  let reviewProps = {} 
  beforeEach(() => {
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

  afterEach( cleanup )

  test('Show default values with given interactions', async () => {
    compassProps.interactions = [
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
    
    const {getByText} = renderApp(compassProps, reviewProps)

    const label = await waitForElement(() => getByText("Recent Logs"));
    const step1 = await waitForElement(() => getByText("Grasp Challenge"))
    const step2 = await waitForElement(() => getByText("Prototype"))

    expect(label).toBeInTheDocument();
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();

  });

  
});