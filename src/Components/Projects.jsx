import { Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import "../Utils/Projects.css"
import ProjectBox from '../Components/ProjectBox'
import Project5 from '../Images/Project5.png'
import Project4 from "../Images/Project4.png"


const Projects = () => {

  return (
    <>
    <Box className="Project_Box-dark">
      <Box paddingBottom="10px">
      <Heading ml={{base:"5%",md:"10%",lg:"50%"}} as='h1' width="12%" marginLeft='10%' borderBottom='4px solid #a1a1a1'>Portfolio</Heading>
      <Text style={{fontWeight:"bold",marginLeft:'10%'}}>Check out some of my work right here</Text>
      </Box>
      <Box className="Project_box_grid-dark">
      <ProjectBox 
      Name={"Clofetch"}
      TechStack={'tech stack here'}
      Images={Project4}
      liveUrl={"https://farfetch-8hthowlmt-masum-raja.vercel.app/"}
      techstacks={"Redux,ReactJS,ChakraUI"}
      descLine={"Clofetch is an E-commerce website.Here users can add to cart,buy and review products."}
      codeUrl={'https://github.com/Ravi80595/few-insect-4217'}
      /> 
       <ProjectBox 
      Name={"Black Jack Game"}
      TechStack={'tech stack here'}
       Images={Project5}
      liveUrl={"https://github.com/akshaysrivastava8020/Blackjack-game"}
      techstacks={"Javascript , html ,css"}
      descLine={"My first game which I build it by using javascript , html ,css . A black jack is co-related with rummy game !"}
      codeUrl={'https://github.com/akshaysrivastava8020/Blackjack-game'}
      /> 
      </Box>
    </Box>
    
    </>
  )
}

export default Projects
