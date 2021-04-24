import {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { AddOrEditEvent } from "./AddOrEditEvent"
import axios from 'axios'

export const EditContainer =() =>{
    const params = useParams()
    console.log(params)
    const history = useHistory();

    const [editEvent, setEditEvent]=useState(
       { title:'',
        name:'',
        eventDate: ''}
    )

   const handleEditEvent =(event)=>{
       console.log('editEvent', event)
       axios.patch(`http://localhost:3000/api/events/${params.id}`, event, {
        "Access-Control-Allow-Credentials": true,
        headers:{
            "token": "eyJhbGciOiJub25lIn0.Mg."
        }
       }).then((res)=>{
        console.log("post response:", res.data);
        history.replace('/')
       })

   }

   useEffect (()=>{
      axios.get(`http://localhost:3000/api/events/${params.id}`, {
        "Access-Control-Allow-Credentials": true,
        headers:{
            "token": "eyJhbGciOiJub25lIn0.Mg."
      }
    }).then ((res)=>{
        console.log(res)
        setEditEvent(res.data)
    })

   },[])

    return(
       <>
       <div>
           <AddOrEditEvent submit={handleEditEvent} event ={editEvent}/>
       </div>
       </> 
    )
}