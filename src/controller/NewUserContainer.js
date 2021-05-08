import axios from "axios";
import { useHistory } from "react-router";
import { NewUser } from "../component/NewUser";

export const NewUserContainer = () => {
  const history = useHistory();

  const handleNewUserSubmit = (user) => {
    console.log(user);
    axios
      .post("http://localhost:3000/api/users", user, {
        "Access-Control-Allow-Credentials": true,
      })
      .then((res) => {
        console.log(res);
        history.replace("/users/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <>
      <NewUser handleSubmit={handleNewUserSubmit} />
    </>
  );
};
