import { Box, Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from "axios"

export default function SignUp() {

  const initialData = {
    name:"",
    email:"",
    password:""
  }

  const navigate = useNavigate();

  const [user, setUser] = useState(initialData)

  const handleChange = (e) => {
    e.preventDefault();
    let {name, value} = e.target;
    let temp = value;
    setUser({...user,[name]:temp})
  }


  async function handleClick() {
    try {
    await axios.post('http://localhost:3004/signup',user)
     toast.success('SucessFully Registered', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login")
    } catch (error) {
      toast.warn('Email Already Registered', {
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

    <Box width={["98%","70%","70%","50%","25%"]} margin="auto">
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
