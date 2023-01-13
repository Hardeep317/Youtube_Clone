import { Box, Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <Box width="25%" margin="auto">
      <Box style={{padding:"15px"}} >
        <Image width="200px" m="auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYy2sjbm-UAJMYsm3GLki3TTE_qyr489O02Q&usqp=CAU'/>
        <Text fontSize="25px">Login Here</Text>
        <FormControl>
            <FormLabel>
              Name:
              <Input type="text"/>
            </FormLabel>
            <FormLabel>
              Email:
              <Input type="email"/>
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" />
            </FormLabel>
            <FormLabel>
              Confirm Password:
              <Input type="password" />
            </FormLabel>
            <Button mt="15px" onClick={() => alert("Details Submitted")}>Submit</Button>
        </FormControl>
      </Box>
    </Box>
  )
}
