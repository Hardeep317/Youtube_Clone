import { Box, Center, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdHistory, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';
import { SiSpringCreators } from 'react-icons/si';
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import "./VideoPlay.css"
import { useSelector } from 'react-redux';

export default function VideoPlay() {
    const {videoId} = useParams();
    const video = useSelector((storeData) => {
        return storeData.data;
    })

    const data = video.filter((item) => item.id.videoId === videoId)
    console.log(data)

  return (
    <div className='detailsVideo'>
        <Navbar />
        <Box position="fixed" margin={["38px 4px auto 3px","50px 8px auto 6px","50px 10px auto 8px","70px 20px auto 15px"]} paddingTop="8px" height="100%" backgroundColor="black" zIndex="1" alignItems="center" color="white" padding>
            <Box marginBottom="20px" ><Center> <AiFillHome fontSize={["3px","14px","18px","20px"]}/></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>Home</Text> </Box>
            <Box marginBottom="20px" ><Center> <SiSpringCreators fontSize={["3px","14px","18px","20px"]} /></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>Shorts</Text> </Box>
            <Box marginBottom="20px" ><Center> <MdOutlineSubscriptions fontSize={["3px","14px","18px","20px"]} /></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>Subscriptions</Text> </Box>
            <Box marginBottom="20px" ><Center> <MdOutlineVideoLibrary fontSize={["3px","14px","18px","20px"]} /></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>Library</Text> </Box>
            <Box marginBottom="20px" ><Center> <MdHistory fontSize={["3px","14px","18px","20px"]} /></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>History</Text> </Box>
        </Box>
        <div className='player'>
        <iframe width={"100%"} height="100%" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className="title">{data[0].snippet.title}</p>
        <div className="channel">
            <img src={data[0].snippet.thumbnails.default.url} alt="" />
            <p>{data[0].snippet.channelTitle}</p>
        </div>
        </div>
        
    </div>
  )
}
