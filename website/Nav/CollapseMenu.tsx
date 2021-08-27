import {
  Box,
  Button,
  Collapse,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";
import { navLinkDetails } from "./links";
import LoginSignupButtons from "./LoginSignupButtons";

const CollapseMenu = ({ isOpen, onToggle }) => {
  return (
    <Collapse in={isOpen}>
      <Box
        d="flex"
        flexDir="column"
        justifyContent="space-between"
        minH="90vh"
        bg={useColorModeValue("whiteAlpha.800", "blackAlpha")}
      >
        <Stack alignItems="flex-start" pt="4">
          {navLinkDetails.map((item) => (
            <Button
              key={item.label}
              as="a"
              href={item.link}
              variant="ghost"
              size="md"
              fontWeight="normal"
              onClick={onToggle}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        <LoginSignupButtons
          display={{ md: "none" }}
          justifyContent="center"
          mb="8"
        />
      </Box>
    </Collapse>
  );
};

export default CollapseMenu;
