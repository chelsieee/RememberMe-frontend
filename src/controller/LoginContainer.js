import axios from "axios";
import { useHistory } from "react-router";
import { LoginUser } from "../component/LoginUser";
export const LoginContainer = (props) => {
  const history = useHistory();

  const handleExistingUserSubmit = (user) => {
    axios
      .post("http://localhost:3000/api/auth/login", user, {
        "Access-Control-Allow-Credentials": true,
      })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem(
          "username",
          JSON.stringify(res.data.username)
        );
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        props.setLoginStatus({ isLoggin: true });
        history.replace("/events");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        window.alert(error.response.data.message);
      });
  };

  return (
    <>
      <LoginUser handleSubmit={handleExistingUserSubmit} />
    </>
  );
};
