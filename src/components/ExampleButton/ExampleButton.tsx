import { FC } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface ExampleButtonProps {
  onOpen: () => void;
}

const ExampleButton: FC<ExampleButtonProps & ButtonProps> = ({
  onOpen,
  ...rest
}) => {
  return (
    <Button
      onClick={onOpen}
      display={{ base: "flex", md: "none" }}
      justifyContent={"center"}
      w={"full"}
      bg={"blue.400"}
      color={"white"}
      p={6}
      boxShadow={"0 5px 20px 0px 	rgb(0,191,255/ 43%)"}
      _hover={{
        bg: "blue.500",
      }}
      _focus={{
        bg: "blue.500",
      }}
      {...rest}
    >
      Text Examples
    </Button>
  );
};

export default ExampleButton;
