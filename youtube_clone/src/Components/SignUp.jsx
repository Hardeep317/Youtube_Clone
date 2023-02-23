import { Box, Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {

  const initialData = {
    name:"",
    email:"",
    password:""
  }

  const [user, setUser] = useState(initialData)

  const handleChange = (e) => {
    e.preventDefault();
    let {name, value} = e.target;
    let temp = value;
    setUser({...user,[name]:temp})
  }

  const handleClick = () => {
    fetch('http://localhost:3004/signup',{
      method: 'POST',
      body:JSON.stringify(user),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json());
  }

  return (
    <Box width="25%" margin="auto">
      <Box style={{padding:"15px"}} >
        <Image width="200px" m="auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYy2sjbm-UAJMYsm3GLki3TTE_qyr489O02Q&usqp=CAU'/>
        <Text fontSize="25px">Login Here</Text>
        <FormControl>
            <FormLabel>
              Name:
              <Input type="text" name="name" onChange={handleChange} value={user.name}/>
            </FormLabel>
            <FormLabel>
              Email:
              <Input type="email" name='email' onChange={handleChange} value={user.email}/>
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" name='password' onChange={handleChange} value={user.password}/>
            </FormLabel>
            <FormLabel>
              Confirm Password:
              <Input type="password" />
            </FormLabel>
            <Button mt="15px" onClick={handleClick}>Submit</Button>
        </FormControl>
      </Box>
    </Box>
  )
}
