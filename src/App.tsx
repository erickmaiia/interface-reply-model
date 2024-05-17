import { useState } from "react";
import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Box,
  Center,
  useDisclosure,
} from "@chakra-ui/react";

import positive from "./assets/positive.gif";
import neutral from "./assets/neutral.gif";
import negative from "./assets/negative.gif";

import AccordionBoxDesk from "./components/AccordionBoxDesk/AccordionBoxDesk";
import HistoryTable from "./components/HistoryTable/HistoryTable";
import SendButton from "./components/SendButton/SendButton";
import ExampleButton from "./components/ExampleButton/ExampleButton";
import ExampleModal from "./components/ExampleModal/ExampleModal";
import PopoverInfo from "./components/Popover/PopoverInfo";
import TextAreaComponent from "./components/TextAreaComponent/TextAreaComponent";
import Footer from "./components/Footer/Footer";

import {
  useLocalStorageHistory,
  useHandleSubmit,
  useHandleSelection,
  useDeleteAllItems,
  useDeleteSelectedItems,
} from "./functions/functions";

export default function App() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [sentiment, setSentiment] = useState("neutral");
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { history, setHistory } = useLocalStorageHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = useHandleSubmit(
    textAreaValue,
    setLoading,
    setHistory,
    setSentiment,
    history
  );

  const handleSelection = useHandleSelection(setSelectedItems, selectedItems);

  const deleteAllItems = useDeleteAllItems(setHistory);

  const deleteSelectedItems = useDeleteSelectedItems(
    selectedItems,
    history,
    setHistory,
    setSelectedItems
  );

  return (
    <div>
      <Container maxW={"7xl"} overflow={"hidden"}>
        <Stack spacing={5} py={10}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            textAlign={{ base: "center", md: "start" }}
          >
            <Text as="b">Financial Sentiment Analysis</Text>
          </Heading>

          <Text display={{ base: "none", md: "block" }}>Text examples:</Text>
          <Stack flexDir={{ base: "column", md: "row" }} w={"100%"}>
            <AccordionBoxDesk
              base="none"
              md="block"
              setTextAreaValue={setTextAreaValue}
              loading={loading}
              onClose={onClose}
            />

            <Box w={{ base: "100%", md: "150%" }}>
              <Center w={"100%"} h={"50%"} position="relative">
                <PopoverInfo />

                {sentiment === "positive" && (
                  <img src={positive} width={"45%"} height={"45%"} />
                )}
                {sentiment === "neutral" && (
                  <img src={neutral} width={"45%"} height={"45%"} />
                )}
                {sentiment === "negative" && (
                  <img src={negative} width={"45%"} height={"45%"} />
                )}
              </Center>

              <TextAreaComponent
                textAreaValue={textAreaValue}
                loading={loading}
                setTextAreaValue={setTextAreaValue}
              />
            </Box>
          </Stack>

          <Flex
            w={"100%"}
            justify={"flex-end"}
            flexDir={{ base: "column", md: "row" }}
            gap={3}
          >
            <SendButton
              text={"Send"}
              loading={loading}
              handleSubmit={handleSubmit}
            />
            <ExampleButton onOpen={onOpen} />
          </Flex>

          <ExampleModal
            setTextAreaValue={setTextAreaValue}
            loading={loading}
            isOpen={isOpen}
            onClose={onClose}
          />

          {history.length > 0 && (
            <Box w={"100%"} borderTop={"solid 3px #CBD5E0"} />
          )}
          <HistoryTable
            history={history}
            selectedItems={selectedItems}
            deleteAllItems={deleteAllItems}
            deleteSelectedItems={deleteSelectedItems}
            handleSelection={handleSelection}
          />
        </Stack>
      </Container>
      <Footer />
    </div>
  );
}
