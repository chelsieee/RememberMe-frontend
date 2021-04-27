import moment from 'moment'
import {Link} from 'react-router-dom'
export const EventList = (props) => {  
    return (
      <div>
      <Link to ={'/events/add'}>
      <button>New Event</button>
    </Link>
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
      </div>
    );
};
