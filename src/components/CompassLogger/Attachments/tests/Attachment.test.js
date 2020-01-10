import React from "react";
import {renderUnit} from "../../../../utils/testing"
import * as Queries from "../../../../utils/queries"
// import * as Mutations from "../../../../utils/mutations"
import CompassStateMock from "../../../../context/CompassPage/stateMock"
import DashboardStateMock from "../../../../context/DashboardPage/stateMock"
import ReviewStateMock from "../../../../context/ReviewModal/stateMock"
import GlobalStateMock from "../../../../context/stateMock"
import Attachment from "../Attachment"
import { render, waitForElement, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe('testing attachment', () => {
  let props = {}
  beforeEach(() => {
    props = {
      compassProps: CompassStateMock,
      reviewProps: ReviewStateMock,
      dashboardProps: DashboardStateMock,
      globalProps: GlobalStateMock,
    }    
    jest.spyOn(Queries, 'getAttachment').mockImplementation(() => Promise.resolve("https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjPnuHH-ffmAhVChOAKHV1bCjsQjRx6BAgBEAQ&url=https%3A%2F%2Fbungostraydogs.fandom.com%2Fwiki%2FOsamu_Dazai&psig=AOvVaw1Uc-lIARxCaH0LYMeWBHdx&ust=1578708489474063")); 
  })

  afterEach( cleanup )

  test('photo attachment is shown correctly', async () => {
    let attachment = {
      "name": "film 5.psd",
      "type": "image/vnd.adobe.photoshop",
      "interaction": {
        "id": "de630a12-106c-499c-94ca-e85e49dd3e20",
        "duration": 219,
        "log_content": "starting a log for the day and hopefully it works and saves",
        "comments": [
          " "
        ],
        "createdAt": "2020-01-08T17:14:25.606Z",
        "session": {
          "id": "d4b091f8-6d3e-45a1-8902-fab61080930a",
          "name_of_session": "Session on January 7, 2020 at 11:8 p.m.",
          "description_of_session": " ",
          "createdAt": "2020-01-08T04:08:33.458Z",
          "compass": "{createdAt: \"2020-01-06T17:39:38.719Z\", compassType…}",
          "comments": "{nextToken: null}",
          "interactions": "{nextToken: \"eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSG…}"
        },
        "step": {
          "id": "fdc6dd28-0d18-48d3-a08b-986585575d05",
          "name_of_step": "Reflect",
          "description_of_step": "Discuss the overall reflection of the process",
          "color": "#7f8c8d",
          "createdAt": "2020-01-06T17:39:39.621Z",
          "compass": "{createdAt: \"2020-01-06T17:39:38.719Z\", compassType…}"
        },
        "attachments": {
          "items": "[{…}, {…}]",
          "nextToken": null
        }
      },
      "bucket": "unidesigncompassapp38d5a61bf2244355a49f78f038a747ef-dev",
      "region": "us-east-1",
      "key": "bd68ca07-0782-4a41-903c-1fd77be6a8bcfilm 5.psd"      
    }
    
    const {getByText} = render(<Attachment attachment={attachment}/>)

    const Title = await waitForElement(() => getByText("film 5.psd"));
    const interaction = await waitForElement(() => getByText("Reflect"));

    expect(interaction).toBeInTheDocument();
    expect(Title).toBeInTheDocument();
  });

  
});
