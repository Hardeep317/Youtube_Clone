import { Box, Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Image, Input, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useRef, useState } from 'react'
import {HamburgerIcon,RepeatClockIcon} from "@chakra-ui/icons"
import {BsMicFill} from "react-icons/bs"
import {IoIosSearch} from "react-icons/io"
import {RxAvatar} from "react-icons/rx"
import {FaHistory} from "react-icons/fa"
import "./Navbar.css"
import {MdOutlineVideoCall, MdSubscriptions, MdVideoLibrary} from "react-icons/md"
import {BsBell} from "react-icons/bs"
import {AiFillHome} from "react-icons/ai"
import {SiSpringCreators} from "react-icons/si"
import {HiFire} from "react-icons/hi"
import {BsMusicNote} from "react-icons/bs"
import {BiMoviePlay,BiHelpCircle} from "react-icons/bi"
import {FiThumbsUp} from "react-icons/fi"
import {SiYoutubegaming} from "react-icons/si"
import {TbNews} from "react-icons/tb"
import {AiOutlineSetting} from "react-icons/ai"
import {BsFlag} from "react-icons/bs"
import {MdFeedback} from "react-icons/md"
import {AiOutlineCopyright} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { SearchContext } from '../Context/SearchContext'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const login = false;
    const [val, setVal] = useState("");
    const {handleSearch} = useContext(SearchContext)
    const [micVal, setMicVal] = useState("");
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const handleChange = (event) => {
      setVal(event.target.value)
    }

    const handleClick = () => {
      handleSearch(val)
    }

    // const handleMic = async() => {
    //   setTimeout(() => {
    //     SpeechRecognition.stopListening()
    //   }, 3000);
    //   const voice = await SpeechRecognition.startListening()
    //   .then((voice) => setMicVal(voice))
      
    // }

    console.log(micVal)
    // microphone
//         const handleMic = () =>  {
//         const recognition = new webkitSpeechRecognition();
//         recognition.onresult = (event) => {
//         textInput.value = event.results[0][0].transcript;
//         let serch = document.querySelector(".search-text").value;
//         micsearch(serch);
//         };
//         recognition.start();
//         };

