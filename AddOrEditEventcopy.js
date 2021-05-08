import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.44)), url('https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80')`,
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
  },
  formControl: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  form: {
    maxWidth: "80%",
    minHeight: "20vh",
    display: "flex",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  card:{
    minWidth:"80%",
    alignItems: "center",

  }
}));

export const AddOrEditEvent = (props) => {
  const classes = useStyles();

  console.log(props.event)
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
 
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        container
        className={classes.root}
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Card className={classes.card}>
            <CardContent>
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
            </CardContent>
            <CardContent>
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
            </CardContent>
            <CardContent>
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
            </CardContent>
            <CardContent>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </form>
      </Grid>
  );
};
