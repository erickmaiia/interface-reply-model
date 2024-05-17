import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  Link,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { InfoIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const newsSources = [
  { name: "CNN", url: "https://www.cnn.com/business" },
  { name: "BBC News", url: "https://www.bbc.com/business" },
  { name: "The New York Times", url: "https://www.nytimes.com/business" },
  { name: "The Guardian", url: "https://www.theguardian.com/uk/business" },
  { name: "Al Jazeera", url: "https://www.aljazeera.com/economy/" },
  { name: "Reuters", url: "https://www.reuters.com/business/" },
];

export default function PopoverInfo() {
  return (
    <Popover placement="bottom-start" closeOnBlur={true}>
      <PopoverTrigger>
        <IconButton
          variant="none"
          aria-label="Info"
          fontSize={{ base: "24px", md: "32px" }}
          pos={"absolute"}
          top={"0"}
          right={"0"}
          transform={"translate"}
          icon={<InfoIcon color={"blue.400"} />}
        />
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Finance news
        </PopoverHeader>
        <PopoverArrow bg="blue.800" />
        <PopoverCloseButton />
        <PopoverBody pt={0} pl={5} pb={5}>
          <Stack>
            {newsSources.map((source, index) => (
              <Flex align={"center"} key={index}>
                <Link href={source.url} isExternal>
                  {`News from ${source.name}`} <ExternalLinkIcon mx="2px" />
                </Link>
              </Flex>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
