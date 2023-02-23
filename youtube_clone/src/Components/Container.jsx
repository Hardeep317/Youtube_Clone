import { Box, Button, Center, Grid, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdHistory, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'
import { SiSpringCreators, SiTeradata } from 'react-icons/si'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useContext } from 'react'
import { ActionData } from '../Actions/DataStoreAction'
import { SearchContext } from '../Context/SearchContext'
import "./Container.css"
import { Link } from 'react-router-dom'
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/MFdbl-R4ReI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}


export default function Container() {
    const[id, setId] = useState("");
    const {search} = useContext(SearchContext)
    const data = useSelector((storeData) => {
        return storeData.data;
    })
    // https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
    useEffect(() => {
             getData(search)
    },[search])
    const getData = (search) => {
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=70&part=snippet&order=relevance&key=AIzaSyCTGLebo-UEhwJpDN3lofKDruK-V5DfdEk&q=${search}`)
        .then((res) => res.json())
        .then((data1) => ActionData(data1.items, dispatch))
    }
    console.log(data)
  return (
    
    <Box display="flex" width="100%" backgroundColor="black">
        <Box position="fixed" margin={["38px 4px auto 3px","50px 8px auto 6px","50px 10px auto 8px","70px 20px auto 15px"]} paddingTop="8px" height="100%" backgroundColor="black" zIndex="1" alignItems="center" color="white" padding>
            <Box marginBottom="20px" ><Center> <AiFillHome fontSize={["3px","14px","18px","20px"]}/></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>Home</Text> </Box>
            <Box marginBottom="20px" ><Center> <SiSpringCreators fontSize={["3px","14px","18px","20px"]} /></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>Shorts</Text> </Box>
            <Box marginBottom="20px" ><Center> <MdOutlineSubscriptions fontSize={["3px","14px","18px","20px"]} /></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>Subscriptions</Text> </Box>
            <Box marginBottom="20px" ><Center> <MdOutlineVideoLibrary fontSize={["3px","14px","18px","20px"]} /></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>Library</Text> </Box>
            <Box marginBottom="20px" ><Center> <MdHistory fontSize={["3px","14px","18px","20px"]} /></Center><Text marginTop="6px" fontSize={["4px","9px","11px","14px"]}>History</Text> </Box>
        </Box>
        <Box width={["85%","90%"]} paddingLeft={["3px","10px","12px","15px"]}  backgroundColor="black" textAlign="center" marginLeft="auto" marginTop={["40px","60px"]} marginRight={["10px","25px","40px","55px"]}>
        <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
        <Grid templateColumns={['repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={[1,3,5,9]}>
            {
               data.length > 0 ? data.map((vid) => {
                    return <GridItem key={vid.id.videoId} className="allVideos" onClick={() => setId(vid.id.videoId)
                    }>
                        <Link to={`/youtube/${vid.id.videoId}`}>
                       <Box  backgroundColor="black" textAlign="left" padding={["4px","8px","12px","15px"]}>
                       <Image 
                       borderRadius={["8px","25px"]}
                        height={["65px","100px","130px","200px"]} 
                         src={vid.snippet.thumbnails.medium.url}/>

                         <Text marginLeft="10px" marginTop="5px" color="white" fontSize={["8px","11px","12px","14px"]}>{vid.snippet.title}</Text>
                         <Text marginLeft="10px" marginTop="5px" color="white" fontSize={["8px","11px","12px","14px"]}>{vid.snippet.channelTitle}</Text>
                         </Box>
                         </Link>
                    </GridItem>
                }) : <h1>No data to show</h1>
            }
        </Grid>
        
        
      {/* <> */}
        {/* <Button >Open Modal</Button> */}
  
        {/* <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MFdbl-R4ReI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </ModalBody> */}
{/*   
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter> */}
          {/* </ModalContent>
        </Modal> */}
      {/* </> */}
        

        </Box>
    </Box>
  )
}


