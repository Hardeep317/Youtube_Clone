import { Box } from '@chakra-ui/react'
import React from 'react'
import { store } from '../ReduxStore/Store'
import Container from './Container'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

export default function Home() {
  // const selector = useSelector()
  return (
    <Box backgroundColor="black">
        <Navbar />
        <Container />
    </Box>
  )
}
