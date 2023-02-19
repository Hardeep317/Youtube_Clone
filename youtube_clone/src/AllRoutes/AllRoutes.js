import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import VideoPlay from '../Components/VideoPlay'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/youtube/:videoId" element={<VideoPlay />}/>
    </Routes>
  )
}
