"use client";
import { Box, Button, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TextMotion = motion(Text);
const ButtonMotion = motion(Button);
import { CiStar } from "react-icons/ci";
import { LuBoxes } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
export default function Main() {
  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      bg="#f4f4f9"
      position={"relative"}
    >
      <Flex w={"100%"} flexDirection="column" gap={3} alignItems="center">
        <TextMotion
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          as="h1"
          w="60%"
          fontSize={{ base: "2xl", md: "3xl", lg: "xxx-large" }}
          fontWeight="bold"
          textAlign="center"
          pt={10}
        >
          The Future of Manufacturing with Latest Technology
        </TextMotion>
        <TextMotion
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          as="p"
          fontSize="sm"
          textAlign={"center"}
          px={{ base: 2, md: 4, lg: 6 }}
        >
          Expert tech to elevate your Manufacturing. Lets take your business
          further
        </TextMotion>
        <HStack>
          <ButtonMotion
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            borderRadius="full"
            bg="green.600"
            variant="solid"
            size={{ base: "xs", md: "sm", lg: "md" }}
          >
            Get Started
          </ButtonMotion>
          <ButtonMotion
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            variant="outline"
            borderRadius="full"
            size={{ base: "xs", md: "sm", lg: "md" }}
          >
            Try Demo
          </ButtonMotion>
        </HStack>
        <Flex direction="column" alignItems="center">
          <HStack gap={0.5}>
            <CiStar size="20" />
            <CiStar size="20" />
            <CiStar size="20" />
            <CiStar size="20" />
            <CiStar size="20" />
            <Text as="b">5.0</Text>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            Rated by 1000+ users
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          position={{ lg: "absolute" }}
          bottom={59}
          gap={5}
          justifyContent="center"
          alignItems={{ base: "flex-start", md: "flex-start", lg: "flex-end" }}
          w="100%"
          mb={7}
          flexWrap="wrap"
          display={{ base: "flex", md: "flex", lg: "flex" }}
        >
          <Box
            boxShadow={"lg"}
            bg={"lightskyblue"}
            h={300}
            borderRadius="lg"
            w={200}
            backgroundImage="url('https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" // palitan ito ng actual na -
            backgroundSize="cover" // para sakto sa box ang image
            backgroundPosition="center" // center ang image
            backgroundRepeat="no-repeat" // hindi mag-uulit
          ></Box>
          <Box
            h={200}
            bg={"#122c13"}
            mt={0}
            boxShadow={"lg"}
            borderRadius="lg"
            w={150}
            textAlign={"center"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={"column"}
          >
            <Text as="h1" fontSize="3xl" color="white">
              100+
            </Text>
            <Text as="h1" px={4} color={"white"}>
              Our Steemed Clients and Partners
            </Text>
          </Box>
          <Box h={180} boxShadow={"base"} borderRadius="lg" w={250} p={3}>
            <HStack w={"100%"} justifyContent="space-between" p={2}>
              <Button bg="#c4fbc7">
                <LuBoxes />
              </Button>
              <Button>
                <BsThreeDotsVertical />
              </Button>
            </HStack>

            <Text
              as={"p"}
              fontSize="sm"
              display={"flex"}
              gap={1}
              alignItems="center"
            >
              Total Projects <BsArrowUpRightCircleFill /> 8%
            </Text>
            <Text as={"b"} fontSize={"3xl"}>
              1951+
            </Text>
            <Text as="p" fontSize="sm">
              Increase of{" "}
              <Text as="span" color="green.300" fontWeight="bold">
                126
              </Text>{" "}
              this Month
            </Text>
          </Box>
          <Box
            h={200}
            bg={"#dff7b3"}
            bottom={0}
            boxShadow={"lg"}
            borderRadius="lg"
            w={150}
            display={"flex"}
            flexDirection="column"
            justifyContent="center"
            alignItems={"center"}
            textAlign="center"
          >
            <Text as={"b"} fontSize={"3xl"}>
              6+
            </Text>
            <Text px={5} fontSize={"sm"}>
              Years of Dedicated Service
            </Text>
          </Box>
          <Box
            h={300}
            bg="url('https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D')"
            boxShadow={"lg"}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius="lg"
            w={200}
            display={"flex"}
            justifyContent="flex-end"
            justifyItems={"flex-start"}
            alignItems="flex-start"
            flexDirection="column"
            p={4}
            color="white"
            gap={2}
          >
            <Text as={"h1"} fontSize="3xl" textAlign={"right"} color="white">
              <BsSpeedometer />
            </Text>
            <Text>Achieve Optimal Efficeiency and Boost Productivity</Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
