import { Box, Button, FormControl, FormLabel, Image, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    padding:"15px"
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePass = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    const user = {
      email,
      password
    }
    try {
    axios.post('http://localhost:3004/login',user)
    toast.success('SucessFully logged in', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    } catch (error) {
      toast.warn('email or password is not correct', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
      <Box  width={["98%","70%","70%","50%","25%"]} m="8% auto">
    <Box border="1px solid #ccc" borderRadius="8px">
      <Box style={styles} >
        <Image width="200px" m="auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYy2sjbm-UAJMYsm3GLki3TTE_qyr489O02Q&usqp=CAU'/>
        <Text fontSize="25px">Login Here</Text>
        <FormControl>
            <FormLabel>
              Email:
              <Input type="email" onChange={handleEmail}/>
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" onChange={handlePass}/>
            </FormLabel>
            <Button mt="15px" onClick={handleLogin}>Submit</Button>
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
