import React from "react";
import SummarySession from "../components/SummaryComponents/SummarySession/"

const SummaryPage = (props) => {
  // console.log(props.location.search)
  return (
    <>
      <SummarySession compassID={props.location.search} />
    </>
  )
};
export default SummaryPage;
