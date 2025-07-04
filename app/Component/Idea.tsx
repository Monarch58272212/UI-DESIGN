import { Button, Flex, Text } from "@chakra-ui/react";

export default function Idea() {
  return (
    <Flex
      justify="center"
      align="center"
      flexDirection="column"
      w="100%"
      bg="teal.900"
      py={{ base: "5", md: "10", lg: "20" }}
      gap={5}
      color="white"
    >
      <Text
        fontWeight="bold"
        textAlign="center"
        padding={2}
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      >
        From Idea to Production in Days
      </Text>
      <Text
        color="gray.200"
        textAlign="center"
        w={{ base: "90%", md: "40%" }}
        px={{ base: 2, md: 0 }}
      >
        Accelerate your Production with our Technology. Reduce Downtime and
        Optimize Costs. Get a special offer now.
      </Text>
      <Button borderRadius="full" colorScheme="teal" variant="solid">
        Work With Us
      </Button>
    </Flex>
  );
}
