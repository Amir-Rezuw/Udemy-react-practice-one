import { Fragment, useState } from "react";
import AddUser from "../../Users/AddUser";
import UsersList from "../../Users/UsersList";
import { IUserInputs } from "../../../Types/Common";

const HomeLayout = () => {
  const [usersList, setUsersList] = useState<IUserInputs[]>([]);
  return (
    <Fragment>
      <AddUser setUsersList={setUsersList} />
      <UsersList users={usersList} />
    </Fragment>
  );
};

export default HomeLayout;
