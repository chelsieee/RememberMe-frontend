export const EventList =(props) =>{
    return (
        <ul>
          {props.items.map((el, index)=>(
              
              <li key={index}>
              {el.title} -{el.eventDate} -{el.name}
              <button onClick ={()=>(props.handleEdit(el))}>Edit</button>
              <button onClick ={()=>(props.handleDelete(el))}>Delete</button>
              </li>
          ))}
        </ul>
    )
}