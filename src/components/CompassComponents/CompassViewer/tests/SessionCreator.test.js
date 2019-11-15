import React from "react";
import { CompassContext } from "../../../../context/CompassPage/context"
import { ReviewModalContext } from "../../../../context/ReviewModal/context"
import SessionCreator from "../SessionCreator"
import {render, waitForElement, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const renderApp = ( compassProps, reviewProps ) => {

  return  render( 
    <CompassContext.Provider value={compassProps}>
      <ReviewModalContext.Provider value={reviewProps}>
        <SessionCreator /> 
      </ReviewModalContext.Provider>
    </CompassContext.Provider >
  )
}

describe('testing Session Creator', () => {
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

  test('Show default values with given interactions/compass/session', async () => {
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
        "items": [
          {
            "id": "76b0f3df-7cd5-4dee-b452-1a734036ef3d",
            "name_of_session": "untitled",
            "description_of_session": " ",
            "createdAt": "2019-11-08T01:33:53.022Z",
            "compass": "Object",
            "interactions": "Object"
          },
          {
            "id": "e3ed7904-6ba0-4f85-a9c5-ce6cb33faabc",
            "name_of_session": "untitled",
            "description_of_session": " ",
            "createdAt": "2019-11-08T01:25:13.529Z",
            "compass": "Object",
            "interactions": "Object"
          }
        ],
        "nextToken": null
      },
      "steps": {
        "items": "Array[7]",
        "nextToken": null
      }
    }
              
    
    compassProps.compass = compass 
    
    const {getByText, getAllByText} = renderApp(compassProps, reviewProps)

    const Sessions = await waitForElement(() => getByText("Sessions"));
    const Title = await waitForElement(() => getByText("Title"));
    const CreatedOn = await waitForElement(() => getByText("Created on"));
    const NewSessions = await waitForElement(() => getByText("New Session"))
    const SessionTitles = await waitForElement(() => getAllByText("untitled"))
    const date = await waitForElement(() => getAllByText("November 7, 2019"))

    expect(Sessions).toBeInTheDocument();
    expect(Title).toBeInTheDocument();
    expect(CreatedOn).toBeInTheDocument();
    expect(NewSessions).toBeInTheDocument();
    expect(SessionTitles.length).toBe(2);
    expect(date.length).toBe(2);
  });

  
});
