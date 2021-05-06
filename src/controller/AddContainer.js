import {useHistory} from 'react-router-dom'
import { AddOrEditEvent } from "../component/AddOrEditEvent"
import axios from 'axios'

export const AddContainer =() =>{
    const history=useHistory()
   
   const handleEventFormSubmit =(event)=>{
       console.log('addEvent', event)
       axios.post("http://localhost:3000/api/events", event, {
        "Access-Control-Allow-Credentials": true,
        headers:{
            "token": window.localStorage.getItem('token')
        }
       }).then((res)=>{
        console.log("addEvent response:", res);
        history.replace('/events')
       })

   }

   const initialState = {
       title: "",
       name: "",
       eventDate: new Date()
   }

    return(
       <>
       <div>
           <AddOrEditEvent submit={handleEventFormSubmit} event={initialState}/>
       </div>
       </> 
    )
}