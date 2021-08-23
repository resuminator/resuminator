import { Text, useColorModeValue } from "@chakra-ui/react";

const HeadingGradient: React.FC = ({ children }) => {
  const lightGradient = "linear(315deg, #24C6DC 0%, #514A9D 74%)";
  const darkGradient =
    "linear-gradient(90deg, rgba(144,205,244,1) 0%, rgba(101,222,247,1) 15%, rgba(81,237,229,1) 35%, rgba(119,247,193,1) 55%, rgba(180,251,149,1) 75%, rgba(249,248,113,1) 95%)";

  return (
    <Text
      as="span"
      bgGradient={useColorModeValue(lightGradient, darkGradient)}
      bgClip="text"
    >
      {children}
      {" "}
    </Text>
  );
};

export default HeadingGradient;
