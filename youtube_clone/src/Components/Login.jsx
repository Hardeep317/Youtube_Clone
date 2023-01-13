import { Box, Button, FormControl, FormLabel, Image, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const styles = {
    padding:"15px"
  }
  return (
      <Box  width={"25%"} m="8% auto">
    <Box border="1px solid #ccc" borderRadius="8px">
      <Box style={styles} >
        <Image width="200px" m="auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYy2sjbm-UAJMYsm3GLki3TTE_qyr489O02Q&usqp=CAU'/>
        <Text fontSize="25px">Login Here</Text>
        <FormControl>
            <FormLabel>
              Email:
              <Input type="email"/>
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" />
            </FormLabel>
            <Button mt="15px" onClick={() => alert("Details Submitted")}>Submit</Button>
        </FormControl>
        <Text textAlign="left"><Link to="/signup">Create Account</Link> </Text>
      </Box>
    </Box>
      <Box textAlign="right" margin="-90px auto opx">
          <Stack  direction="row" >
            <Text>Help</Text>
            <Text>Privacy</Text>
            <Text>Terms</Text>
          </Stack>
      </Box>
    </Box>
  )
}
