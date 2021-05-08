import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "70vh",
  },
  avatar: {
    margin: theme.spacing(1),
    height: "80px",
    width: "80px",
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    marginTop: "120px",
    position: "flex",
    background: "linear-gradient(45deg, #bbdefb 10%, #fafafa 90%)",
  },
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
    backgroundImage: `url(https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60)`,
  },
}));
export const AddOrEditEvent = (props) => {
  const classes = useStyles();

  console.log(props.event);
  const [event, setEvent] = useState(props.event);

  const handleChange = (e) => {
    let newEvent = { ...event };
    newEvent[e.target.name] = e.target.value;
    setEvent(newEvent);
  };

  const handleDateChange = (date) => {
    let newEvent = { ...event };
    newEvent.eventDate = date;
    setEvent(newEvent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newEvent", event);
    props.submit(event);
  };

  useEffect(() => {
    const eventEdit = { ...props.event };
    console.log("eventEdit", eventEdit);
    setEvent(eventEdit);
  }, [props.event]);

  return (
    <Paper className={classes.paperContainer}>
      <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxrLDmv_X9QzqnlL7AN5rMe7ZedMFTCaEHw&usqp=CAU"
          ></Avatar>
          <Typography component="h1" variant="h5">
            Save a Day
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              id="standard-full-width"
              label="Title"
              placeholder="event title"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={event.title}
              onChange={handleChange}
              name="title"
            />
            <TextField
              id="standard-full-width"
              label="Name"
              placeholder="His/Her Name"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={event.name}
              onChange={handleChange}
              name="name"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                autoOk="false"
                id="date-picker-dialog"
                label="Date"
                format="yyyy-MM-dd"
                value={event.eventDate}
                maxDate={new Date()}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              submit
            </Button>
            <Grid container alignItems="center" justify="center">
              <Grid item>
                <Link href="/events" variant="body2">
                  {"not ready for changes? Return to Home"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Paper>
  );
};
