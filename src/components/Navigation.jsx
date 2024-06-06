import { Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box as="nav" p={4} bg="gray.100">
      <HStack spacing={4}>
        <Link to="/">Index</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </HStack>
    </Box>
  );
}

export default Navigation;
