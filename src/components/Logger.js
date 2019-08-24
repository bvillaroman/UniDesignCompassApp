import React ,{ useRef, useEffect} from "react";
import {Box, InfiniteScroll, TextArea} from "grommet"

const LogView = ({logs}) => {
  // const inputEl = useRef(null)
  // const scrollToBottom = () => {
  //   inputEl.current.scrollIntoView({ behavior: "smooth" });
  // }

  // useEffect(() => {
  //   scrollToBottom()
  // },[logs])  

  return (
    <Box height="small" overflow="auto">
      <TextArea>
        {logs}
      </TextArea>
    </Box>
  );
}
export default LogView;

