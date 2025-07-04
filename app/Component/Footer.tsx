import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      w={"full"}
      justify="start"
      align="start"
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      bg="black" // ← mas klaro!
      py={{ base: "5", md: "10", lg: "10" }}
      gap={{ base: "5", md: "10", lg: "20" }}
      px={{ base: "5", md: "10", lg: "20" }}
      color={"white"}
    >
      <Flex
        flexDirection="column"
        m={"auto"}
        w={{ base: "90%", md: "90%", lg: "20%" }}
      >
        <Box m={"auto"}>
          <Image src="/always.png" width={80} height={80} alt="logo" />
        </Box>
        <Text color={"gray.500"} textAlign={"center"}>
          Our solution make production faster and cheaper. Contact us for more
          information.
        </Text>
      </Flex>

      <Flex flexDirection="column" gap={1}>
        <Text fontSize={"md"} fontWeight={"bold"}>
          Company
        </Text>
        <Link href={"#"}>
          <Text color={"gray.500"}>About Us</Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>Customers</Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>Newsroom</Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>Events</Text>
        </Link>
      </Flex>

      <Flex flexDirection="column" gap={1}>
        <Text fontSize={"md"} fontWeight={"bold"}>
          Industries
        </Text>
        <Link href={"#"}>
          <Text color={"gray.500"}>Precisions Metalforming</Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>Industrial Manufacturing</Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>High Tech and Electronic</Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>Aerospace</Text>
        </Link>
      </Flex>

      <Flex flexDirection="column" gap={1}>
        <Text fontSize={"md"} fontWeight={"bold"}>
          Product
        </Text>
        <Link href={"#"}>
          <Text color={"gray.500"}>Manufacturing Execution System</Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>Enterprice Resource Planning </Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>Quality Management System</Text>
        </Link>
        <Link href={"#"}>
          <Text color={"gray.500"}>Supply Chain Planning</Text>
        </Link>
      </Flex>
      <Flex flexDirection="column" gap={2}>
        <Text fontSize={"md"} fontWeight={"bold"}>
          Get In Touch
        </Text>
        <Text color={"gray.500"}>Sample@gmail.com</Text>
        <HStack spacing={4}>
          <CiLinkedin fontSize="24px" />
          <FaInstagram fontSize="24px" />
          <FaFacebookSquare fontSize="24px" />
        </HStack>
      </Flex>
    </Flex>
  );
}
