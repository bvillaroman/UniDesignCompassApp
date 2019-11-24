import React from 'react';
import SummaryLog from './index';
import { navigate } from "gatsby";
import { CompassContext, intialState } from "../../../context/CompassPage/context"
import { ReviewModalContext } from "../../../context/ReviewModal/context"
import { render, waitForElement, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

const renderApp = (compassProps, reviewProps) => {

  return render(
    <CompassContext.Provider value={compassProps}>
      <ReviewModalContext.Provider value={reviewProps}>
        <SummaryLog />
      </ReviewModalContext.Provider>
    </CompassContext.Provider >
  )
}

describe('testing Summary Log', () => {
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
      compass: {},
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

  afterEach(cleanup)

  test('Show default values no interaction', async () => {
    const compass = {
      admins: ["ktan000@citymail.cuny.edu"],
      compassType: "default",
      createdAt: "2019-11-14T21:03:03.823Z",
      description_of_compass: "TESTING",
      id: "2fb1da05-dbba-4e89-b21d-ef883ba5aa63",
      name_of_compass: "Nov 14, test", readers: []
    }

    const interaction = {
      attachments: { items: [], nextToken: null },
      comments: " ",
      createdAt: "2019-11-14T21:03:56.458Z",
      duration: 6,
      id: "de68d741-52a2-41bc-af07-a587fc976573",
      log_content: "rgehiofdkln",
      step: {
        color: "#9b59b6",
        createdAt: "2019-11-14T21:03:04.335Z",
        description_of_step: "Creating ideas/ rough drafts of solutions",
        id: "6ffd8d64-0365-4659-824f-65469be61284",
        name_of_step: "Brainstorm"
      }
    }


    compassProps.compass = compass
    compassProps.interaction = interaction

    const { getByText, getByPlaceholderText, getBy } = renderApp(compassProps, reviewProps)

    const Header = await waitForElement(() => getByText("Log"));
    const EnterLog = await waitForElement(() => getByText("rgehiofdkln"));
    const Attachments = await waitForElement(() => getByText("Attachment"));
    // const AllLogs = await waitForElement(() => getByText("All Log"))

    expect(Header).toBeInTheDocument();
    expect(EnterLog).toBeInTheDocument();
    expect(Attachments).toBeInTheDocument();
    // expect(AllLogs).toBeInTheDocument();
  })


  test('Test Buttons: Edit Logs, All Logs, Add comment', async () => {
    const compass = {
      admins: ["ktan000@citymail.cuny.edu"],
      compassType: "default",
      createdAt: "2019-11-14T21:03:03.823Z",
      description_of_compass: "TESTING",
      id: "2fb1da05-dbba-4e89-b21d-ef883ba5aa63",
      name_of_compass: "Nov 14, test", readers: []
    }

    const interaction = {
      attachments: { items: [], nextToken: null },
      comments: " ",
      createdAt: "2019-11-14T21:03:56.458Z",
      duration: 6,
      id: "de68d741-52a2-41bc-af07-a587fc976573",
      log_content: "rgehiofdkln",
      step: {
        color: "#9b59b6",
        createdAt: "2019-11-14T21:03:04.335Z",
        description_of_step: "Creating ideas/ rough drafts of solutions",
        id: "6ffd8d64-0365-4659-824f-65469be61284",
        name_of_step: "Brainstorm"
      }
    }


    compassProps.compass = compass
    compassProps.interaction = interaction

    const { getByText, getByPlaceholderText } = renderApp(compassProps, reviewProps)

    //const allLogs = await waitForElement(() => getByText("All Logs"))

    //expect(allLogs).toBeInTheDocument();

    fireEvent.click(getByText("Edit Log"));
    expect(reviewProps.updateShowModal).toHaveBeenCalledTimes(1)

    // fireEvent.click(getByText("All Logs"));
    // expect(navigate).toHaveBeenCalledTimes(1)

  })
})