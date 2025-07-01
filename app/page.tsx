import { Box } from "@chakra-ui/react";
import Main from "./Component/Main";
import About from "./Component/About";
export default function Home() {
  return (
    <Box pt={{ base: "8", md: "14", lg: "14" }}>
      <Main />
      <About />
    </Box>
  );
}
