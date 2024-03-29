import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import useJobTypeMutation from "../../hooks/JobType/useJobTypeMutation";

interface DeleteJobTypeProps {
  isOpen: boolean;
  jobTypeId: number;
  onClose: () => void;
}

const DeleteJobType = ({ onClose, isOpen, jobTypeId }: DeleteJobTypeProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const deleteJobType = useJobTypeMutation(() => {
    onClose();
  }, false);
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
        <AlertDialogBody>
          Are you sure you want to delete JobType deleted.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            No
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              deleteJobType.mutate(jobTypeId);
            }}
            ml={3}
          >
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteJobType;
