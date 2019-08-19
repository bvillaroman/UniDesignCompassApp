import React from "react";
import {Box, Text} from "grommet"

const Log = ({log}) => (
  <Box
    flex={false}
    pad="medium"
    background={`grey`}
  >
    <Text>{log}</Text>
  </Box>
);
export default Log;
