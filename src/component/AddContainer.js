import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { AddOrEditEvent } from "./AddOrEditEvent"
import axios from 'axios'

export const AddContainer =() =>{
    const history=useHistory()
   
   const handleEventFormSubmit =(event)=>{
       console.log('addEvent', event)
       axios.post("http://localhost:3000/api/events", event, {
        "Access-Control-Allow-Credentials": true,
        headers:{
            "token": "eyJhbGciOiJub25lIn0.Mg."
        }
       }).then((res)=>{
        console.log("post response:", res);
        history.replace('/')
       })

   }

    return(
       <>
       <div>

           <AddOrEditEvent submit={handleEventFormSubmit}/>
       </div>
       </> 
    )
}