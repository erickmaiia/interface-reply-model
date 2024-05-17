import { Container, Stack, Text, Flex, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function SmallWithLogoLeft(): JSX.Element {
  return (
    <Flex
      w={"100%"}
      bg={"#171923"}
      color={"white"}
      p={4}
      flexDir={{ base: "column", md: "row" }}
      align={"center"}
      pos={"relative"}
      gap={5}
    >
      <Flex
        display={{ base: "none", md: "flex" }}
        as={Link}
        href={"https://github.com/erickmaiia"}
        align={"center"}
        gap={5}
        isExternal
        pos={"absolute"}
        top={3}
      >
        <FaGithub size={"32px"} />
        <Text>erickmaiia</Text>
      </Flex>
      <Flex
        display={{ base: "flex", md: "none" }}
        as={Link}
        href={"https://github.com/erickmaiia"}
        align={"center"}
        gap={5}
        isExternal
      >
        <FaGithub size={"32px"} />
        <Text>erickmaiia</Text>
      </Flex>
      <Container
        as={Stack}
        maxW={"6xl"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={"center"}
        textAlign={{ base: "center", md: "start" }}
      >
        <Text>{`© ${new Date().getFullYear()} erickmaiia. All rights reserved.`}</Text>
      </Container>
    </Flex>
  );
}
