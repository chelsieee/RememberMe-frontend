import {Link} from 'react-router-dom'
export const EventList = (props) => {
  
    return (
      <ul>
        {props.events.map((el, index) => (
          <li key={index}>
           <Link to = {`/edit/${el.id}`}>
           {el.title} -since {el.eventDate} -with {el.name}
           </Link> 
            <button onClick={() => props.handleDelete(el)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  

//   return (
//     <div>
//       <div>
//         <span>Good to see you</span>
//       </div>
//     </div>
//   );
};
