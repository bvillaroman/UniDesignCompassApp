import React from "react";
import { CompassContext } from "../../../../context/CompassPage/context";
import { GlobalContext } from "../../../../context/context";
import * as Queries from "../../../../utils/queries"
import TeachersPermission from "../NewTeacherPermission";
import { renderUnit } from "../../../../utils/testing"
import CompassStateMock from "../../../../context/CompassPage/stateMock"
import DashboardStateMock from "../../../../context/DashboardPage/stateMock"
import ReviewStateMock from "../../../../context/ReviewModal/stateMock"
import GlobalStateMock from "../../../../context/stateMock"
import { render, waitForElement, cleanup, fireEvent } from '@testing-library/react';
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
        user: { email: "kennytanzxc1@gmail.com" }
      },
    }
    jest.spyOn(Queries, 'getUsers').mockImplementation(() => Promise.resolve("bvillaroman@gmail.com"));
  })

  afterEach(cleanup)

  test('Show default Compass Permission', async () => {
    const compass = {
      'id': "fac4da0b-4714-4a1f-a48d-abeace45bdfe",
      'name_of_compass': "Edge Case Test",
      'description_of_compass': "-",
      'createdAt': "2020-01-03T16:42:31.747Z",
      'compassType': "default",
      'owner': {
        'id': "8981eb9b-2d7a-4f8e-95c2-14b0bf3f11ae",
        'first_name': "Alex",
        'last_name': "Tang",
        'email': "kennytanzxc1@gmail.com"
      },
      'scribe': {
        'id': "8981eb9b-2d7a-4f8e-95c2-14b0bf3f11ae",
        'first_name': "Alex",
        'last_name': "Tang",
        'email': "kennytanzxc1@gmail.com"
      },
      'teachers': {
        'items': [
          {
            'id': "4ba826ea-d8ad-48d8-be6e-618cdd1d4ad0",
            'first_name': "Ken",
            'last_name': "T",
            'email': "wtankenny@gmail.com"
          }
        ]
      },
      'members': {
        'items': [
          {
            'id': "add38924-1e7b-4a95-aa7a-8f9732ad3187",
            'first_name': "K",
            'last_name': "Tan",
            'email': "ktan000@citymail.cuny.edu"
          }
        ]
      },
      'readers': {
        'items': [
          {
            'id': "e6e74898-00a9-41dd-8129-b60f18b81fd4",
            'first_name': "Testfdsad",
            'last_name': "fdsafafs",
            'email': "xxazngam3rxx@gmail.com"
          }
        ]
      }
    }

    props.compassProps.compass = compass

    const { getByText } = renderUnit(<TeachersPermission />, props)

    const CompassSteps = await waitForElement(() => getByText("Add Teacher"))

    expect(CompassSteps).toBeInTheDocument();
  })
})