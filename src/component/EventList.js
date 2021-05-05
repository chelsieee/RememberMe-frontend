import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { sizing } from "@material-ui/system";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { theme } from "../material-ui/theme";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia,
} from "../material-ui/FullImageCard";

const useStyles = makeStyles({
  root: {
    minWidth: 27,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
  
  },
  media: {
    height: "461",
  },
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  },
  listRoot: {
    width: "100%",
    
    backgroundColor: theme.palette.background,
  },
});

export const EventList = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [checkList, setCheckList] = useState([]);
  const testEvents = props.events.map((el) => {
    return { ...el, checked: false };
  });
  console.log(testEvents);

  const handleClick = (e) => {
    console.log("element selected: ", e.target.value);
    if (!e.target.value) {
      e.target.value = true;
    } else {
      e.target.value = false;
    }

    console.log("e.target.id", e.target.id);
    const findIndex = checkList.indexOf(e.target.id);
    console.log("findindex", findIndex);

    if (findIndex < 0) {
      setCheckList([...checkList, e.target.id]);
    } else {
      console.log(findIndex);
      const newCheckList = checkList;
      newCheckList.splice(findIndex, 1);
      setCheckList(newCheckList);
    }
  };
  console.log("checklist: ", checkList);

  const difBtwDays = (end) => {
    let now = moment().startOf("day");
    let duration = moment.duration(now.diff(end));
    let days = Math.abs(duration.asDays());
    let daysInteger = Math.floor(days);
    return daysInteger;
  };

  return (
    <div>
      <div className='buttons'>
        <Link to={"/events/add"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Link>
        <IconButton onClick={() => props.handleDelete(checkList)}>
          <DeleteIcon/>
        </IconButton>
      </div>
      {testEvents[0] && (
        <Box width="100%" className="cardContainer">
          <FiCard className={classes.card}>
            <FiCardActionArea>
              <FiCardMedia
                media="picture"
                alt="sky"
                image="https://images.unsplash.com/photo-1499980762202-04245017d5bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                title="background image"

              />
              <FiCardContent className={classes.fiCardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                  Days Since
                </Typography>
                <Typography gutterBottom variant="h4" component="h2">
                  {testEvents[`${testEvents.length-1}`].title}
                </Typography>
                <Typography gutterBottom variant="h1" component="h2">
                  {difBtwDays(testEvents[`${testEvents.length-1}`].eventDate)}
                </Typography>
                <Typography gutterBottom variant="body1" component="h2">
                  {testEvents[`${testEvents.length-1}`].eventDate}
                </Typography>
                <Typography gutterBottom variant="h4" component="h2">
                  {testEvents[`${testEvents.length-1}`].name}
                </Typography>
              </FiCardContent>
            </FiCardActionArea>
          </FiCard>
        </Box>
      )}
      <Grid>
        {testEvents.map((el, index) => (
          
          <List
            key={index}
            component="nav"
            className={classes.listRoot}
            aria-label="mailbox folders"
          >
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                  <input
                    type="checkbox"
                    id={el.id}
                    key={el.id}
                    onClick={handleClick}
                    value={el.checked}
                  />
                </Avatar>
              </ListItemAvatar>
              <Link to={`/events/edit/${el.id}`}  style={{ textDecoration: 'none', color: "inherit" }}>
              <ListItemText
                key={el.id}
                primary={`${el.title} with ${el.name} for ${difBtwDays(
                  el.eventDate
                )} days`}
                secondary={el.eventDate}
              />
              </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
            
        ))}
      </Grid>
    </div>
  );
};
