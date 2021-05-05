import moment from "moment";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";

const styles = {
  paperContainer: {
    zIndex: -1,
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    backgroundImage: `url(${'https://images.unsplash.com/photo-1539139329395-ceb575183d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1268&q=80'})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
}

export const LandingPage = (props) => {
  const time = () => {
    let date = moment.utc().format("YYYY-MM-DD h:mm:ss");
    console.log(date);
    let stillUtc = moment.utc(date).toDate();
    let local = moment(stillUtc).local().format("LLL");

    console.log(local);
    return local;
  };

  return (
    <>
      <Paper style={styles.paperContainer}>
        <Typography
          variant="h3"
          component="h3"
          style={{ color: "white", margin:"200px 200px 0 200px"}}
        >
          {time()}
        </Typography>
        <Typography
          // gutterBottom
          variant="h4"
          component="h4"
          style={{ color: "white" }}
        >
          <h1>Hi _____,</h1>
          do you still remember that moment?
        </Typography>
      </Paper>
    </>
  );
};
