import React, {useEffect, useState} from 'react'

export const AddOrEditEvent =(props) =>{
    // let today = new Date().toLocaleDateString()

const [event, setEvent] =useState({
    title:'',
    name:'',
    eventDate: ''
})
const handleChange =(e) =>{

  let newEvent = {...event}
    newEvent[e.target.name] = e.target.value
    setEvent(newEvent)
}

const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('newEvent', event)
    props.submit(event)
}

useEffect(()=>{
    const eventEdit ={...props.event}
    console.log('eventEdit', eventEdit)
    setEvent(eventEdit)
},[props.event])

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