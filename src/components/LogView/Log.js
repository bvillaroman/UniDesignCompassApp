import React from "react";
import {Box, Text} from "grommet"

const Log = ({log}) => (
  <Box
    flex={false}
    pad="medium"
    background={`#F1F2F1`}
  >
    <Text>{log}</Text>
  </Box>
);
export default Log;
