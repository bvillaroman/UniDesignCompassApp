import React ,{ useRef, useEffect} from "react";
import Log from "./Log"
import {Box, InfiniteScroll} from "grommet"

const LogView = ({logs}) => {
  const inputEl = useRef(null)
  const scrollToBottom = () => {
    inputEl.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom()
  },[logs])  

  return (
    <Box height="small" overflow="auto">
      <InfiniteScroll 
        items={ logs} 
        show={ logs.length-1}       
      >
        { (item,key) => (<Log log={item} key={key}/>) }
      </InfiniteScroll>
      <div ref={inputEl}/>
    </Box>
  );
}
export default LogView;

