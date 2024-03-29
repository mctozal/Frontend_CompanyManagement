import {
  Tabs,
  TabPanels,
  TabPanel,
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
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { User } from "../../../../services/UserService/user-service";
import { JobType } from "../../../../services/JobTypeService/jobtype-service";
import useJobTypeStore from "../../hooks/JobType/store";

type UsersListProps = {
  jobTypeList: JobType[] | undefined;
  setDeleteJobTypeId: (id: number) => void;
  deleteModal: any;
  updateModal: any;
};

const JobTypeList = ({
  jobTypeList,
  setDeleteJobTypeId,
  deleteModal,
  updateModal,
}: UsersListProps) => {
  const { setUpdateJobType, setUpdateJobTypeInput } = useJobTypeStore();
  return (
    <Tabs w={"full"}>
      <TabPanels pt={5} h={"50vh"}>
        <TabPanel>
          <TableContainer borderRadius={"xl"}>
            <Card p={0} borderRadius={""} variant={"outline"}>
              <Table variant="simple">
                <Thead bg={"gray.100"} rounded={"xl"}>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Job Type</Th>

                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {jobTypeList &&
                    jobTypeList.map((jobType) => (
                      <Tr key={jobType.id}>
                        <Td>{jobType.name}</Td>
                        <Td>{jobType.jobSubType}</Td>

                        <Td>
                          <IconButton
                            aria-label="Search database"
                            as={NavLink}
                            icon={<EditIcon />}
                            onClick={() => {
                              setUpdateJobType(jobType.id),
                                setUpdateJobTypeInput(jobType),
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
                              setDeleteJobTypeId(jobType.id);
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
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default JobTypeList;
