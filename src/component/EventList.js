import moment from 'moment'
export const EventList = (props) => {  
    return (
        <div>
      <ul>
        {props.events.map((el, index) => (
          <li key={index}>
          Days Since {el.title} -{moment(el.eventDate).toNow(true)} -with {el.name} -{el.eventDate}     
           <button onClick={() => props.handleEdit(el)}>Edit</button>
            <button onClick={() => props.handleDelete(el)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    );
};
