import { Heading, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import HeadingGradient from "./HeadingGradient";

const MainHeading = () => {
  const { colorMode } = useColorMode();

  const LightHeading = () => (
    <>
      Beautiful <HeadingGradient>single-page resumes</HeadingGradient>within
      minutes.
    </>
  );

  const DarkHeading = () => (
    <HeadingGradient>
      Beautiful single-page resumes within minutes.
    </HeadingGradient>
  );

  return (
    <Heading
      fontWeight="800"
      fontSize={{ base: "4xl", sm: "5xl", lg: "6xl", xl: "7xl" }}
      textAlign="center"
      letterSpacing={useBreakpointValue({ base: -3, lg: -4, xl: -4.5 })}
      color="#000051"
      mb="8"
      maxW={{xl: "80%"}}
      lineHeight={{ base: "short", md: "shorter" }}
    >
      {colorMode === "light" ? <LightHeading /> : <DarkHeading />}
    </Heading>
  );
};

export default MainHeading;
