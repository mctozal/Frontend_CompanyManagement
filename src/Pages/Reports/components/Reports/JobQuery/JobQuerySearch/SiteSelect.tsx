import { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Flex,
  Wrap,
  Tag,
  TagLabel,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  TagCloseButton,
} from "@chakra-ui/react";
import useClient from "../../../../../Settings/hooks/Client/useClient";

interface SiteProps {
  onSelectedSites: (sites: string[] | undefined) => void;
}
const SiteSelect = ({ onSelectedSites }: SiteProps) => {
  const { data: clientList } = useClient();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("Selected Sites:", selectedOptions);
    onSelectedSites(selectedOptions);
  }, [selectedOptions]);

  const handleSelectChange = (selectedValues: string[]) => {
    setSelectedOptions(selectedValues);
  };

  const handleOptionSelect = (option: string) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
    setIsMenuOpen(false);
  };

  const handleOptionDeselect = (option: string) => {
    const updatedOptions = selectedOptions.filter((value) => value !== option);
    setSelectedOptions(updatedOptions);
  };

  const filteredOptions: { value: string; label: string }[] = clientList
    ? clientList.map((client: any) => ({
        value: client.id,
        label: client.name,
      }))
    : [];

  return (
    <FormControl pb={5} w={"md"}>
      <FormLabel color={"grey"}>Sites</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Menu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onOpen={() => setIsMenuOpen(true)}
        >
          <MenuButton
            as={Button}
            color={"grey"}
            rightIcon={
              <Box as="span" fontSize="sm">
                ▼
              </Box>
            }
          >
            Select Sites
          </MenuButton>
          <MenuList minWidth="200px">
            <MenuOptionGroup
              value={selectedOptions}
              onChange={(values) => handleSelectChange(values as string[])}
            >
              {filteredOptions.map((option) => (
                <MenuItemOption
                  key={option.value}
                  value={option.value}
                  isChecked={selectedOptions.includes(option.value)}
                  onClick={() => handleOptionSelect(option.value)}
                >
                  {option.label}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Wrap mt={2}>
          <Flex wrap="wrap">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                borderRadius="full"
                variant="solid"
                bg={"#1B4D3E"}
                mr={2}
                mb={2}
              >
                <TagLabel>
                  {filteredOptions.find((o) => o.value === option)?.label}
                </TagLabel>
                <TagCloseButton onClick={() => handleOptionDeselect(option)} />
              </Tag>
            ))}
          </Flex>
        </Wrap>
      </Flex>
    </FormControl>
  );
};

export default SiteSelect;
