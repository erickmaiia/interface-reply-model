import React, { useState } from "react";
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { accordionItems } from "./accordionItems";

interface AccordionBoxDeskProps {
  setTextAreaValue: Function;
  loading: boolean;
  onClose: Function;
  base: string;
  md: string;
}

const AccordionBoxDesk: React.FC<AccordionBoxDeskProps> = ({
  setTextAreaValue,
  onClose,
  base,
  md,
}) => {
  return (
    <Accordion
      allowMultiple
      rounded=""
      boxShadow="2xl"
      h="100%"
      display={{ base: base, md: md }}
    >
      {accordionItems.map((item, index) => (
        <AccordionItemWrapper
          key={index}
          item={item}
          setTextAreaValue={setTextAreaValue}
          onClose={onClose}
        />
      ))}
    </Accordion>
  );
};

interface AccordionItemWrapperProps {
  item: string;
  setTextAreaValue: Function;
  onClose: Function;
}

const AccordionItemWrapper: React.FC<AccordionItemWrapperProps> = ({
  item,
  setTextAreaValue,
  onClose,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAccordionClick = () => {
    setTextAreaValue(item);
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AccordionItem bgColor="white">
      <AccordionButton
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={4}
        onClick={handleAccordionClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={isHovered ? "hovered" : ""}
      >
        <Flex gap={3}>
          <Box>
            <Box
              w="16px"
              h="16px"
              rounded="lg"
              bgColor={isHovered ? "#5D5FEF" : "#A5A6F6"}
              mt={1}
            />
          </Box>
          <Text textAlign="start" fontSize="md">
            {item}
          </Text>
        </Flex>
        <ChevronRightIcon
          display={{ base: "none", md: "block" }}
          color={isHovered ? "#5D5FEF" : "#A5A6F6"}
          fontSize="24px"
        />
        <ChevronUpIcon
          display={{ base: "block", md: "none" }}
          color={isHovered ? "#5D5FEF" : "#A5A6F6"}
          fontSize="24px"
        />
      </AccordionButton>
    </AccordionItem>
  );
};

export default AccordionBoxDesk;
