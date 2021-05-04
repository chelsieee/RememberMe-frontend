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
    backgroundImage: `url(${"https://farm5.staticflickr.com/4191/34378176550_faa7d67b12_k.jpg?momo_cache_bg_uuid=a6bc81c5-5d34-4aac-af2b-d78c8"})`,
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
          gutterBottom
          variant="h4"
          component="h4"
          style={{ color: "white" }}
        >
          <h1>{time()}</h1>
        </Typography>
        <Typography
          gutterBottom
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
