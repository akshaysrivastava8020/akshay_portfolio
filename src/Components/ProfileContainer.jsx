import React from "react";
import "../App.css";
import { Box, Heading, Image, Flex, Text, HStack } from "@chakra-ui/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ProfileContainer = () => {
  return (
    <div className="HeaderArea-dark">
      <Flex
        flexDirection="column"
        align="center"
        padding={20}
        className="profileBx1"
      >
        <Box data-aos="fade-right">
          <Text className="Hello_Style">Hello I'm</Text>
          <Heading margin={-5} className="mainHeading">
            Akshay Srivastava
          </Heading>
          <Heading as="h3" size={["sm", "md", "lg", "xl"]}>
            Full Stack Web Developer
          </Heading>
          <a href="../Utils/Resume/Ravi_Sharma_Resume.pdf" download>
            <button className="Resume_btn">Resume</button>
          </a>
        </Box>
        <HStack fontSize="60px" className="icons" data-aos="fade-right">
          <Text>
            {" "}
            <FaNodeJs />
          </Text>
          <Text>
            {" "}
            <FaReact />
          </Text>
          <Text>
            {" "}
            <AiFillHtml5 />
          </Text>
          <Text>
            {" "}
            <TbBrandJavascript />
          </Text>
          <Text>
            {" "}
            <BsGithub />
          </Text>
        </HStack>
      </Flex>

      <Box marginLeft="-8%">
        <Image
          src="https://avatars.githubusercontent.com/u/76969329?v=4"
          alt="Akshay Srivastava"
          className="photo_image"
          size={["sm", "md", "lg", "4xl"]}
        />
      </Box>
    </div>
  );
};

export default ProfileContainer;
