import { useState, useEffect } from "react";
import axios from 'axios'
import {EventList} from '../component/EventList'
import {LandingPage} from '../component/LandingPage'
import { useHistory, useParams } from "react-router-dom";
import {Link, Route} from 'react-router-dom'

export const ListContainer = (props) => {
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
        <Route path ='/events'>
        <EventList
          events={eventList}
          handleDelete={handleDeleteEvent}
          handleEdit ={handleEditEvent}
       />
        </Route>
        <Route exact path='/'>
       <LandingPage loginStatus={props.loginStatus} setLoginStatus={props.setLoginStatus} />
        </Route>
      </div>
    </>
  );
};
