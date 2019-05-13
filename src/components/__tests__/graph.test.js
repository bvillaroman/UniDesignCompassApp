import React from "react";
import { create } from "react-test-renderer";
import Graph from "../Graph";

describe("Graph", () => {
  test("it matches the snapshot", () => {
    const component = create(
    <Graph 
        processId={'ec468ab1-9ed8-41fe-a88a-3c85cdbc7fc6'}
    />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});