import React from 'react'
import { Box,Heading,Text } from '@chakra-ui/react'
import "../Utils/Help.css"
import AOS from "aos"
import 'aos/dist/aos.css';

AOS.init();

const Calender = () => {

  return (
    <div className='calender-dark'  >
      <Box paddingBottom="0px" pt='20px'>
      <Heading className='statHeading' as='h1' borderBottom='4px solid #a1a1a1'>Calendar & Stats</Heading>
      <Text className='statHeading' pb="25px" >Check out my Github Calendar & Streak Stats</Text>
      </Box>
      <Box style={{textAlign:'center'}} className='calanderBox' data-aos="fade-up">
    
      </Box>
      <Box className="statBox-dark" data-aos="fade-up">
        <Box className='statbox1-dark'>
        <img src="https://camo.githubusercontent.com/f7b7710da10264faec99beeb703c7ce7a899a9d383ec9b0cb01ca5839099e347/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616b73686179737269766173746176613830323026" width='100%' alt="" />
        </Box>
        <Box className='statbox1-dark' data-aos="fade-up">
        <img src="https://camo.githubusercontent.com/4c8d9d1e57d63e83f4ec76a8e45958a3c536bbdaf9e14e8630c75ad7971bc9a1/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616b7368617973726976617374617661383032302673686f775f69636f6e733d74727565266c6f63616c653d656e" width='100%'/>
        </Box>
        </Box>
    </div>
  )
}

export default Calender
