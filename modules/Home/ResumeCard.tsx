import {
  Center,
  Popover,
  PopoverTrigger,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { isCustom } from "../Design/Colors/ColorSelector";
import { ResumeMetadata } from "../User/types";
const ResumeCardOptions = dynamic(() => import("./ResumeCardOptions")) ;

interface ResumeCardProps {
  dataObject: ResumeMetadata;
  callback: (id: string) => void;
  onSubmit?: (value: string) => void;
  onSelect?: (value: string) => void;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  dataObject,
  callback,
  onSubmit,
  onSelect,
}) => {
  const primaryColor = isCustom(dataObject.color)
    ? dataObject.color
    : `${dataObject.color}.500`;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center key={dataObject.id} flexDirection="column">
      <Center
        h="10rem"
        w="10rem"
        bg={primaryColor}
        _hover={{ shadow: "md", filter: "brightness(80%)" }}
        borderRadius="10px"
        cursor="pointer"
        onClick={() => callback(dataObject.id)}
        transition="all 0.2s"
      >
        <Text fontSize="4xl">{dataObject.icon}</Text>
      </Center>

      <Popover isOpen={isOpen} onClose={onClose} placement="bottom" matchWidth>
        <PopoverTrigger>
          <Text fontSize="md" my="2" onClick={onOpen} cursor="pointer">
            <Tooltip hasArrow label="Click to edit">
              {dataObject.profileName}
            </Tooltip>
          </Text>
        </PopoverTrigger>
        <ResumeCardOptions
          dataObject={dataObject}
          onSelect={onSelect}
          onSubmit={onSubmit}
        />
      </Popover>
    </Center>
  );
};

export default ResumeCard;
