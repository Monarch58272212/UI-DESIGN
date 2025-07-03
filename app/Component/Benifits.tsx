"use client";

import { Box, Flex, HStack, Text, Stack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Benefit = [
  {
    Icon: <FaCheckCircle />,
    check: "Boosting Quality and Tech",
    description:
      "With Advance Technology, we help you achieve productivity and quality. Discover how our systems enhance your standards.",
  },
  {
    Icon: <FaCheckCircle />,
    check: "Optimizing Production Processes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    Icon: <FaCheckCircle />,
    check: "AI-Driven Production",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Benefits() {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      px={4} // ✅ padding sa sides para di dumikit sa gilid
      py={{ base: "5", md: "10", lg: "20" }} // ✅ margin top for spacing
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        flexWrap="wrap" // ✅ allows wrapping
        justify="center"
        align="flex-start"
        w="100%"
        maxW="1200px"
        gap={8}
      >
        <Box
          bg="gray.100"
          w="100%"
          maxW={{ base: "100%", md: "400px", lg: "500px" }}
          p={6}
          borderRadius="xl"
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>

        {/* Benefits Section */}
        <Box flex="1" minW="280px">
          <Text as="b" fontSize={{ base: "2xl", md: "3xl" }} mb={2}>
            Key Benefits of our System for your Business Efficiency
          </Text>
          <Text mb={6}>
            Our systems boost productivity, cut costs, and accelerate business
            growth.
          </Text>

          <Stack spacing={6}>
            {Benefit.map((item, index) => (
              <Box key={index}>
                <HStack align="start">
                  <Box color="green.500" pt={1}>
                    {item.Icon}
                  </Box>
                  <Box>
                    <Text as="b" fontSize="lg">
                      {item.check}
                    </Text>
                    <Text color="gray.600">{item.description}</Text>
                  </Box>
                </HStack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
