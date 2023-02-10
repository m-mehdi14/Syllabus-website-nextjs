"use client";

import Navbar from "../Navbar";
import Footer from "../Footer";
import CoreCourse from "../CoreCourse";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Navbar />
      <CoreCourse />

      <Box py="50px" width={["80%", "80%", "45%"]} margin="auto">
        <Heading textAlign="center">
          Cloud-Native Computing - Specialized Tracks
        </Heading>
        <Text textAlign="center" pb="20px" fontSize="lg" pt="10px">
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes.
        </Text>
        <UnorderedList fontSize="lg" spacing="5">
          <ListItem>
            <Heading fontSize="xl">Quarter IV </Heading>
            CN-351: Certified Kubernetes Application Developer (CKAD)
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter V </Heading>
            CN-361: Developing Multi-Cloud APIs using CDK for Terraform
          </ListItem>
        </UnorderedList>
      </Box>

      <Footer />
    </>
  );
}