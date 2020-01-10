import React from "react";
import {renderUnit} from "../../../utils/testing"
// import * as Queries from "../../../utils/queries"
// import * as Mutations from "../../../utils/mutations"
import CompassStateMock from "../../../context/CompassPage/stateMock"
import DashboardStateMock from "../../../context/DashboardPage/stateMock"
import ReviewStateMock from "../../../context/ReviewModal/stateMock"
import GlobalStateMock from "../../../context/stateMock"
import CompassWheel from "../CompassWheel"
import { waitForElement, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('testing Compass Section', () => {
  let props = {}
  beforeEach(() => {
    props = {
      compassProps: CompassStateMock,
      reviewProps: ReviewStateMock,
      dashboardProps: DashboardStateMock,
      globalProps: {
        ...GlobalStateMock,
        user: {email: "bvillaroman@gmail.com"}
      },
    }    
    // jest.spyOn(Queries, 'getAttachment').mockImplementation(() => Promise.resolve("https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjPnuHH-ffmAhVChOAKHV1bCjsQjRx6BAgBEAQ&url=https%3A%2F%2Fbungostraydogs.fandom.com%2Fwiki%2FOsamu_Dazai&psig=AOvVaw1Uc-lIARxCaH0LYMeWBHdx&ust=1578708489474063")); 
  })

  afterEach( cleanup )

  test('Show default values with given interactions/compass/session', async () => {
    const compass =  {          
      "id": "5786cfd4-41d6-4a73-9128-46a702ef5c88",
      "name_of_compass": "Untitled",
      "description_of_compass": "-",
      "createdAt": "2020-01-06T17:39:38.719Z",
      "compassType": "default",
      "owner": {
        "id": "1fa1c33e-a31a-4d9d-a7e9-10a5b07c9b7b",
        "first_name": "abraham",
        "last_name": "villaroman",
        "email": "bvillaroman@gmail.com",
        "teacher": {
          "items": [],
          "nextToken": null
        },
        "member": "{items: Array(0), nextToken: null}",
        "reader": "{items: Array(1), nextToken: null}",
        "compass": "{items: Array(5), nextToken: null}"
      },
      "scribe": {
        "id": "1fa1c33e-a31a-4d9d-a7e9-10a5b07c9b7b",
        "first_name": "abraham",
        "last_name": "villaroman",
        "email": "bvillaroman@gmail.com",
        "teacher": "{items: Array(0), nextToken: null}",
        "member": "{items: Array(0), nextToken: null}",
        "reader": "{items: Array(1), nextToken: null}",
        "compass": "{items: Array(5), nextToken: null}"
      },
      "teachers": {
        "items": "[]",
        "nextToken": null
      },
      "members": {
        "items": "[]",
        "nextToken": null
      },
      "readers": {
        "items": "[]",
        "nextToken": null
      },
      "sessions": {
        "items": "[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]",
        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BRml1TzRnTklieTNyRGdJelpvMFA0ckFBQUM2VENDQXVVR0NTcUdTSWIzRFFFSEJxQ0NBdFl3Z2dMU0FnRUFNSUlDeXdZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF6R1pMQTB0WjM5RndMVWJha0NBUkNBZ2dLY241aFFXaksxNURQOXUrZFhuTllSVGttdENRd1NrWUczbU0yeXpJcU5JNnVPOCtoTm1nUGxHRE1peUtLYU00SmJnK3QwVzRFS1FqajB4bkc2Y2JvdVVzTEtqa1VxZGVGWmdGWFJQUytoeUFlL3JPNmgxNnpzTCtyc2tCOUUyemlvY1FzS25sQitQbXhVZWVuay9iUnNRd0l1WUovWlcvN25Jb1lzNUx6ZTRnMXVU..."
      },
      "steps": {
        "items": "[{…}, {…}, {…}, {…}, {…}, {…}, {…}]",
        "nextToken": null
      }
    }
    const session = {
      "id": "d4b091f8-6d3e-45a1-8902-fab61080930a",
      "name_of_session": "Session on January 7, 2020 at 11:8 p.m.",
      "description_of_session": " ",
      "createdAt": "2020-01-08T04:08:33.458Z",
      "compass": {
        "id": "5786cfd4-41d6-4a73-9128-46a702ef5c88",
        "name_of_compass": "Untitled",
        "description_of_compass": "-",
        "createdAt": "2020-01-06T17:39:38.719Z",
        "compassType": "default",
        "owner": "{compass: {…}, email: \"bvillaroman@gmail.com\", firs…}",
        "scribe": "{compass: {…}, email: \"bvillaroman@gmail.com\", firs…}",
        "teachers": "{items: Array(0), nextToken: null}",
        "members": "{items: Array(0), nextToken: null}",
        "readers": "{items: Array(0), nextToken: null}",
        "sessions": "{items: Array(10), nextToken: \"eyJ2ZXJzaW9uIjoyLCJ0…}",
        "steps": {items: [
          {
            id: "df6d0d32-3f0f-447b-9ce9-299ac06df5d4",
            name_of_step: "Revise",
            description_of_step: "Edit/revise current implementation of solution",
            color: "#e74c3c",
            createdAt: "2020-01-06T17:39:39.604Z",
          },
          {
            id: "9e43b99e-4e45-4cf5-bc9f-d9940a2e9f89",
            name_of_step: "Research",
            description_of_step: "Investigating/ Researching ideas to incorporate into a solution",
            color: "#2ecc71",
            createdAt: "2020-01-06T17:39:39.617Z"
          },
          {
            id: "18b15fc2-3ba5-4e44-b705-fad5b93b969e",
            name_of_step: "Brainstorm",
            description_of_step: "Creating ideas/ rough drafts of solutions",
            color: "#9b59b6",
            createdAt:"2020-01-06T17:39:39.603Z"
          },
          {
            id: "3882e2ac-c954-4ed3-bf0b-f723e288d9a8",
            name_of_step: "Grasp Challenge",
            description_of_step: "Understanding the challenge/ problem ",
            color: "#3498db",
            createdAt: "2020-01-06T17:39:39.424Z"
          },{
            id: "cc4305aa-4484-49bd-89da-91bc928c2066",
            name_of_step: "Test",
            description_of_step: "Created and test new solutions",
            color: "#f1c40f",
            createdAt: "2020-01-06T17:39:39.534Z"
          },{
            id: "62133a37-bc05-40dd-a475-5664894dfaa0",
            name_of_step: "Prototype",
            description_of_step: "Choosing the best solution and implementing it",
            color: "#e67e22",
            createdAt: "2020-01-06T17:39:39.595Z"
          },{
          id: "fdc6dd28-0d18-48d3-a08b-986585575d05",
          name_of_step: "Reflect",
          description_of_step: "Discuss the overall reflection of the process",
          color: "#7f8c8d",
          createdAt: "2020-01-06T17:39:39.621Z"
        }
        ], nextToken: null
      }
      },
      "comments": {
        "items": "[{…}, {…}, {…}, {…}, {…}]",
        "nextToken": null
      },
      "interactions": {
        "items": "[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]",
        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BRnlkV0lvdjRCaXZKTENPQkxaUE9DeUFBQUM4VENDQXUwR0NTcUdTSWIzRFFFSEJxQ0NBdDR3Z2dMYUFnRUFNSUlDMHdZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF3OGVHT0hIdFc0TFlHSlA4Z0NBUkNBZ2dLa0VYaGc1UkQ4cTRSR0xDLzc2Q2QyMW9RUGdYRXpTODN1ajZlelIwbkdmYXVxL1NYd1dIZGdTbHZTWE5BcVBwd1gzL2oweTlrYzNzWXg1YzI0dUFQczgvZTIwV2xTaEVyejFFbGRXSjBpQ0plSXlJSnJwVitwTDNlZG1mY216eFQwV09sS0FYbkpYcGtSSVNsc1NaazBuUlZBa0x1NE9WbGRTbTNwMERKU2prRk83..."
      }
    }    
    const interactions = [
      {
        "id": "de630a12-106c-499c-94ca-e85e49dd3e20",
        "duration": 259,
        "log_content": "starting a log for the day and hopefully it works and saves",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T17:14:25.606Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#7f8c8d\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(2), nextToken: null}"
      },
      {
        "id": "ca4f7b28-5a85-450f-95bb-b4085a2660f3",
        "duration": 243,
        "log_content": "fixing this ya diggggggasdfasdfasdfasdf",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:34:23.742Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#e67e22\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      },
      {
        "id": "eedac103-06d9-4479-bd43-cf9aad7d7b15",
        "duration": 38,
        "log_content": "please work 3ya digggggggggggggg  asdfdfdsaeasd",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:21:41.565Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#3498db\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      },
      {
        "id": "044dd818-82b7-4121-a4b2-e154868f376a",
        "duration": 5,
        "log_content": "please work 2",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:21:33.822Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#9b59b6\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      },
      {
        "id": "8ab0ae51-0b0a-4826-a346-a6c20c93bf83",
        "duration": 8,
        "log_content": "please work 1",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:20:33.428Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#f1c40f\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      },
      {
        "id": "8cb8900e-7cee-4bdf-8112-42d571443922",
        "duration": 0,
        "log_content": "editing some log again",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:20:27.285Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#3498db\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      },
      {
        "id": "b3c4fb81-3ec1-4b85-af6e-4aa93e3e2818",
        "duration": 2,
        "log_content": " ",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:19:48.025Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#9b59b6\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      },
      {
        "id": "d80d28f5-2fc3-454a-8a04-ad36be1baa4d",
        "duration": 0,
        "log_content": " ",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:18:20.275Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#e74c3c\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      },
      {
        "id": "090b27fb-b16d-48c9-b460-9093b008fec4",
        "duration": 4,
        "log_content": "please work 2",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:17:39.761Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#3498db\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      },
      {
        "id": "f7f3436b-8b40-48f5-a712-910a48568916",
        "duration": 7,
        "log_content": "asdfasdfasdfdf",
        "comments": "[\" \"]",
        "createdAt": "2020-01-08T04:10:35.397Z",
        "session": "{createdAt: \"2020-01-08T04:08:33.458Z\", compass: {……}",
        "step": "{color: \"#2ecc71\", createdAt: \"2020-01-06T17:39:39.…}",
        "attachments": "{items: Array(0), nextToken: null}"
      }
    ]
        
    props.compassProps.compass = compass
    props.compassProps.session = session
    props.compassProps.interactions = interactions 
    
    const {getByText} = renderUnit(<CompassWheel />, props)

    const CompassSteps = await waitForElement(() => getByText("Compass Steps"))
    const Brainstorm = await waitForElement(() => getByText("Brainstorm"))
    const Reflect = await waitForElement(() => getByText("Reflect"))
    const Research = await waitForElement(() => getByText("Research"))
    const Test = await waitForElement(() => getByText("Test"))
    const Revise = await waitForElement(() => getByText("Revise"))
    const Prototype = await waitForElement(() => getByText("Prototype"))
    const GraspChallenge = await waitForElement(() => getByText("Grasp Challenge"))

    expect(CompassSteps).toBeInTheDocument();
    expect(Brainstorm).toBeInTheDocument();
    expect(Reflect).toBeInTheDocument();
    expect(Research).toBeInTheDocument();
    expect(Test).toBeInTheDocument();
    expect(Revise).toBeInTheDocument();
    expect(Prototype).toBeInTheDocument();
    expect(GraspChallenge).toBeInTheDocument();

  });

  
});
