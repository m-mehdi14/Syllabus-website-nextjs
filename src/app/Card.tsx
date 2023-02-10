"use client";

import {
  Heading,
  Text,
  Stack,
  Image,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Button,
  Flex,
  HStack,
  Link,
  Show,
  Hide,
} from "@chakra-ui/react";

export default function Cards() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      backgroundImage="url('/header_bg.jpg')"
      backgroundRepeat="repeat-y"
      backgroundSize="cover"
    >
      <HStack
        mt="10"
        alignItems="stretch"
        spacing={["0", "0", "20"]}
        p={["5", "10", "auto"]}
        flexDirection={["column", "column", "row"]}
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://www.insurancejournal.com/app/uploads/2022/11/Metaverse-bigstock-scaled.jpg"
              alt="Web 3 & metaverse"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Web 3.0 (Blockchain) and Metaverse</Heading>
              <Text>
                This specialization focuses on developing full-stack Web 3.0 and
                Metaverse experiences for the next generation of the internet by
                specializing in building worlds that merge the best of
                cutting-edge decentralized distributed blockchains with 3D
                metaverse client experiences.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/web3">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Show below="sm">
          <Divider height="6"></Divider>
        </Show>
        <Show below="md">
          <Divider height="6"></Divider>
        </Show>
        <Hide above="lg">
          <Divider></Divider>
        </Hide>

        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://img.freepik.com/free-vector/sphere-grid-wave-with-binary-code-ai-artificial-intelligence-logo-hand-machine-learning-concept_127544-855.jpg"
              alt="AI & deep learning"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                Artificial Intelligence (AI) and Deep Learning
              </Heading>
              <Text>
                The AI and Deep Learning specialization focuses on building and
                deploying intelligent APIs using OpenAI models and building
                custom Deep Learning Tensorflow models.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/ai">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Show below="sm md">
          <Divider height="6"></Divider>
        </Show>
        <Show below="md">
          <Divider height="6"></Divider>
        </Show>
        <Hide above="lg">
          <Divider></Divider>
        </Hide>

        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKMjFHuZ1nA97fIBPFomIbV3WdyuGlH6pXw&usqp=CAU"
              alt="Cloud-Native Computing"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Cloud-Native Computing</Heading>
              <Text>
                The Cloud-Native Computing Specialization focuses on Containers,
                Kubernetes, and CDK for Kubernetes.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/cloud_native">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </HStack>

      <HStack
        mb="10"
        alignItems="stretch"
        spacing={["0", "0", "20"]}
        p={["5", "10", "auto"]}
        pt={["0", "0", "auto"]}
        flexDirection={["column", "column", "row"]}
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="data:image/jpeg;base64,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"
              alt="Ambient Computing and IoT"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Ambient Computing and IoT</Heading>
              <Text>
                The Ambient Computing and IoT Specialization focuses on building
                Smart Homes, Offices, Factories, and Cities using Voice
                computing, Matter Protocol, and Embedded Devices.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/iot">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Show below="sm">
          <Divider height="6"></Divider>
        </Show>
        <Show below="md">
          <Divider height="6"></Divider>
        </Show>
        <Hide above="md">
          <Divider></Divider>
        </Hide>

        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="data:image/jpeg;base64,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"
              alt="Genomics and Bioinformatics"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Genomics and Bioinformatics</Heading>
              <Text>
                Genomics is the study of the total genetic makeup of individual
                organisms, bioinformatics encompasses a diverse range of
                analytical methods and tools applied to genomic data. This
                Specialization focuses on performing complex bioinformatics
                analysis using the most essential Python libraries and
                applications.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/genomics">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Show below="sm">
          <Divider height="6"></Divider>
        </Show>
        <Show below="md">
          <Divider height="6"></Divider>
        </Show>
        <Hide above="md">
          <Divider></Divider>
        </Hide>

        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://industrywired.com/wp-content/uploads/2019/08/How_to-Embrace-Automation-for-Business-Success.jpg"
              alt="Network Programmability and Automation"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                Network Programmability and Automation
              </Heading>
              <Text>
                Network automation is crucial due to new protocols,
                technologies, delivery models, and the requirement of
                enterprises. This course teaches network engineers how to
                automate systems with code using a variety of technologies and
                tools, including Linux, Python, APIs, and Git.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/automation">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </HStack>
    </Flex>
  );
}

