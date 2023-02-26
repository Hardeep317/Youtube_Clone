import { Box, Center, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdHistory, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';
import { SiSpringCreators } from 'react-icons/si';
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import "./VideoPlay.css"
import { useSelector } from 'react-redux';

export default function VideoPlay() {
    const {videoId} = useParams();
    const video = useSelector((storeData) => {
        return storeData.data;
    })

    const data = video.filter((item) => item.id.videoId === videoId)
    console.log(video)

  return (
    <Box className='detailsVideo'>
        <Navbar />
        <Box className="container">
            <Box className='player' height={["230px","390px","450px","550px"]}>
                <iframe width={"100%"} height="100%" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`} title="YouTube video player" allow="autoplay" allowFullScreen></iframe>
                <p className="title">{data[0].snippet.title}</p>
                <div>
                    <div className="channel">
                        <img src={data[0].snippet.thumbnails.default.url} alt="" />
                        <p>{data[0].snippet.channelTitle}</p>
                    </div>
                    <div className="actions">
                        
                    </div>
                </div>
            </Box>
            <div className="recommendations">
                {
                    video.map((vid, i) => {
                        return <Link to={`/youtube/${vid.id.videoId}`}>
                             <div className='individualVid'>
                                    <div className='indi_first'>
                                        <img src={vid.snippet.thumbnails.default.url} alt="" />
                                    </div>
                                    <div className='indi_second'>
                                        <p>{vid.snippet.title.slice(0, 25)}...</p>
                                        <p>{vid.snippet.channelTitle}</p>
                                    </div>
                            
                            </div></Link>
                    })
                }
            </div>
        </Box>
        
        
    </Box>
  )
}
