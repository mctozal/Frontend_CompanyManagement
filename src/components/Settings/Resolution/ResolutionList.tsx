import {
  TableContainer,
  Card,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Resolutions } from "../../../models";
import { NavLink } from "react-router-dom";

type ResolutionTableProps = {
  resolutionList: Resolutions[] | undefined;
  setUpdateResolutionInput: (input: string) => void;
  setUpdateResolutionId: (id: string) => void;
  updateModal: any;
  setDeleteResolutionId: (id: string) => void;
  deleteModal: any;
};

const ResolutionList = ({
  resolutionList,
  setUpdateResolutionInput,
  setUpdateResolutionId,
  updateModal,
  setDeleteResolutionId,
  deleteModal,
}: ResolutionTableProps) => {
  return (
    <TableContainer borderRadius={"xl"} w={"full"}>
      <Card p={0} borderRadius={""} variant={"outline"}>
        <Table variant="simple">
          <Thead bg={"gray.100"} rounded={"xl"}>
            <Tr>
              <Th>Resolution</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {resolutionList &&
              resolutionList.map((resolution) => (
                <Tr key={resolution.id}>
                  <Td>{resolution.name}</Td>
                  <Td>
                    <IconButton
                      aria-label="Search database"
                      as={NavLink}
                      icon={<EditIcon />}
                      onClick={() => {
                        setUpdateResolutionInput(resolution.name);
                        setUpdateResolutionId(resolution.id);
                        updateModal.onOpen();
                      }}
                      colorScheme="blue"
                      variant={"solid"}
                      size={"sm"}
                      bg={"#294c58"}
                      m={1}
                    />
                    <IconButton
                      aria-label="Search database"
                      as={NavLink}
                      icon={<DeleteIcon />}
                      onClick={() => {
                        setDeleteResolutionId(resolution.id);
                        deleteModal.onOpen();
                      }}
                      colorScheme="blue"
                      variant={"solid"}
                      size={"sm"}
                      bg={"#294c58"}
                    />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Card>
    </TableContainer>
  );
};

export default ResolutionList;
