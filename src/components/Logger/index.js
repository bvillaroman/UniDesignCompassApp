import React from "react";
import Log from "./Log"
import {Box, InfiniteScroll} from "grommet"

const Logger = (props) => {
  const Logs = props.logs !== [] ? props.logs : ["Start Logging!"]
  
  return (
  <Box height="small" overflow="auto">
    <InfiniteScroll items={Logs} show={Logs.length-1}>
      { (item) => (<Log log={item} />) }
    </InfiniteScroll>
  </Box>
  );
}
export default Logger;

