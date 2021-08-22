import { Text } from "@chakra-ui/react";

const HeadingGradient: React.FC = ({ children }) => {
  return (
    <Text
      as="span"
      bgGradient="linear(315deg, #24C6DC 0%, #514A9D 74%)"
      bgClip="text"
      px="1"
    >
      {children}
    </Text>
  );
};

export default HeadingGradient;
