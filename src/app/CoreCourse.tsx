"use client";
import React from "react";
import { Flex,
          Box,
          Heading,
          Text,
          UnorderedList,
          ListItem,

 } from "@chakra-ui/react"; 

 export default function CoreCourse(){
    return(
        <>
        <Box pt={"10px"} width={["80%","80%","45%"]} margin={"auto"}>
            <Heading textAlign={"center"} >Core Courses (Common in All Specializations)</Heading>
            <Text pt={"10px"} pb="20px" fontSize={"lg"}>Every participant of the program will start by completing the following three core courses:

            </Text>
            <UnorderedList spacing={"5px"} fontSize="lg">
                <ListItem fontSize={"xl"}>
                    <Heading fontSize={"xl"}>Quarter I (Core):</Heading>
                    CS-101: Object-Oriented Programming using TypeScript
                     </ListItem>
                     <ListItem fontSize={"xl"}>
                        <Heading fontSize={"xl"}>Quarter II (Core):</Heading>
                        W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform

                     </ListItem>
                     <ListItem fontSize={"xl"}>
                        <Heading fontSize={"xl"}>Quarter III (Core):</Heading>
                        $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                     </ListItem>

            </UnorderedList>
        </Box>
        </>
    )
 }