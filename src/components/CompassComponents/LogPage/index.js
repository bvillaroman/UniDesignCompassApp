import React from "react";
import Logger from "./logger"
import {userLogger} from "../context"

const LogPage = (props) => {
  const {logs} = userLogger()
  return (
    <>
      <Logger />
    </>
)};
export default LogPage;
