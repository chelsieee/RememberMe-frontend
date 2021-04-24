import { useState, useEffect } from "react";
import axios from 'axios'
import {EventList} from './EventList'
import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

export const ListContainer = () => {
  const [eventList, setEventList] = useState([]);
  const history = useHistory();
  const params =useParams()
  console.log(params)

  const handleDeleteEvent = (event)=>{
      axios.delete(`http://localhost:3000/api/events/${event.id}`,{
        "Access-Control-Allow-Credentials": true,
        headers: {
          'token':window.localStorage.getItem('token')
        }
      }).then((data)=>{
        console.log(data)
        refreshList();
      })
  }

  const handleEditEvent  =(e)=>{
      history.replace(`/events/edit/${e.id}`)
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
      <div>
      <Link to ={'/events/add'}>
            <button>New Event</button>
        </Link>
        <EventList
          events={eventList}
          handleDelete={handleDeleteEvent}
          handleEdit ={handleEditEvent}
       />
      </div>
    </>
  );
};
