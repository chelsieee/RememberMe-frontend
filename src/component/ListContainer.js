import { useState, useEffect } from "react";
import axios from 'axios'
import {EventList} from './EventList'
import { useHistory, useParams } from "react-router-dom";


export const ListContainer = () => {
  const [eventList, setEventList] = useState([]);
  const history = useHistory();
  const params =useParams()
  console.log(params)
  
  useEffect(() => {
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
  }, []);

  const handleDeleteEvent =(event)=>{
     
      axios.delete(`http://localhost:3000/api/events/${event.id}`,{
        "Access-Control-Allow-Credentials": true,
        headers: {
          'token':window.localStorage.getItem('token')
        }
      }).then(()=>{
          history.replace('/')
      })
  }

  return (
    <>
      <div>
        <EventList
          events={eventList}
    
          handleDelete={handleDeleteEvent}
       />
      </div>
    </>
  );
};
