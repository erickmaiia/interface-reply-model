import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface SendButtonProps extends ButtonProps {
  text: string;
  loading: boolean;
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const SendButton: React.FC<SendButtonProps> = ({
  text,
  loading,
  handleSubmit,
  ...rest
}) => {
  const buttonStyles = {
    base: "100%",
    md: "150px",
  };

  const buttonBgColor = loading ? "gray.400" : "green.400";
  const hoverBgColor = loading ? "gray.400" : "green.700";
  const focusBgColor = loading ? "gray.400" : "green.700";

  return (
    <Button
      w={buttonStyles}
      p={6}
      bg={buttonBgColor}
      color="white"
      boxShadow={loading ? "none" : "0 5px 20px 0px rgb(72 187 120 / 43%)"}
      _hover={{
        bg: hoverBgColor,
      }}
      _focus={{
        bg: focusBgColor,
      }}
      isLoading={loading}
      onClick={handleSubmit}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default SendButton;
