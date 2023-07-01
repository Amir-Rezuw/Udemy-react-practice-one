import { useForm } from "react-hook-form";
import Card from "../UI/shared/Card";
import Button from "../UI/shared/Button";
import LabeledInput from "../UI/shared/LabeledInput";
import { IUserInputs } from "../../Types/Common";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuid } from "uuid";
const AddUser = ({
  setUsersList,
}: {
  setUsersList: Dispatch<SetStateAction<IUserInputs[]>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserInputs>();

  const onSubmit = (data: IUserInputs) => {
    const idAddedData = { ...data, id: uuid() };
    setUsersList((perviousUsers: IUserInputs[]) => {
      return [...perviousUsers, idAddedData];
    });
    reset();
  };
  return (
    <Card className="my-8 mx-auto p-4 w-11/12 max-w-2xl text-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabeledInput<IUserInputs>
          type="text"
          inputName="name"
          label="Username"
          register={register}
          required
          error={errors.name}
          errorMessage="This field is required"
        />
        <LabeledInput<IUserInputs>
          inputName="age"
          label="Age (Years)"
          register={register}
          type="number"
          error={errors.age}
          errorMessage={
            errors.age?.type === "min"
              ? "Entered value is not valid, age must be 1 or greater."
              : "This field is required"
          }
          inputAdditionalStyles={errors.age && "border border-red-500"}
          required
          min={1}
        />
        <Button
          title="Add User"
          type="submit"
        />
      </form>
    </Card>
  );
};

export default AddUser;
