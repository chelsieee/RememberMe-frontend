import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AddOrEditEvent } from "../component/AddOrEditEvent";
import axios from "axios";

export const EditContainer = () => {
  const params = useParams();
  console.log(params);
  const history = useHistory();

  const [editEvent, setEditEvent] = useState({
    title: "",
    name: "",
    eventDate: new Date(),
  });

  const handleEditEvent = (event) => {
    console.log("editEvent", event);
    axios
      .patch(`http://localhost:3000/api/events/${params.id}`, event, {
        "Access-Control-Allow-Credentials": true,
        headers: {
          token: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("post response:", res.data);
        history.replace("/events");
      });
  };

  useEffect(() => {
    console.log("do you see me");
    axios
      .get(`http://localhost:3000/api/events/${params.id}`, {
        "Access-Control-Allow-Credentials": true,
        headers: {
          token: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setEditEvent(res.data);
      });
  }, [params.id]);

  return (
    <>
      <div>
        <AddOrEditEvent submit={handleEditEvent} event={editEvent} />
      </div>
    </>
  );
};
