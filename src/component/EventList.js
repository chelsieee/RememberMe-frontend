export const EventList = (props) => {  
    return (
        <div>
      <ul>
        {props.events.map((el, index) => (
          <li key={index}>
           {el.title} -since {el.eventDate} -with {el.name}      
           <button onClick={() => props.handleEdit(el)}>Edit</button>
            <button onClick={() => props.handleDelete(el)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    );
};
