import { IUserInputs } from "../../Types/Common";
import Card from "../UI/shared/Card";

const UsersList = ({ users }: { users: IUserInputs[] }) => {
  return (
    <Card
      className={`my-8 mx-auto w-11/12 max-w-2xl ${
        users.length === 0 && "hidden"
      }`}
    >
      <ul className="list-none p-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="border border-ccc my-2 mx-0 p-2 rounded-md"
          >
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
