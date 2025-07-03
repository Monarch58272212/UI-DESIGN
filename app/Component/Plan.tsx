import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import { FaCheckCircle } from "react-icons/fa";
const card = [
  {
    title: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$29/month",
    buttonText: "Get Started",
    Icon: <FaCheckCircle />,
    checked1: "Lorem ipsum dolor sit amet.",
    checked2: "Lorem ipsum dolor sit amet.",
    checked3: "Lorem ipsum dolor sit amet.",
    checked4: "Lorem ipsum dolor sit amet.",
  },
  {
    title: "Enterprise",
    description: "Perfect for small businesses and startups",
    price: "$29/month",
    buttonText: "Get Started",
    Icon: <FaCheckCircle />,
    checked1: "Lorem ipsum dolor sit amet.",
    checked2: "Lorem ipsum dolor sit amet.",
    checked3: "Lorem ipsum dolor sit amet.",
    checked4: "Lorem ipsum dolor sit amet.",
  },
];

export default function Plan() {
  return (
    <Flex
      flexDirection={"column"}
      w="100%"
      gap={8}
      justify="center"
      align="center"
      px={4}
      py={{ base: "5", md: "10", lg: "20" }}
      bg={"black"}
    >
      <VStack>
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          textAlign={"center"}
          color={"white"}
        >
          Tailord Plans for your Manufacturing Scales
        </Text>
        <Text color={"gray.500"}>Flexible Prizing for any business size</Text>
      </VStack>

      <Flex w={"100%"} justify="center" align="center" gap={8} flexWrap="wrap">
        {card.map((item, index) => (
          <Flex
            key={index}
            flexDirection={"column"}
            bg={"gray.800"}
            gap={4}
            color={"white"}
            p={6}
            borderRadius="2xl"
            w={{ base: "90%", md: "60%", lg: "29%" }}
          >
            <Text fontWeight={"bold"}>{item.title}</Text>
            <Text color={"gray.300"}>{item.description}</Text>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {item.price}
            </Text>
            <Button
              variant={"outline"}
              _hover={{ color: "aqua" }}
              color={"white"}
              borderRadius={"full"}
            >
              {item.buttonText}
            </Button>
            <Flex align="center" py={2} px={4}>
              <Box flex="1" borderBottom="1px solid" borderColor="gray.600" />
              <Text px={4} color="gray.300" whiteSpace="nowrap">
                Features
              </Text>

              <Box flex="1" borderBottom="1px solid" borderColor="gray.600" />
            </Flex>
            <HStack>
              <Text>{item.Icon}</Text>
              <Text>{item.checked1}</Text>
            </HStack>
            <HStack>
              <Text>{item.Icon}</Text>
              <Text>{item.checked2}</Text>
            </HStack>
            <HStack>
              <Text>{item.Icon}</Text>
              <Text>{item.checked3}</Text>
            </HStack>
            <HStack>
              <Text>{item.Icon}</Text>
              <Text>{item.checked4}</Text>
            </HStack>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
