import React, { useState } from 'react'
import {
  Box,
  Button,
  Form,
  FormField,
} from "grommet";

const SignIn = (props) => {
  return (
    <Box width="medium">
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value }) => console.log("Submit", value)}
        >
          <FormField label="Email" name="email" type="email" required />
          <FormField label="Password" name="password" required />
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Sign In" primary />
          </Box>
        </Form>
      </Box>
  )
}

export default SignIn; 