//         function micsearch(serch) {
//         if (serch.includes("top")) {
//         window.open("./ProductPage/ProductPage.html", "_self");
//         } else if (serch.includes("dress")) {
//         window.open("./ProductPage/dress.html", "_self");
//         } else {
//         window.open("./ProductPage/dress.html", "_self");
//         }
// }
  return (
    <Box width={"95%"} m="auto" position="fixed" alignContent="center" backgroundColor={"black"}>
        <Stack zIndex="1" direction={[ 'row']} spacing="auto">
            <Box display={"flex"} alignItems="center">
           <Button  onClick={onOpen} ref={btnRef} variant="unstyled"><HamburgerIcon color={"white"} fontSize={["13px","16px","19px","25px"]}/></Button> 
           <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          width='xs'
        >
          {/* <DrawerOverlay /> */}
          <DrawerContent 
          backgroundColor="black">
            <DrawerBody >
             <Link to="/"><Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><AiFillHome fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Home</Text> </Box>
             </Link> 
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><SiSpringCreators fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Shorts</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><MdSubscriptions fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Subscriptions</Text> </Box>
              <Divider />
              <Box marginTop="10px" display="flex" alignItems="center" color={"white"}><MdVideoLibrary fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Library</Text> </Box>
              <Box margin="4px 0px 10px 0px" display="flex" alignItems="center" color={"white"}><FaHistory fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >History</Text> </Box>
              <Divider/>
              <Box marginTop="10px" display="flex"  alignItems="center" color={"white"}> <Text fontSize="20px" >Explore</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><HiFire fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Trending</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><BsMusicNote fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Music</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><BiMoviePlay fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Movies</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><RepeatClockIcon fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Watch Later</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><FiThumbsUp fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Liked Videos</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><SiYoutubegaming fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Gaming</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><TbNews fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >News</Text> </Box>
              <Divider />
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><AiOutlineSetting fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Setting</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><BsFlag fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Report history</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><BiHelpCircle fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Help</Text> </Box>
              <Box margin="4px 0px" display="flex" alignItems="center" color={"white"}><MdFeedback fontSize="22px" /> <Text fontSize="18px" marginLeft="15px" >Send Feedback</Text> </Box>
              <Divider />
              <Box margin="15px" display="flex" alignItems="center" color={"white"}> <Text fontSize="12px" marginLeft="15px" >About Press Copyright Contact us Creator Advertise Developers</Text> </Box>
              <Box margin="15px" display="flex" alignItems="center" color={"white"}> <Text fontSize="12px" marginLeft="15px" >Terms Privacy Policy & Safety How YouTube works Test new features</Text> </Box>
              <Box margin="15px" display="flex" alignItems="center" color={"grey"}> <AiOutlineCopyright /> <Text fontSize="12px" marginLeft="11px" >2023 Google LLC</Text> </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
            <Image backgroundColor={"RGBA(0, 0, 0, 0.92)"} width={["50px","90px","120px","140px"]} src='data:image/png;base64,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'/>
            {/* <Text width={"40px"} fontWeight="hairline" color="white" fontSize="25px">
                YouTube
            </Text> */}
            </Box>
            <Box display={"flex"} alignItems="center">

                <Input  id="searchInput" variant="unstyled" onChange={handleChange} placeholder='Search'
    _placeholder={{ opacity: 1, color: 'gray' }} color="white" fontSize={["9px","11px","14px","17px"]} padding={["1px 4px","4px 9px","6px 13px","8px 18px"]} border="1px solid grey"  borderTopLeftRadius={"30px"}borderBottomStartRadius="30px" borderTopEndRadius="0px" borderBottomEndRadius="0px" width={["100px","150px","250px","400px"]}/>

                <Button variant="unstyled" display="flex" onClick={handleClick} justifyContent="center" alignItems="center" height= {["20px","30px","35px","44px"]}  fontSize={["9px","17px","18px","28px"]}  margin="auto" fontWeight="300" color={"white"}   borderRadius="0px" width={["15px","25px","35px","50px"]} backgroundColor="#0F0E0D " borderTopRightRadius={["20px","20px","25px","30px"]} borderBottomRightRadius={["20px","20px","25px","30px"]} ><IoIosSearch /></Button>

                <Button variant="unstyled" backgroundColor="#0F0E0D " fontSize={["9px","17px","18px","28px"]} height= {["20px","30px","35px","44px"]} alignItems="center"  borderRadius="100%" width={["10px","25px","35px","50px"]} display="flex" justifyContent="center"  ml={["2px","5px","7px","10px"]} ><BsMicFill  color='white'/></Button>
            </Box>

            {
                login ? <Box width={["60px","75px","90px","100px"]} display="flex" justifyContent="space-between" alignItems="center"><Text fontSize={["16px","20px","24px","28px"]}><MdOutlineVideoCall color="white"/></Text> <Text fontSize={["16px","20px","24px","28px"]}><BsBell color="white"/></Text> <Image height={["18px","22px","24px","28px"]} width={["16px","20px","24px","28px"]}borderRadius="50px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_2Sr_626ex6RKdlqtKNgNz4BLEdKp-IwOA&usqp=CAU'/> </Box> : <Box display="flex" alignItems="center">
                <Link to="/login"> <Button variant="unstyled" display="flex" backgroundColor="black" color="#4299E1" border="2px solid #2D3748" height={["20px","30px","35px","44px"]} padding={["0px 3px","0px 5px","0px 8px","0px 10px"]} borderRadius="15px" fontSize={["9px","13px","15px","17px"]} > <RxAvatar fontSize={["9px","13px","15px","17px"]}/><Text   marginLeft={["2px","3px","4px","5px"]}> Sign In</Text> </Button></Link>
            </Box>
            }
            
        </Stack>
    </Box>
  )
}

export default Navbar


