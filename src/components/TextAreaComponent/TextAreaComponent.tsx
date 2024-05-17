import { Textarea } from "@chakra-ui/react";
import React from "react";

interface TextAreaComponentProps {
  textAreaValue: string;
  loading: boolean;
  setTextAreaValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({
  textAreaValue,
  loading,
  setTextAreaValue,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <Textarea
      boxShadow={{ base: "dark-lg", md: "2xl" }}
      placeholder="Write something..."
      bgColor={"#FAFBFF"}
      rounded={"2xl"}
      resize={"none"}
      variant="unstyled"
      css={{
        overflow: "hidden",
        fontWeight: "bold",
        height: "50%",
        "@media (max-width: 48em)": {
          height: "300px",
        },
      }}
      onChange={handleOnChange}
      value={textAreaValue}
      isDisabled={loading}
      p={8}
    />
  );
};

export default TextAreaComponent;
