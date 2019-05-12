import React from "react";
import { create } from "react-test-renderer";
import LogCard from "../LogCard";

describe("Log Card", () => {
  test("it matches the snapshot", () => {
    const component = create(
    <LogCard 
        key={'1'} 
        logId={'2'}
        phaseTitle={'my title'}
        timestamp={123}
        text={'abc 123'}
        deleteHandler={undefined} 
        updateHandler={undefined}
    />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});