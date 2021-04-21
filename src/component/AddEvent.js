import { props } from 'bluebird'
// import Day from 'es-abstract/5/Day'
import React, {useState} from 'react'

export const AddEvent =() =>{
    // let today = new Date().toLocaleDateString()

const [event, setEvent] =useState({
    title:'',
    name:'',
    eventDate: ''
})
const handleChange =(e) =>{
    console.log("e.target", e.target)
  let newEvent = {...event}
    newEvent[e.target.name] = e.target.value
    setEvent(newEvent)
}

const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('newEvent', event)
    props.submit(event)
}
return(
<div>
    <form onSubmit={handleSubmit}>
        <label>
            Title 
            <input name ='title' type ="text" value ={event.title} placeholder="title" onChange={handleChange}></input>
        </label>
        <label>
            with someone
        <input name ='name' type ="text" value ={event.name} placeholder="his/her name" onChange={handleChange}></input>
        </label>
        <label>
            Since
        <input name ='eventDate' type ="date" value ={event.eventDate} onChange={handleChange}></input>
        </label>
        <label>
            <button type="submit">&#10003;</button>
        </label>
    </form>
</div>
)
}