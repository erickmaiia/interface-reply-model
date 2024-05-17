import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalBody,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import AccordionBoxDesk from "../AccordionBoxDesk/AccordionBoxDesk";

interface ExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  setTextAreaValue: (value: string) => void;
  loading: boolean;
}

const ExampleModal: FC<ExampleModalProps> = ({
  isOpen,
  onClose,
  setTextAreaValue,
  loading,
}) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent align={"center"} as={Flex} bg={""}>
          <Flex
            w={"86%"}
            justify={"space-between"}
            align={"center"}
            bg={"#ffffff"}
            p={3}
          >
            <Text fontSize={"lg"}>Text examples</Text>
            <IconButton
              colorScheme="red"
              aria-label="close"
              size="sm"
              icon={<CloseIcon />}
              onClick={onClose}
            />
          </Flex>

          <ModalBody>
            <AccordionBoxDesk
              base="block"
              md="none"
              setTextAreaValue={setTextAreaValue}
              loading={loading}
              onClose={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ExampleModal;
