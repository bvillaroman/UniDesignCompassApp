import React from "react";
import LogView from "../../../components/LogView"
import Logger from "./logger"
import {userLogger} from "../context"

const LogPage = (props) => {
  const {logs} = userLogger()
  return (
    <>
      <LogView logs={logs} />
      <Logger />
    </>
)};
export default LogPage;
