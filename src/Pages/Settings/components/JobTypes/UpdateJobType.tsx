import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Heading,
  AbsoluteCenter,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import useJobSubType from "../../JobSubType/useJobSubType";
import { JobType } from "../../../../services/JobTypeService/jobtype-service";

const updateSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Resolution must be at least 3 characters" }),
  jobSubTypeId: z.string().min(1, { message: "Job Subtype is required" }),
});
export type FormUpdateValidation = z.infer<typeof updateSchema>;

type UpdateJobTypeFormProps = {
  onSubmit: (data: FormUpdateValidation) => void;
  defaultValue: JobType;
};

const UpdateJobType = ({ onSubmit, defaultValue }: UpdateJobTypeFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUpdateValidation>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: defaultValue.name,
      jobSubTypeId: defaultValue.jobSubType.trim(),
    },
  });

  const handleFormSubmit = (data: FormUpdateValidation) => {
    onSubmit(data);
  };
  const { data: jobSubTypes } = useJobSubType();
  console.log("defaultValue.jobSubType:", defaultValue.jobSubType);

  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody>
          <AbsoluteCenter>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <Heading my={5} size={"md"}>
                Update JobType
              </Heading>
              <FormControl pb={5} w={"lg"}>
                <FormLabel>Name</FormLabel>
                <Input
                  className="FormControl"
                  placeholder=""
                  {...register("name")}
                />
                {errors.name && <Text color="red">{errors.name.message}</Text>}
              </FormControl>
              <FormControl pb={5} w={"lg"} isInvalid={!!errors.jobSubTypeId}>
                <FormLabel>Job SubTypes</FormLabel>

                <Select
                  {...register("jobSubTypeId")}
                  placeholder="Select Job Subtype"
                >
                  {jobSubTypes?.map((subtype) => (
                    <option key={subtype.id} value={subtype.id}>
                      {subtype.name}
                    </option>
                  ))}
                </Select>
                {errors.jobSubTypeId && (
                  <FormErrorMessage>
                    {errors.jobSubTypeId.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                w={"full"}
                bg={"#294c58"}
                my={10}
              >
                Update
              </Button>
            </form>
          </AbsoluteCenter>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default UpdateJobType;
