import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  Box,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { HistoryItem } from "../../types/HistoryItem";

interface HistoryTableProps {
  history: HistoryItem[];
  deleteAllItems: () => void;
  deleteSelectedItems: () => void;
  selectedItems: number[];
  handleSelection: (index: number) => void;
}

const HistoryTable: React.FC<HistoryTableProps> = ({
  history,
  deleteAllItems,
  deleteSelectedItems,
  selectedItems,
  handleSelection,
}) => {
  return (
    <div>
      {history.length > 0 && (
        <Box>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justify="space-between"
            gap={2}
          >
            <Button
              w={{ base: "100", md: "9em" }}
              colorScheme="yellow"
              color={"white"}
              onClick={deleteSelectedItems}
            >
              Delete Item(s)
            </Button>
            <Button
              w={{ base: "100", md: "9em" }}
              mb={5}
              bg={"#EF4444"}
              color={"white"}
              _hover={{ bg: "#DC2626" }}
              onClick={deleteAllItems}
              rightIcon={<DeleteIcon />}
            >
              Delete All
            </Button>
          </Flex>

          <CheckboxGroup>
            <Stack spacing={3}>
              {history.map((item, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  bg={
                    item.sentiment === "positive"
                      ? "green.50"
                      : item.sentiment === "neutral"
                      ? "gray.50"
                      : "red.50"
                  }
                >
                  <Flex gap={4}>
                    <Checkbox
                      h={0}
                      alignItems=""
                      mt={1}
                      size="lg"
                      isChecked={selectedItems.includes(index)}
                      onChange={() => handleSelection(index)}
                    />
                    <Stack>
                      <Text fontWeight="bold">Date: {item.date}</Text>
                      <Text fontWeight="bold">Sentiment: {item.sentiment}</Text>
                      <Text>{item.text}</Text>
                    </Stack>
                  </Flex>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
        </Box>
      )}
    </div>
  );
};

export default HistoryTable;
