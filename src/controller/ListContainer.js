import { useState, useEffect } from "react";
import axios from 'axios'
import {EventList} from '../component/EventList'
import {useParams } from "react-router-dom";


export const ListContainer = () => {
  const [eventList, setEventList] = useState([]);
  const params =useParams()
  console.log(params)

  const handleDeleteEvent = (events)=>{
    console.log('checkList for delete', events)

    events.forEach((e)=>{
      axios.delete(`http://localhost:3000/api/events/${e}`,{
        "Access-Control-Allow-Credentials": true,
        headers: {
          'token':window.localStorage.getItem('token')
        }
      }).then((data)=>{
        console.log(data)
        refreshList();
      })
    }
    )  
  }

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios
    .get("http://localhost:3000/api/events", {
      "Access-Control-Allow-Credentials": true,
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(" Data:", res);
      setEventList(res.data);
  
    });
  }



  return (
    <>
        <EventList
          events={eventList}
          handleDelete={handleDeleteEvent}
       />

    </>
  );
};
