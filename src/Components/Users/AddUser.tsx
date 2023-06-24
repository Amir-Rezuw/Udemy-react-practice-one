import { useForm } from "react-hook-form";
import Card from "../UI/shared/Card";
import Button from "../UI/shared/Button";
type IUserInputs = {
  username: string;
  age: number;
};
const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserInputs>();

  const onSubmit = (data: IUserInputs) => {
    console.log(data);
  };
  return (
    <Card className="my-8 mx-auto p-4 w-11/12 max-w-2xl text-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          className="font-bold mb-2 block"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className={`block rounded-md transition duration-500 w-full border border-ccc p-1 mb-2 focus:border focus:border-purple-600 focus:outline-none ${
            errors.username && "border border-red-500"
          }`}
          type="text"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <div className="font-extrabold text-red-500">
            This field is required
          </div>
        )}
        <label
          className="font-bold mb-2 block"
          htmlFor="age"
        >
          Age (Years)
        </label>
        <input
          className={`block rounded-md transition duration-500 w-full border border-ccc p-1 mb-2 focus:border focus:border-purple-600 focus:outline-none ${
            errors.age && "border border-red-500"
          }`}
          type="number"
          {...register("age", { required: true })}
        />
        {errors.age && (
          <div className="font-extrabold text-red-500">
            This field is required
          </div>
        )}
        <Button
          title="Add User"
          type="submit"
        />
      </form>
    </Card>
  );
};

export default AddUser;
