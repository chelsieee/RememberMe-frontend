import moment from "moment";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
// import classes from "*.module.css";

const styles = {
  paperContainer: {
    zIndex: -1,
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(https://wallpapercave.com/wp/wp5429455.jpg)"
    
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
          variant="h2"
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
